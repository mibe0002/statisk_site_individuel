const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products${id}`;

// fange template
// const template = document.querySelector(".sport_template").content;
const parent = document.querySelector("section");

function getProduct() {
  fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then((res) => res.json())
    .then(showProduct);
}

function showProduct(product) {
  const purchaseBox = document.querySelector(".purchase_box");

  document.querySelector(".purchase_box h1").textContent = product.productdisplayname;
  document.querySelector(".product_2 .brand").textContent = product.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
}

getProduct();

// Get all elements with the class "press"
const pressElements = document.querySelectorAll(".press");

// Loop through each press element
pressElements.forEach((press) => {
  // Add click event listener to each press element
  press.addEventListener("click", () => {
    // Find the corresponding dropdown using the nextElementSibling property
    const dropdown = press.nextElementSibling;

    // Toggle the "active" class on the dropdown
    dropdown.classList.toggle("active");
  });
});
// vha. ChatGPT
