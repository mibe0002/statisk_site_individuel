fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showSports);

function showSports(sports) {
  // looper og kalder showSport

  sports.forEach(showSport);
}

function showSport(sport) {
  console.log(sport);
  // fange template
  const template = document.querySelector(".sport_template").content;
  // lave en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h3").textContent = sport.productdisplayname;
  // copy.querySelector(".sport_img").src = sport.id;

  if (sport.soldout == 0) {
    // produktet er udsolgt
    copy.querySelector(".udsolgt").classList.add("udsolgt");
    console.log("Soldout value:", sport.soldout);
    copy.querySelector(".favourit").style.display = "none";

    // blur img når udsolgt
    const sportImg = copy.querySelector(".sport_img");
    sportImg.addEventListener("mouseenter", blurTil);
    sportImg.addEventListener("mouseleave", blurTil);
  } else {
    copy.querySelector(".udsolgt").style.display = "none";
  }

  // appende
  document.querySelector(".sport_container").appendChild(copy);
}

// blur img
function blurTil() {
  this.classList.toggle("blur");
}

//  <article class="sport_article">
//                         <a href="product.html">
//                             <div class="sport_img_container">
//                                 <img class="sport_img">
//                             </div>

//                             <h3 class="sport_name">
//                                 Name
//                             </h3>

//                             <p class="subcat">Tshirts | Nike</p>
//                             <p class="pris"><span>Prev.</span> 1595,- DKK</p>

//                             <div class="discount">
//                                 <p class="udsolgt">Udsolgt</p>
//                                 <p>Now 15600,- DKK</p>
//                                 <p class="rabat">-34%</p>
//                             </div>

//                             <p class="sport_tagline">You buy we provide</p>
//                             <p class="sport_description">Buy this to support as a loyal fan.</p>
//                         </a>
//                     </article>

// // {
//   "id": 1163,
//   "gender": "Men",
//   "category": "Apparel",
//   "subcategory": "Topwear",
//   "articletype": "Tshirts",
//   "season": "Summer",
//   "productionyear": 2011,
//   "usagetype": "Sports",
//   "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//   "price": 895,
//   "discount": null,
//   "brandname": "Nike",
//   "soldout": 0
// }

// window.addEventListener("DOMContentLoaded", init);

// const sportURL = "https://kea-alt-del.dk/t7/api/products";

// let sportTemplate;
// let sportContainer;

// function init() {
//   console.log("init");

//   sportTemplate = document.querySelector(".sport_template");
//   console.log("sportTemplate", sportTemplate);

//   sportContainer = document.querySelector(".sport_container");
//   console.log("sport_container", sportContainer);

//   fetch(sportURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       showSport(json);
//     });
// }

// function showSport(sportJSON) {
//   // looper og kalder showSport
//   let sportClone;

//   sportJSON.forEach((sport) => {
//     console.log("Sport", sport);
//     sportClone = sportTemplate.cloneNode(true).content;
//     // sportClone.querySelector(".sport_img").src = sport.sportSmallimage;
//     // sportClone.querySelector(".sport_img").alt = `Picture of a ${sport.name}`;
//     sportClone.querySelector(".productdisplayname").textContent = sport.name;
//     sportClone.querySelector(".productionyear").textContent = sport.tagline;
//     sportClone.querySelector(".brandname").textContent = sport.description;
//     sportClone.querySelector(".soldout").textContent = sport.udsolgt;
//     sportClone.querySelector(".discount").textContent = sport.rabat;
//     sportContainer.appendChild(sportClone);
//   });
// }
