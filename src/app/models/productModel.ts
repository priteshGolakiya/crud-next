import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        min: 0
    },
   
    desc: {
        type: String
    },


}, {
    timestamps: true
})
const ProductModel = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default ProductModel