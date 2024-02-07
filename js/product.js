const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

// fange template
const parent = document.querySelector(".purchase_box");

function getProduct() {
  fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then((res) => res.json())
    .then(showProduct);
}

function showProduct(product) {
  const purchaseBox = document.querySelector(".purchase_box");

  // console.log("Product data:", product);

  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".brandname").textContent = product.brandname;
  document.querySelector(".product_img img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector(".product_img img").alt = product.productdisplayname;
  document.querySelector(".price").textContent = product.price + " DKK";
  document.querySelector(".brandname").textContent = product.brandname + " | " + product.articletype;
  document.querySelector(".basecolour").textContent = "Color: " + product.basecolour;
  document.querySelector(".gender").textContent = "Gender: " + product.gender;
  document.querySelector(".description").textContent = product.description;
  document.querySelector(".usagetype").textContent = "The clothing is made for " + product.usagetype + " activities.";
  document.querySelector(".productionyear").textContent = "Production Year " + product.productionyear + ".";
  document.querySelector(".materialcaredesc").textContent = product.materialcaredesc;

  if (product.discount === null) {
    document.querySelector(".discount").textContent = "";
  } else {
    document.querySelector(".discount").textContent = "-" + product.discount + "%";
  }

  if (product.soldout === 0) {
    document.querySelector(".soldout").textContent = "UDSOLGT";
  } else {
    document.querySelector(".soldout").textContent = product.soldout + " Left";
  }
}

getProduct();

// dropdown
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
