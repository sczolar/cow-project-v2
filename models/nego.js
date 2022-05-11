import mongoose from "mongoose";
var Schema = mongoose.Schema;

var nego = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    phonenum: {
        type: Number,
        required: true,
    },
    negoid: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

mongoose.models = {};

var Nego = mongoose.model("nego", nego);

export default Nego;