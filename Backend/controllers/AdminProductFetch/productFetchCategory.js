const mongoose = require('mongoose');
const allItemListModel = require('../../model/AddAllItemModel');
const getProductByCategoryForCosmetic = async (req, res) => {
    try {
        const cosmeticItems = await allItemListModel.find({ category: 'cosmetic' })
        res.status(201).json(cosmeticItems);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
        //console.log("Error while getting cosmetic order list", error); 
    }
}
const getProductByCategoryForSpecies = async (req, res) => {
    try {
        const speciesItem = await allItemListModel.find({
            category: 'species'
        }); res.status(201).json(speciesItem);
    } catch (error) {
        res.status(500).json({
            error:
                error.message
        });
    }
}
const getProductByCategoryForGrocery = async (req, res) => {
    try {
        const speciesItem = await allItemListModel.find({ category: 'grocery' });
        res.status(201).json(speciesItem);
    } catch (error) {
        res.status(500).json({
            error:
                error.message
        });
    }
}
const getProductByCategoryForFmcg = async (req, res) => {
    try {
        const speciesItem = await allItemListModel.find({ category: 'fmcg' });
        res.status(201).json(
            speciesItem);
    } catch (error) { res.status(500).json({ error: error.message }); }
}
const getProductByCategoryForOthers = async (req, res) => {
    try {
        const speciesItem = await
            allItemListModel.find({ category: 'others' });
        res.status(201).json(speciesItem);
    } catch
    (error) { res.status(500).json({ error: error.message }); }
};
const getProductByCategoryForSpecial = async (req, res) => {
    try {
        const speciesItem = await
            allItemListModel.find({ category: 'others' });
        res.status(201).json(speciesItem);
    } catch
    (error) { res.status(500).json({ error: error.message }); }
};
module.exports = {
    getProductByCategoryForCosmetic, getProductByCategoryForSpecies,
    getProductByCategoryForGrocery, getProductByCategoryForFmcg,
    getProductByCategoryForOthers,getProductByCategoryForSpecial
}
