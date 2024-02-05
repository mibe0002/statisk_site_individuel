const frugter = ["banan", "æble", "appelsin"];
const ul = document.querySelector("ul");

frugter.forEach(bygListe);

function bygListe(elm) {
  console.log(elm);
  ul.innerHTML += "<li>" + elm + "</li>";
}
