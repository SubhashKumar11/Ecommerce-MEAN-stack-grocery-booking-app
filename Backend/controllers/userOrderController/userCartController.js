const userCartModel = require('../../model/userOrderData/userCartModel');
 const addItemToCartByUser = async (req, res) => {
        const { id, rate, name, margin, mrp, imageUrl, category } = req.body;
        const email = req.email;
        try {
            let user = await userCartModel.findOne({ email });
            if (!user) {
                user = new userCartModel({ email, cart: [] });
            } const cartItemIndex = user.cart.findIndex(item => item.id === id);
            if (cartItemIndex >= 0) {
                user.cart[cartItemIndex].quantity += quantity; // Update quantity if item exists
                 } else {
                user.cart.push({ id, rate, name, margin, mrp, imageUrl, category }); // Add new item 
                } 
                const data = await user.save(); 
                 // console.log(data);
                res.status(200).json({ message: 'Item added to cart successfully!' });
            } catch (error) {
                res.status(500).json({ message: 'Error adding to cart', error });
            }
        };
        module.exports = { addItemToCartByUser }; 