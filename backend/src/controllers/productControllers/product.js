import Product from "../../models/productSchema.js";
import Category from "../../models/productCategorySchema.js";

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
            featured,
            rating,
            inStock,
        } = req.body;

        // ✅ Validate required fields
        if (!name || !description || !originalPrice || !quantityType || !inStock || !category || !image) {
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
        const newProduct = await Product.create({
            name,
            description,
            originalPrice,
            discountedPrice,
            quantityType,
            image,
            category,
            featured,
            rating,
            inStock,
        });

        await Category.findByIdAndUpdate(category, {
            $push: { relatedProducts: newProduct._id }
        })

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

export const getAllProduct = async (req, res) => {
    try {
        const allProducts = await Product.find()
            .populate("category")
            .populate({
                path: "category",
                populate: {
                    path: "relatedProducts", // corrected syntax
                }
            })
            .sort({ createdAt: -1 });

        if (!allProducts) {
            return res.status(400).json({
                success: false,
                message: "No proucts at the moments"
            })
        }
        return res.status(200).json({
            success: true,
            message: "All products fetched sucessfully",
            data: allProducts
        })
    } catch (error) {
        console.log("error fetching products", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const updateProduct = async (req, res) => {
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

    try {
        const id = req.params.id
        const product = await Product.findById(id)
        if (!product) {
            return res.status(400).json({
                success: false,
                message: "Product not found"
            })
        }

        if (
            typeof discountedPrice === "number" &&
            discountedPrice >= originalPrice
        ) {
            return res.status(400).json({
                success: false,
                message: "Discounted price must be less than original price",
            });
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                name: name,
                description: description,
                originalPrice: originalPrice,
                discountedPrice: discountedPrice,
                quantityType: quantityType,
                image: image,
                category: category,
                inStock: inStock
            },
            { new: true }
        )

        await Category.findByIdAndUpdate(category, {
            $addToSet: { relatedProducts: updatedProduct._id } // prevents duplicate push
        });

        return res.status(201).json({
            success: true,
            message: "New product created",
            product: updatedProduct,
        });


    } catch (error) {
        console.error("Error updating product:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"

        })
    } catch (error) {
        console.log('Error delteing product', error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}
