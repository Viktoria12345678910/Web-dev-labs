"use strict";

  const products = [];

  function openModal() {
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

    products.push(product);
    console.log("Products array:", products);
    closeModal();
  }
