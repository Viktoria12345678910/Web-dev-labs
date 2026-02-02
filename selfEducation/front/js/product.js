import { modalOpen } from "./modal.js";
import { collectFormData } from "./modal.js";

export async function sendData() {
    await fetch("http://localhost:4000/product/create", {
        method: "POST",
        body: collectFormData(),
    });
}

async function removeProduct(a, b) {
    let deleteParams = JSON.stringify({ _id: a, cloudinaryPublicId: b });
    await fetch("http://localhost:4000/product/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: deleteParams,
    }).then(() => {
        getAndShowAllProducts();
    });
}

export const getAndShowAllProducts = async () => {
    await fetch("http://localhost:4000/product/list")
        .then((response) => response.json()) // Парсимо [object Response]
        .then((data) => {
            // Парсимо [object Promise]
            const dataContainer = document.querySelector(".dataContainer");
            dataContainer.innerHTML = ""; // Очищуємо контейнер
            const { products } = data;
            products.forEach((product) => {
                let productCard = document.createElement("div");
                productCard.classList.add("element");

                productCard.innerHTML = `
                    <div class="element-data">
                        <img src="${product.image}" class="element-img">
                        <div class="element-name">${product.name}</div>
                        <p class="element-text">Volume: <span class="element-volume">${product.volume}</span> ml</p> 
                        <p class="element-text">Material: <span class="element-material">${product.material}</span></p> 
                    </div>
                    <div class="element-footer">
                        <button class="btn btn-primary" id="edit${product._id}">Edit</button><span> </span>
                        <button class="btn btn-danger" id="remove${product._id}">Delete</button>
                    </div>
                    `;

                const dataContainer = document.querySelector(".dataContainer");
                dataContainer.appendChild(productCard);

                const editBtn = document.getElementById(`edit${product._id}`);

                editBtn.addEventListener("click", () => {
                    editProduct(
                        product._id,
                        product.name,
                        product.volume,
                        product.material,
                        product.image,
                        product.cloudinaryPublicId
                    );
                });
                const removeBtn = document.getElementById(
                    `remove${product._id}`
                );

                removeBtn.addEventListener("click", () => {
                    if (confirm( `Do you really want to remove product ${product.name}`)) {
                        removeProduct(product._id, product.cloudinaryPublicId);
                    }
                });
            });
        });
};

export const editProduct = (id, name, volume, mat, img, cloud) => {
    document.getElementById("productId").value = id;
    document.getElementById("productName").value = name;
    document.getElementById("productVolume").value = volume;
    document.getElementById("productMaterial").value = mat;
    document.getElementById("formImage").setAttribute("src", img);
    document.getElementById("oldCloudinaryPublicId").value = cloud;
    document.getElementById("oldImagePath").value = img;
    modalOpen();
};
