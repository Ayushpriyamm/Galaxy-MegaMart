import Router from 'express'
import { authorizedRoles, verifyUser } from '../middlewares/verifyUser.js';
import { createCtegory, deleteCategory, getCategory, updateCategories } from '../controllers/productControllers/categoryController.js';
import { getProductByCategory } from '../controllers/productControllers/productFetching.js';

const router=Router();

router.get('/get-categories',getCategory)
router.get('/products/:id',getProductByCategory)
router.post('/create-category',verifyUser,authorizedRoles('Admin'),createCtegory)
router.post('/update-category/:id',verifyUser,authorizedRoles('Admin'),updateCategories);
router.delete('/delete-category/:id',verifyUser,authorizedRoles('Admin'),deleteCategory)


export default router;