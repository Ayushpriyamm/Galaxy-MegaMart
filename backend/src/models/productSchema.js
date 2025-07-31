import mongoose, { Schema } from 'mongoose'


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number
    },
    quantityType: {
        type: String,
        enum: ["kg", "gm", "ml", 'L', 'units'],
        required: true
    },
    image: {
        type: String,
        default: "https://www.urbangroc.com/wp-content/uploads/2023/01/pngwing.com_.png.webp"
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Categories",
    },
    inStock: {
        type: Number,
        required: true
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating: {
        type: String,
        default:"1"
    }
}, { timestamps: true })
productSchema.index({ description: 'text', name: 'text' });
const product = mongoose.model('Product', productSchema);
export default product;