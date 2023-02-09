console.log("from js event file");

function makeRed() {
  document.body.style.backgroundColor = "red";
}

const makeBlueBtn = document.getElementById("make-blue");
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

document.getElementById("make-purple").onclick = function () {
  document.body.style.backgroundColor = "purple";
};

document.getElementById("make-pink").addEventListener("click", () => {
  document.body.style.backgroundColor = "pink";
});

document.getElementById("update-btn").addEventListener("click", () => {
  const inputFiled = document.getElementById("input-text");
  document.getElementById("updated-text").innerText = inputFiled.value;
  inputFiled.value = "";
});
