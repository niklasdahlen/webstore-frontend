const API_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
  const res = await fetch(API_URL);
  const products = await res.json();
  renderProducts(products);
}

function renderProducts(products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.innerHTML = `<p>${product.title}</p>`;
    grid.appendChild(card);
  });
}

fetchProducts();

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    document.getElementById(`panel-${btn.dataset.panel}`).classList.add("active");
  });
});

document.querySelectorAll(".panel-close").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(`panel-${btn.dataset.close}`).classList.remove("active");
  });
});