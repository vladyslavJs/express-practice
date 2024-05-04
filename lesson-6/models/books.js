import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ["Action", "Biography", "History", "Kids", "Learning", "Sci-Fi"]
    },
    year: {
        type: Number,
        default: 2024
    },
    pages: {
        type: Number,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true,
}
);

export default mongoose.model("Book", bookSchema); // books - collection name