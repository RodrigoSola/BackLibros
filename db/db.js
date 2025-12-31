import { connect } from "mongoose";
import { MONGO_URI } from "../config.js";

export const connectDB = async () => {
    try {
        await connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}