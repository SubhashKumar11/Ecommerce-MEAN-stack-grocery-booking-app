 const express = require('express');
 const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const authenticateToken = require('../middleware/emailAuth');
 const { addProductToDb, addAllItemByAdmin, deleteProductFromDb, getProduct, getSingleProductDetail } = require('../controllers/controller');
 const { addCartProductToDb } = require('../controllers/AddToCartForUserController');
 const { signin, signup, logout, profile } = require('../controllers/userController');
 const { searchItem } = require('../controllers/searchItemController');
 const { addItemToCartByUser } = require('../controllers/userOrderController/userCartController');
 const { userOrderDetails } = require('../controllers/userOrderController/userOrderController');
 const { itemCount, addAllItemTotal, addAllItemTotalForCheckout, verifyPayment } = require("../controllers/userOrderController/userOrderController");
 const { getProductByCategoryForCosmetic,getProductByCategoryForSpecial ,getProductByCategoryForSpecies, getProductByCategoryForGrocery, getProductByCategoryForFmcg, getProductByCategoryForOthers } = require('../controllers/AdminProductFetch/productFetchCategory');
 const { SaveoffersImage, getOffersImage } = require("../controllers/offersImageController");
 router.post('/postproduct', addProductToDb);
 router.post('/postproductbyadmin', addAllItemByAdmin);

 router.delete('/deleteproduct/:id', deleteProductFromDb);
 //router.patch('/update');
 router.get('/getcount', itemCount);
 router.get('/get-special', getProductByCategoryForSpecial);
 router.get('/get-single-product/:id', getSingleProductDetail); 
//to post product to cart added by user
router.post('/postproductToCart', addCartProductToDb);
 //login and signup
 router.post('/signup', signup);
 router.post('/signin', signin);
 router.post('/logout', logout);
 router.get('/profile', checkAuth, profile);
 router.get('/searchItem', searchItem);
 router.post('/add-item-to-cart', authenticateToken, addItemToCartByUser);
 router.get('/orders/:email', authenticateToken, userOrderDetails);
 router.get('/itemCount/:email', authenticateToken, itemCount);
 //get product by category for each item 
router.get('/cosmetic', getProductByCategoryForCosmetic);
router.get('/species', getProductByCategoryForSpecies);
router.get('/grocery', getProductByCategoryForGrocery);
router.get('/fmcg', getProductByCategoryForFmcg);
router.get('/others', getProductByCategoryForOthers);
//offers image add route 
router.post('/offer-image', SaveoffersImage);
router.get('/get-offer-image', getOffersImage);
 //total sum of added product
 router.get('/totalsum/:email', authenticateToken, addAllItemTotal);
 //for razorpay
router.post('/payment/:email', authenticateToken, addAllItemTotalForCheckout);
router.post('/verify-payment/:email', authenticateToken, verifyPayment);
 module.exports = router;