const liCollection = document.getElementsByTagName("li");
// console.log((h3Collection.style.color = "red"));
for (const h3 of liCollection) {
  console.log(h3.innerText);
  h3.style.color = "blue";
}

const titles = document.getElementsByClassName("title");
for (const title of titles) {
  title.style.color = "lime";
}

const mainHeader = document.getElementById("main-header");
mainHeader.style.textAlign = "center";
mainHeader.style.border = "2px solid lime";
mainHeader.style.padding = "20px 0";

document.querySelector("p").style.color = "yellow";

const sections = document.querySelectorAll(".section");

for (const section of sections) {
  section.style.width = "90%";
  section.style.margin = "0 auto";
  section.style.borderLeft = "25px solid white";
  section.style.paddingLeft = "25px";
}
