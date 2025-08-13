
import Cart from "../../models/cartSchema.js";
import User from "../../models/userSchema.js";



export const addToCart = async (req, res) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return res.status(404).send("user not found");
        }

        const { productId, quantity } = req.body;
        if (!productId || !quantity || quantity < 1) {
            return res.status(400).json({ message: "Invalid product or quantity" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!user.cart) {
            const newCart = await Cart.create({ userId: user._id, products: [] })
            user.cart = newCart._id
            await user.save();
        }


        let cart = await Cart.findById(user.cart);

        const productIndex = cart.products.findIndex(
            p => p.productId.toString() === productId
        );

        if (productIndex > -1) {
            cart.products[productIndex].quantity += quantity;
        } else {
            cart.products.push({ productId, quantity });
        }

        await cart.save();

        return res.status(200).json({ message: "Product added to cart", cart });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const removeFromCart = async (req, res) => {
    try {
        const userId = req.user._id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send("User not found");
        }

        const { productId } = req.body;

        let cart = await Cart.findById(user.cart);
        if (!cart) {
            return res.status(404).send("Cart Not Found");
        }

        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

        if (productIndex == -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        const product = cart.products[productIndex];

        product.quantity -= 1;

        if (product.quantity <= 0) {
            cart.products.splice(productIndex, 1);
        }

        await cart.save();

        return res.status(200).json({
            success: true,
            message: "Product removed form cart",
            data:cart
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const getCart=async(req,res)=>{
    try {
        const userId =req.user._id;

        const cartData=await Cart.find({userId:userId}).populate('products.productId');
       
        if(!cartData){
            return res.status(400).send("Cart not found");
        }

        return res.status(200).json({
            success:true,
            message:"Cart fetched successfully",
            data:cartData,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

export const emptyCart=async(req,res)=>{
    try {
        const userId=req.user._id;

        const cart =await Cart.find({userId:userId});

        if(!cart){
            return res.status(404).send("cart not found");
        }
        cart.products=[];

        return res.status(200).json({
            success:true,
            message:"Cart emptied successfully",
            data:cart
        })
    } catch (error) {
        
    }
}
