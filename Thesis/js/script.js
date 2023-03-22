// DEFINE THE OVERLAY AS AN ID
let overlay = document.querySelector("#overlay");
let info = document.querySelectorAll(".info");

//OPEN POPUP
let clickers = document.querySelectorAll(".click");

for (let i = 0; i < clickers.length; i++) {
  clickers[i].onclick = function() {
    overlay.style.display = "block";
  }
}

//CLOSE EVERYTHING ON OVERLAY CLICK
document.getElementById("overlay").onclick = function() {
  overlay.style.display = "none";
  for (var i = 0; i < info.length; i++) {
    info[i].style.display = "none";
  }
}

//INDIVIDUAL BLURBS
let styles = document.getElementById("artstyles"),
  aki = document.querySelector("#aki"),
  cammie = document.querySelector("#cammie"),
  contain = document.querySelector("#contain"),
  edwin = document.querySelector("#edwin"),
  figapp = document.querySelector("#figApp"),
  figpers = document.querySelector("#figPers"),
  kaworu = document.querySelector("#kaworu"),
  kazuya = document.querySelector("#kazuya"),
  keydes = document.querySelector("#keyDes"),
  keywip = document.querySelector("#keyWip"),
  lucas = document.querySelector("#lucas"),
  photo = document.querySelector("#photo"),
  soe = document.querySelector("#soe"),
  usc = document.querySelector("#usc");

//"Display styles blurb when clicking styles bubble"
document.getElementById("bStyles").onclick = function() {
  styles.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bAki").onclick = function() {
  aki.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bCammie").onclick = function() {
  cammie.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bContain").onclick = function() {
  contain.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bEdwin").onclick = function() {
  edwin.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bFigapp").onclick = function() {
  figapp.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bFigpers").onclick = function() {
  figpers.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bKaworu").onclick = function() {
  kaworu.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bKazuya").onclick = function() {
  kazuya.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bKeydes").onclick = function() {
  keydes.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bKeywip").onclick = function() {
  keywip.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bLucas").onclick = function() {
  lucas.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bPhoto").onclick = function() {
  photo.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bSoe").onclick = function() {
  soe.style.display = "block";
  overlay.style.display = "block";
}

document.querySelector("#bUsc").onclick = function() {
  usc.style.display = "block";
  overlay.style.display = "block";
}
