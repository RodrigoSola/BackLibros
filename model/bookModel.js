import { Schema, model } from "mongoose";

const bookModel = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    toLowercase: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    toLowercase: true,
  },
  stock: {
    type: Number,
    default: 0,
    min: 0,
  },
  price: {
    type: Number,
    default: 0,
    min: 1,
  },
});

export default model("Book", bookModel);
