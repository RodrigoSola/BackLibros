import { Router } from "express";
import { createBook, deleteBook, getBooks, updateBook } from "../controller/bookController.js";

const bookRouter = Router();

bookRouter.post("/create", createBook)
bookRouter.get("/get", getBooks)
bookRouter.put("/update/:id", updateBook)
bookRouter.delete("/delete/:id", deleteBook)

export default bookRouter;