const AddToCartSchema = require("../model/AddToCartModelForUser")
const addCartProductToDb = async (req, res) => {
    const { userId, id, name, rate, margin, mrp, imageUrl } = req.body; 
    try {
        const preproduct = await AddToCartSchema.findOne({ id: id })
        if (preproduct) {
            return res.status(201).json("product is already in cart")
        } else {
            const addProduct = AddToCartSchema({ userId, id, name, rate, margin, mrp, imageUrl })
            await addProduct.save();
            return res.status(201).json(addProduct)
        }
         // return  res.send(201).json({ message: "product added to cart succesfully" })
    } catch (error) {
        return res.status(404).json("Error", error)
    }
}
module.exports = { addCartProductToDb }