import Router from 'express';
import {signOut, signUp,signin} from '../controllers/userController/authentication.js';
import { verifyUser } from '../middlewares/verifyUser.js';

const router=Router();

router.post('/signup',signUp);
router.post('/signin',signin);

router.get('/profile',verifyUser,function(req,res){
    return res.send("This is my profile")
})

router.post('/logout',signOut)
export default router;