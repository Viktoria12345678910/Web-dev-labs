"use strict";
const cards = document.getElementById("cards");
let editingKey = null;

const createCard = () => {
	cards.innerHtml = ""
	const myArray = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
	for(let product of myArray){	
	const bottomRow = document.createElement("div");
	bottomRow.classList.add("bottomRow");

	const price = document.createElement("div");
	price.classList.add("price");
	price.textContent= product.price;

	const editBtn = document.createElement("i");
	editBtn.classList.add("fa-regular");
	editBtn.classList.add("fa-pen-to-square");

	const deleteBtn = document.createElement("i");
	deleteBtn.classList.add("fa-regular");
	deleteBtn.classList.add("fa-trash-can");


	bottomRow.appendChild(price);
	bottomRow.appendChild(editBtn);
	bottomRow.appendChild(deleteBtn);

	const info = document.createElement("div");
	info.classList.add("info");

	const productName = document.createElement("div");
	productName.classList.add("productName");
	productName.textContent = product.title;

	const productDesc = document.createElement("div");
	productDesc.classList.add("productDesc");
	productDesc.textContent = product.description;

	info.appendChild(productDesc);
	info.appendChild(productName);
	info.appendChild(bottomRow);

	const topPart = document.createElement("div");

	const badge = document.createElement("div");
	badge.classList.add("badge");
	badge.textContent = product.discountPercentage;

	const photo = document.createElement("img");
	photo.classList.add("imageArea");
	photo.setAttribute('src', product.image);

	const cat = document.createElement("div");
	cat.classList.add("categoryChip");
	cat.textContent = product.category;

	topPart.appendChild(badge);
	topPart.appendChild(photo);
	topPart.appendChild(cat);

	const card = document.createElement("div");
	card.classList.add("card");
	card.appendChild(topPart);
	card.appendChild(info);
	card.setAttribute("data-id", product.id);
	card.setAttribute("data-rating", product.rating);
	card.setAttribute("data-stock", product.stock);
	card.setAttribute("data-brand", product.brand);
	cards.appendChild(card);
	}
} 
createCard();
  function openModal() {
    editingKey = null
    document.querySelector("#modal h2").textContent = "Create product";
    document.getElementById("overlay").classList.add("active");
  }

function openEditModal(key){
	const product = JSON.parse(localStorege.getIteam(key));
	editingKey = key;

	document.querySelector("#modal h2").textContent = "Edit product";
	document.getElentById("title").value = product.title || "";
	document.getElementById("description").value = product.description || "";
	document.getElementById("price").value = product.price || "";
	document.getElementById("discount").value = product.discount || "";
	document.getElementById("stock").value = product.stock || "";
	document.getElementById("brand").value = product.brand || "";
	document.getElementById("category").value = product.category || "";
	document.getElementById("image").value = product.image || "";
	document.getElementById("overlay").classList.add("active");
}

  function closeModal() {
    document.getElementById("overlay").classList.remove("active");
    clearForm();
  }

  function handleOverlayClick(e) {
    if (e.target === document.getElementById("overlay")) closeModal();
  }

  function clearForm() {
    ["title","description","price","discount","stock","brand","image"].forEach(id => {
      document.getElementById(id).value = "";
      document.getElementById(id).classList.remove("error");
    });
    document.getElementById("category").value = "";
    document.getElementById("category").classList.remove("error");
    document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
  }

  function validate() {
    let valid = true;

    const required = ["title", "description", "price", "discount", "category", "image"];
    required.forEach(id => {
      const el = document.getElementById(id);
      const errEl = document.getElementById("err-" + id);
      if (!el.value.trim()) {
        el.classList.add("error");
        errEl.textContent = "This field is required.";
        valid = false;
      } else {
        el.classList.remove("error");
        errEl.textContent = "";
      }
    });

    ["price", "discount", "stock"].forEach(id => {
      const el = document.getElementById(id);
      if (el.value !== "" && Number(el.value) < 0) {
        el.classList.add("error");
        const errEl = document.getElementById("err-" + id);
        if (errEl) errEl.textContent = "Cannot be negative.";
        valid = false;
      }
    });

    return valid;
  }
let n = 0;
const writeToStorage = (obj) => {
	n +=1;
	localStorage.setItem("product"+n, JSON.stringify(obj));
}
  function saveProduct(e) {
    e.preventDefault();
    if (!validate()) return;

    const product = {
      title: document.getElementById("title").value.trim(),
      description: document.getElementById("description").value.trim(),
      price: Number(document.getElementById("price").value),
      discount: Number(document.getElementById("discount").value),
      stock: document.getElementById("stock").value ? Number(document.getElementById("stock").value) : null,
      brand: document.getElementById("brand").value.trim(),
      category: document.getElementById("category").value,
      image: document.getElementById("image").value.trim(),
    };
	if(editingKey){
		localStorage.setItem(editingKey, JSON.stringify(product));
	} else {
		writeToStorage(product);
	}

    closeModal();
    createCard();
  }

function edit(e){
	if(e.target.classlist.conatins("fa-pen-to-square")){})}
