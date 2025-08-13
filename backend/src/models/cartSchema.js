import mongoose, { Schema } from 'mongoose'

const CartSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, default: 1 }
        }
    ]
}, { timestamps: true })

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;