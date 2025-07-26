import Category from "../../models/productCategorySchema.js";
import Product from "../../models/productSchema.js";

export const getProductById=async(req,res)=>{
    try {
        const id=req.params.id;

        const product=await Product.findById(id).populate("category");
        if(!product){
            return res.status(404).json({
                success:false,
                message:"Product not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Product fetched successfully",
            data:product
        })

        
    } catch (error) {
        console.log('Error Fetching Product',error);
        return res.status(501).json({
            success:false,
            message:"Error in fetching Product",
        })
    }
}

export const getProductByCategory=async(req,res)=>{
    try {
        const categoryId=req.params.id;

        const catergory=await Category.findById(categoryId)

        if(!catergory){
            return res.status(404).json({
                success:false,
                message:"Category not found",
            })
        }

        const products=await Product.find({category:categoryId})

        return res.status(200).json({
            success:true,
            message:"Products fetched successfully",
            data:products
        });

    } catch (error) {
        console.log('Error fetching product by category',error);
        return res.status(501).json({
            success :false,
            message:"Internal Server Error"
        })
    }
}