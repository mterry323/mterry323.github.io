

let overlay = document.querySelector("#overlay");

document.querySelector("#click").onclick = function() {
  overlay.style.display = "block";
}

document.querySelector("#overlay").onclick = function() {
  overlay.style.display = "none";
}
