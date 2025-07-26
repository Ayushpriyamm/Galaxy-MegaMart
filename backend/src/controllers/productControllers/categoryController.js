import Category from "../../models/productCategorySchema.js";

export const createCtegory = async (req, res) => {
    try {
        const { name, image } = req.body;

        if (!name) {
            return res.status(401).json({
                sucess: false,
                message: "name is required",
            })
        }

        const category = await Category.findOne({ name });
        if (category) {
            return res.status(401).json({
                sucess: false,
                message: "Category already exist",
            })
        }

        const newCategory = await Category.create({
            name,
            image
        })

        return res.status(201).json({
            sucess: true,
            message: "New Category is created sucessfully",
            data: newCategory
        })
    } catch (error) {
        console.log('Error creating category', error);
        return res.status(500).json({
            sucess: false,
            message: "Internal server error"
        })
    }
}

export const getCategory = async (req, res) => {
    try {
        const allCategories = await Category.find();

        return res.status(200).json({
            sucess: true,
            message: "All category fetched successfully",
            data: allCategories
        })
    } catch (error) {
        console.log('Error getting category', error);
        return res.status(500).json({
            sucess: false,
            message: "Internal server error"
        })
    }
}

export const updateCategories = async (req, res) => {
    const {name,image}=req.body
    try {
        const id = req.params.id;
        
        const category = await Category.findById(id);


        if (!category) {
            return res.status(404).json({
                sucess: false,
                message: "No catergory found",
            })
        }

        const updatedcategory = await Category.findByIdAndUpdate(id,{
            name: name,
            image: image,
        },{new:true})

        return res.status(200).json({
            sucess: true,
            message: "Category Updated sucessfully",
            data: updatedcategory
        })
    } catch (error) {
        console.log('Error updating category', error);
        return res.status(500).json({
            sucess: false,
            message: "Internal server error"
        })
    }
}

export const deleteCategory=async(req,res)=>{
    try {
      const id=req.params.id;
      console.log("id is -> " , id)
      const category=await Category.findById(id);

      if (!category) {
        return res.status(404).json({
            sucess:false,
            message:"Category not found"
        })
      }

      await Category.findByIdAndDelete(id)
      return res.status(200).json({
        sucess:true,
        message:"Category has been deleted sucessfully",
      })
    } catch (error) {
        console.log('Error deleting category', error);
        return res.status(500).json({
            sucess: false,
            message: "Internal server error"
        })
    }
}