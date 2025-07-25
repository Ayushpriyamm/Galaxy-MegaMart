import product from "../../models/productSchema.js";

export const createProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            originalPrice,
            discountedPrice,
            quantityType,
            image,
            category,
            inStock,
        } = req.body;

        // ✅ Validate required fields
        if (!name || !description || !originalPrice || !quantityType || !inStock) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        // ✅ Validate discounted price logic
        if (
            typeof discountedPrice === "number" &&
            discountedPrice >= originalPrice
        ) {
            return res.status(400).json({
                success: false,
                message: "Discounted price must be less than original price",
            });
        }

        // ✅ Create product
        const newProduct = await product.create({
            name,
            description,
            originalPrice,
            discountedPrice,
            quantityType,
            image,
            category,
            inStock,
        });

        return res.status(201).json({
            success: true,
            message: "New product created",
            product: newProduct,
        });
    } catch (error) {
        console.error("Error creating product:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const getAllProduct=async (req,res)=>{
    try {
        const allProducts=await product.find().sort({createdAt:-1});

        if(!allProducts){
            return res.status(400).json({
                success:false,
                message:"No proucts at the moments"
            })
        }
        return res.status(200).json({
            success:true,
            message:"All products fetched sucessfully",
            data:allProducts
        })
    } catch (error) {
        console.log("error fetching products",error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}
