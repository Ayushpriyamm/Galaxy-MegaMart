import Router from 'express';
import { createProduct, deleteProduct, getAllProduct, updateProduct } from '../controllers/productControllers/product.js';
import { authorizedRoles, verifyUser } from '../middlewares/verifyUser.js';
import { getProductById } from '../controllers/productControllers/productFetching.js';

const router = Router();

router.post('/create-product',
    verifyUser,
    authorizedRoles('Admin'),
    createProduct
);
router.get(
    '/all-products',
    getAllProduct
);


router.post(
    '/update-products',
    verifyUser,
    authorizedRoles('Admin'),
    updateProduct
)

router.delete(
    '/delet-products',
    verifyUser,
    authorizedRoles('Admin'),
    deleteProduct

)

router.get(
    '/:id',
    getProductById
)





export default router