import Router from 'express'
import { addToCart, getCart, removeFromCart } from '../controllers/cartControllers/cart.js';
import { verifyUser } from '../middlewares/verifyUser.js';

const router = Router();

router.post('/addToCart', verifyUser ,addToCart)
router.post('/removeFromCart', verifyUser ,removeFromCart)
router.get('/getCart',verifyUser,getCart);

export default router;