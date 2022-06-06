const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: ture },
    password: { type: String, required: true },

}, { timestamps: true });

export default mongoose.model("Product", UserSchema);