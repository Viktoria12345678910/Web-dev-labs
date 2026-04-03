"use strict"
const cards = document.getElementById("cards");
const products = [
  { id: 1, 
	  title: "iPhone 14 Pro", 
	  description: "Смартфон Apple з чіпом A16 Bionic та камерою 48MP", 
	  price: 32999, category: "smartphones", 
	  rating: 4.8, 
	  stock: 15, 
	  brand: "Apple", 
	  discountPercentage: 5, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" },

  { id: 2, 
	  title: "Samsung Galaxy S23", 
	  description: "Флагманський смартфон Samsung з процесором Snapdragon 8 Gen 2", 
	  price: 27499, 
	  category: "smartphones", 
	  rating: 4.6, 
	  stock: 22, 
	  brand: "Samsung", 
	  discountPercentage: 10, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg" },

  { id: 3, 
	  title: "MacBook Pro 14", 
	  description: "Ноутбук Apple з чіпом M2 Pro, 16GB RAM та SSD 512GB", 
	  price: 68999, 
	  category: "laptops", 
	  rating: 4.9, 
	  stock: 8, 
	  brand: "Apple", 
	  discountPercentage: 3, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png" },

  { id: 4, 
	  title: "Dell XPS 15", 
	  description: "Потужний ноутбук з OLED дисплеєм 4K та Intel Core i7", 
	  price: 54999, 
	  category: "laptops", 
	  rating: 4.5, 
	  stock: 11, 
	  brand: "Dell", 
	  discountPercentage: 8, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg" },

  { id: 5, 
	  title: "Sony WH-1000XM5", 
	  description: "Бездротові навушники з активним шумопоглинанням та 30 годинами роботи", 
	  price: 10999, 
	  category: "audio", 
	  rating: 4.7, 
	  stock: 30, 
	  brand: "Sony", 
	  discountPercentage: 12, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg" },

  { id: 6, 
	  title: "AirPods Pro 2", 
	  description: "Навушники Apple з адаптивним шумопоглинанням та просторовим звуком", 
	  price: 8999, 
	  category: "audio", 
	  rating: 4.6, 
	  stock: 45, 
	  brand: "Apple", 
	  discountPercentage: 0, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/13/thumbnail.jpg" },

  { id: 7, 
	  title: "iPad Air 5", 
	  description: "Планшет Apple з чіпом M1, екраном 10.9 дюйма та підтримкою Apple Pencil", 
	  price: 22999, 
	  category: "tablets", 
	  rating: 4.7, 
	  stock: 18, 
	  brand: "Apple", 
	  discountPercentage: 7, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg" },

  { id: 8, 
	  title: "Samsung Galaxy Tab S9", 
	  description: "Планшет Samsung з AMOLED дисплеєм 11 дюймів та стилусом S Pen", 
	  price: 24999, 
	  category: "tablets", 
	  rating: 4.5, 
	  stock: 14, 
	  brand: "Samsung", 
	  discountPercentage: 15, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg" },

  { id: 9, 
	  title: "Logitech MX Master 3S", 
	  description: "Ергономічна бездротова миша з тихими кнопками та точним трекінгом", 
	  price: 3499, 
	  category: "accessories", 
	  rating: 4.8, 
	  stock: 60, 
	  brand: "Logitech", 
	  discountPercentage: 5, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg" },

  { id: 10, 
	  title: "Samsung 27\" 4K Monitor", 
	  description: "Монітор з роздільною здатністю 4K UHD, IPS панеллю та HDR підтримкою", 
	  price: 14999, 
	  category: "monitors", 
	  rating: 4.4, 
	  stock: 9, 
	  brand: "Samsung", 
	  discountPercentage: 20, 
	  thumbnail: "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg" }
];
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
