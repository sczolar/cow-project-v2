import mongoose from "mongoose";
var Schema = mongoose.Schema;

var list = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    },
    detail: {
        type: String,
        required: true,
        trim: true
    },
    dlist: {
        type: [String],
        required: true,
    },
    price: {
        type:Number,
        required: true,
    }
});

mongoose.models = {};

var List = mongoose.model("list", list);

export default List;