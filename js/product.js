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

// press2.addEventListener("click", () => {
//   //   press2.classList.toggle("active");
//   dropdown2.classList.toggle("active");
// });

// const productList = document.querySelector(".product_list");

// let text = {
//   id: 1163,
//   gender: "Men",
//   category: "Apparel",
//   subcategory: "Topwear",
//   articletype: "Tshirts",
//   basecolour: "Blue",
//   season: "Summer",
//   productionyear: 2011,
//   usagetype: "Sports",
//   productdisplayname: "Sahara Team India Fanwear Round Neck Jersey",
//   parsed: 1,
//   soldout: 0,
//   relid: 1163,
//   price: 895,
//   discount: null,
//   variantname: "Roundneck Jersey",
//   brandname: "Nike",
//   brandbio: "Nike, creating experiences for today's athlete",
//   brandimage: "http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg",
//   agegroup: "Adults-Men",
//   colour1: "NA",
//   colour2: "NA",
//   fashiontype: "Fashion",
//   materialcaredesc: "<p>100% polyester<br>Machine wash</p>",
//   sizefitdesc: null,
//   description: "<p>Blue round neck Sahara Team India jersey, has short sleeves, print on the chest and back chest<br><br>Warranty for manufacturing defects: 6 months (not valid on products with more than 20% discount)<br></p>",
//   styledesc: "<p>Cheer for the Indian cricket team on and off the fields in this blue polo neck jersey from Nike.</p>",
// };

// function eventListeners() {
//   window.addEventListener("DoMContentLoaded", () => {
//     loadJSON();
//   });
// }

// function loadJSON() {
//   fetch("product.json")
//     .then((response) => response.json())
//     .then((data) => {
//       let html = "";
//       data.forEach((product) => {
//         html;
//       });
//     });
// }

// const obj = JSON.parse(text);

// console.log("Færdig");
