import { modalOpen } from "./modal.js";
import { getAndShowAllProducts } from "./product.js";
import { buildModal } from "./modal.js";

const createBtn = document.getElementById("createBtn");
createBtn.addEventListener("click", modalOpen);

buildModal();
getAndShowAllProducts();

