import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    image: {
        type: String,
        default: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/4a640b87-3b62-4846-8049-aaef63bcaf6a-Fruits.jpg"
    },
    relatedProducts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
})


const category = mongoose.model('Categories', categorySchema);
export default category;