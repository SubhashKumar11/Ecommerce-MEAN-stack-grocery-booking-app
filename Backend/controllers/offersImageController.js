const OffersimageModel = require('../model/offersProductModel');

const SaveoffersImage = async (req, res) => {
    const { imageUrl } = req.body;
    try {
        const preproductImage = await OffersimageModel.findOne({ imageUrl: imageUrl })
        if (preproductImage) {
            return res.status(201).json({ message: 'image already exist', preproductImage });
        } else {
            const addProductImage = OffersimageModel({ imageUrl })
            await addProductImage.save();
            return res.status(201).json({ message: 'saved image', addProductImage });
        }
    } catch (error) {
        return res.status(404).json(error);
    }
}
const getOffersImage = async (req, res) => {
    try {
        const getImage = await OffersimageModel.find();
        res.status(201).json({
            message: 'image fetched', getImage
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = { SaveoffersImage, getOffersImage };