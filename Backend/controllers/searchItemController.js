const userModel = require('../model/model');
const searchItem = async (req, res) => {
    const searchTerm = req.query.q;
    try {
        const items = await userModel.find(
            { name: { $regex: searchTerm, $options: 'i' } });
        res.json(items);
    } catch
    (error) {
        res.status(500).json({ message: 'Error while searching items', error });
    }
}
module.exports = { searchItem }; 