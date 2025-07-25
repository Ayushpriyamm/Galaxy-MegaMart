import Router from 'express';
import { createProduct, getAllProduct } from '../controllers/productControllers/product.js';
import { authorizedRoles, verifyUser } from '../middlewares/verifyUser.js';

const router=Router();

router.post('/create-product', verifyUser, authorizedRoles('Admin'), createProduct);
router.get('/all-products',getAllProduct);



export default router