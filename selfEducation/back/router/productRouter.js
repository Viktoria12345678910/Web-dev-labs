import express from "express";
import { createAndEditProduct, deleteProduct, getAllProducts } from "../controllers/productController.js";

const productRouter = express.Router();
const jsonParser = express.json();

productRouter.post("/create", createAndEditProduct);
productRouter.get("/list", getAllProducts);
productRouter.delete("/delete", jsonParser, deleteProduct);
export default productRouter;
