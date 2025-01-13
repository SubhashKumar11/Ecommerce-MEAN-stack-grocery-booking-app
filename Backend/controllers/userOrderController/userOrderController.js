require("dotenv").config(); 
//const userOrderModel = require('../../model/userOrderData/userOrderModel'); 
const userCartModel = require('../../model/userOrderData/userCartModel');
 const Razorpay = require('razorpay');
//create razorpay instance 
const razorpay = new Razorpay({ key_id:
process.env.RAZORPAY_KEY_ID,
 key_secret: process.env.RAZORPAY_KEY_SECRET
})
 // Fetch user-specific orders
  const userOrderDetails = async (req, res) => {
     const email = req.email;
      try {
    const orders = await userCartModel.find({ email: email });
    res.status(200).json(orders);
     // console.log(orders);
      } catch (error) { res.status(500).json({
    message: 'Error fetching orders', error
}); } };
 //itemcount gives wrong count value as aoutput need to correct
  const itemCount = async (req, res) => {
    const email = req.email;
    try {
        const orders = await userCartModel.findOne({ email }, { __v: 1 });
         const mycount = await (orders.__v);
          return res.status(200).json(mycount);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
} //sum all items of cart for checkout const
addAllItemTotal = async (req, res) => { 
    // const email = req.email;
     // const { id, rate,name, margin, mrp, imageUrl} = req.body;
 try {
    const email = req.email;
     const products = await userCartModel.
     aggregate([{ $match: { email: email } }, { $unwind: '$cart' }, {
            $group:
                { _id: null, total: { $sum: '$cart.rate' } }
        }]);
         // console.log(products);
    res.json(products[0].total);
} catch (error) {
    res.status(500).json({
        message: 'error while calculating total sum',error });
     }
    } 
    const addAllItemTotalForCheckout = async (req, res) =>
{
     // const email = req.email;
      // const { id, rate, name, margin, mrp, imageUrl } = req.body;
            try {
                const email = req.email; const products = await userCartModel.aggregate([{
                    $match: { email: email }
                }, { $unwind: '$cart' }, {
                    $group: {
                        _id: null, total: {
                            $sum:
                                '$cart.rate'
                        }
                    }
                }]); // console.log(products);
                 // const cartTotal = res.json(products[0].total);
                //razor start 
                //for razorpay 
                const options = { amount: (products[0].total) * 100,
                     currency: "INR",
                      receipt: `order_rcptid_${new Date().getTime()}`
            };
             // console.log('code run upto here') 
             const order = await razorpay.orders.create(options);
              return res.json(order);
               //const amounts = res.json({ messsage: 'orderid of item', orderId: order.id, amount: cartTotal });
            //console.log(myres);
             } catch (error) { res.status(500).json({ message: 'error while calculating total sum',error });
             } } 
             //verify payment
              const verifyPayment = async(req, res) => {
                    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
                    const crypto = require('crypto');
                     const hash = crypto.createHmac('sha256',
                        razorpay.key_secret).update(`${razorpay_order_id}|${razorpay_payment_id}`)
                        .digest('hex');
                         if (hash === razorpay_signature) {
                            return res.status(200).json({
                                success:
                                    true, message: 'Payment verified'
                            });
                        } else {
                        return res.status(400).json({
                            success: false,
                            message: 'Payment verification failed'
                        });
                    }
                }
             module.exports = {
                    userOrderDetails, itemCount, addAllItemTotal, addAllItemTotalForCheckout, verifyPayment
                };
