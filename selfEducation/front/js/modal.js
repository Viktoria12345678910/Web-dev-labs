import { getAndShowAllProducts } from "./product.js";
import { sendData } from "./product.js";

export function collectFormData() {
    const productForm = document.forms["productForm"];
    let formData = new FormData(productForm);
    // Очищуємо форму
    document.getElementById("productId").removeAttribute('value');
    document.getElementById("oldCloudinaryPublicId").removeAttribute("value");
    document.getElementById("oldImagePath").removeAttribute("value");
    productForm.reset();
    return formData;
}

export function buildModal(params) {
    const modalContaiter = document.querySelector(".modal-container");
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
    modalOverlay.classList.add("modal-close");
    modalOverlay.dataset.close = "true";
    modalOverlay.setAttribute("id", "modalOverlay");
    modalOverlay.innerHTML = `
    <div class="modal-window">
    
        <div class="modal-header">
            <span class="modal-title">Product Options</span>
            <span class="modal-close-btn" data-close="true">&times;</span>
        </div>
    
        <div class="modal-content">
            <form name="productForm" enctype="multipart/form-data" method="post">
                <input type="hidden" name="productId" id="productId">
                <input type="hidden" name="oldCloudinaryPublicId" id="oldCloudinaryPublicId">
                <input type="hidden" name="oldImagePath" id="oldImagePath">
                <table class="form-table">
                    <tr>
                        <td class="form-label"><label for="productName">Product name:</label> </td>
                        <td class="form-input"><input type="text" name="productName" id="productName" class="form-control" required></td>
                    </tr>
                    <tr>
                        <td class="form-label"><label for="productVolume">Product volume:</label> </td>
                        <td class="form-input"><input type="number" name="productVolume" id="productVolume" class="form-control" min="20" max="2000" required></td>
                    </tr>
                    <tr>
                        <td class="form-label"><label for="productMaterial">Product material:</label> </td>
                        <td class="form-input">
                            <select name="productMaterial" id="productMaterial" class="form-select" >
                                <option>Glass</option>
                                <option>Porcelian</option>
                                <option>Silicon</option>
                                <option>Plastic</option>
                                <option>Paper</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="form-image-container">
                            <img class="form-image" id="formImage" >
                        </td>
                    </tr>
                    <tr>
                        <td class="form-label"><label for="productImage">Product image:</label> </td>
                        <td class="form-input"><input type="file" name="productImage" id="productImage" class="form-control" ></td>
                    </tr>
                </table>
                <div class="modal-footer">
                    <input type="submit" class="btn btn-success" id="submitBtn" value="Confirm">
                    <input type="reset" class="btn btn-danger" id="cancelBtn" data-close="true" value="Cancel">
                </div>
            </form>
        </div>
</div>`;
    modalContaiter.appendChild(modalOverlay);
    modalOverlay.addEventListener("click", listener);

    const productImage = document.getElementById("productImage");
    productImage.addEventListener("change", function () {
        document.getElementById("formImage").src = window.URL.createObjectURL(
            this.files[0]
        );
    });

    const productForm = document.forms["productForm"];
    productForm.addEventListener("submit", (e) => {
        e.preventDefault();

        modalClose();
        sendData().then(() => {
            getAndShowAllProducts();
        });
    });
}

export const modalOpen = () => {
    modalOverlay.classList.remove("modal-close");
    modalOverlay.classList.add("modal-open");
};

function modalClose() {
    modalOverlay.classList.remove("modal-open");
    modalOverlay.classList.add("modal-close");
    document.getElementById("formImage").removeAttribute("src");
}

// const modalOverlay = document.querySelector(".modal-overlay");

const listener = (event) => {
    if (event.target.dataset.close) {
        modalClose();
    }
};

// buildModal();
