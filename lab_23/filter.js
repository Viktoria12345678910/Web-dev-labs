"use strict"
const cards = document.getElementById("cards");
let products = [];
const startBtn = document.getElementById("startBtn");
const loadFromAPI = () => {
  fetch("https://dummyjson.com/products?limit=100&skip=0")
    .then(res => res.json())
    .then(data => {
      products = data.products;
      localStorage.setItem("products", JSON.stringify(products));
      startBtn.style.display = "none";
      renderCards(products);
    });
};

const init = () => {
  const stored = localStorage.getItem("products");
  if (stored) {
    products = JSON.parse(stored);
    renderCards(products);
  } else {
    startBtn.style.display = "block";
    startBtn.addEventListener("click", loadFromAPI);
  }
};

init();
const createCard = (product) => {
	const bottomRow = document.createElement("div");
	bottomRow.classList.add("bottomRow");

	const price = document.createElement("div");
	price.classList.add("price");
	price.textContent= product.price;

	const shoppingCart = document.createElement("div");
	shoppingCart.classList.add("fa");
	shoppingCart.classList.add("fa-shopping-cart");
	shoppingCart.setAttribute("data-id", product.id);

	bottomRow.appendChild(price);
	bottomRow.appendChild(shoppingCart);

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
	photo.setAttribute('src', product.thumbnail);

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
	return card;
}
products.map((product) => {
	const phone = createCard(product);
	cards.appendChild(phone);
	console.log('product with id: '+product.id+' created');
})


const renderCards = (arr) => {
  cards.innerHTML = "";
  arr.forEach(product => cards.appendChild(createCard(product)));
};

const filterByCategory = (arr, category) => new Promise(resolve => {
  const result = category === "" ? arr : arr.filter(p => p.category === category);
  resolve(result);
});

const filterBySearch = (arr, term) => new Promise(resolve => {
  const result = arr.filter(p =>
    p.title.toLowerCase().includes(term) ||
    p.description.toLowerCase().includes(term)
  );
  resolve(result);
});

const sortProducts = (arr, sort) => new Promise(resolve => {
  const result = [...arr];
  if (sort === "by increasing price") result.sort((a, b) => a.price - b.price);
  else if (sort === "by decreasing price") result.sort((a, b) => b.price - a.price);
  else if (sort === "newest first") result.sort((a, b) => b.id - a.id);
  else if (sort === "oldest first") result.sort((a, b) => a.id - b.id);
  resolve(result);
});

const getFiltered = () => {
  const [categorySelect, sortSelect] = document.querySelectorAll("select[name='filters']");
  const searchInput = document.querySelector("input[name='filters']");

  filterByCategory(products, categorySelect.value)
    .then(result => filterBySearch(result, searchInput.value.toLowerCase()))
    .then(result => sortProducts(result, sortSelect.value))
    .then(result => renderCards(result));
};
document.querySelectorAll("select[name='filters']").forEach(el =>
  el.addEventListener("change", getFiltered)
);
document.querySelector("input[name='filters']").addEventListener("input", getFiltered);

renderCards(products);
