//this is admin controller
 const userSchema =  require("../model/model");
  const allItemListmodel = require("../model/AddAllItemModel")
const addProductToDb = async (req, res) => {
    const { id, name, rate, margin, mrp,
        imageUrl, category } = req.body; try {
            const preproduct = await userSchema.findOne({
                id: id
            });
             if (preproduct) {
                 return res.status(201).json(preproduct);
                 } else {
                const addProduct = userSchema({ id, name, rate, margin, mrp, imageUrl, category });
                 await addProduct.save();
                return res.status(201).json(addProduct);
            }
        } catch (error) {
            return
            res.status(404).json(error);
        }
} //add all item by admin 
const addAllItemByAdmin = async (req, res) => {
    const { id, name, rate, margin, mrp, imageUrl, category } = req.body
     try {
        const CheckaddItemByAdmin = await allItemListmodel.findOne({ id: id }); 
        if
            (CheckaddItemByAdmin) {
                return res.status(201).json({
                    message: "product is already in the cart"}) 
                } else {
                     const addProduct = allItemListmodel({ id,name,rate,margin,mrp,imageUrl, category });
 await addProduct.save();
  return res.status(201).json(addProduct)
        }
    }
        catch (error) {
             return res.status(401).json(error); 
            }
} 
const deleteProductFromDb = async(req, res) => {
        try {
            const productId = req.params.id;
             const deleteProduct = await userSchema.findByIdAndDelete(productId)
              if (!productId) {
                res.status(201).json({
                    "message": "Product not find of requested Id"
                })
            } else {
                res.status(201).json({
                    message:
                        "Product deleted succesfully! "
                })
            }
        } catch (error) {
            console.log("Error while deleting",
                error);
                 res.status(500).json({ message: 'Internal server error' });
        }
}
 const itemCount = async (req, res) => {
        try {
            const getCount = await userSchema.countDocuments(); //
            res.status(200).json(getCount)
        } catch (error) {
            res.status(500).json({
                error:
                    error.message
            })
        }
} 
const getProduct = async (req, res) => {
    try {
        const get = await
            userSchema.find();
             res.status(200).json(get)
    } catch (error) {
        res.status(500).json({
            error:
                error.message
        })
    }
} 
const getSingleProductDetail = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
         const singleProduct = await userSchema.findOne(_id === productId);
          res.status(200).json(singleProduct) ;
          console.log(singleProduct)
    } catch
    (error) { res.status(500).json({ Error: error.message }) }
} 

module.exports = { addProductToDb,addAllItemByAdmin, deleteProductFromDb,
        itemCount, getProduct,getSingleProductDetail
};