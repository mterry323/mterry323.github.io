// DEFINE THE OVERLAY AS AN ID
let overlay = document.querySelector("#overlay");
let info = document.querySelectorAll(".info");
let intro = document.querySelector("#intro");

//OPEN POPUP
let clickers = document.querySelectorAll(".click");

for (let i = 0; i < clickers.length; i++) {
  clickers[i].onclick = function() {
    overlay.style.display = "block";
  }
}

//INDIVIDUAL BLURBS
let about = document.getElementById("about"),
  styles = document.getElementById("artstyles"),
  xennia = document.querySelector("#xennia"),
  cammie = document.querySelector("#cammie"),
  contain = document.querySelector("#contain"),
  edwin = document.querySelector("#edwin"),
  figapp = document.querySelector("#figApp"),
  figpers = document.querySelector("#figPers"),
  kaworu = document.querySelector("#kaworu"),
  kazuya = document.querySelector("#kazuya"),
  keydes = document.querySelector("#keyDes"),
  keywip = document.querySelector("#keyWip"),
  newOC = document.querySelector("#newOC"),
  photo = document.querySelector("#photo"),
  soe = document.querySelector("#soe"),
  usc = document.querySelector("#usc");

//BRAIN SOUP
let brainSoup = new Audio("./Audio/brain soup.wav");

//BLURBS CORRESPONDING AUDIOS
let audios = [new Audio("./Audio/contain.wav"),
  new Audio("./Audio/figures apps.wav"),
  new Audio("./Audio/keyblade wip.wav"),
  new Audio("./Audio/traced photo.wav"),
  new Audio("./Audio/soe.wav")
];

for (var i = 0; i < audios.length; i++) {
  audios[i].loop = true;
}

//CLOSE EVERYTHING ON OVERLAY CLICK
document.getElementById("overlay").onclick = function() {
  $(overlay).fadeOut();
  for (var i = 0; i < info.length; i++) {
    $(info[i]).fadeOut();
  }
  for (var i = 0; i < audios.length; i++) {
    audios[i].pause();
  }
}

// Scroll drag
const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};

// const drag = document.getElementsByClassName('.drag')
//
// $(function(){
// 	  $(drag).dragscroll();
// 	});

//Start Button
document.getElementById("startButton").onclick = function() {
  $(intro).fadeOut();
  brainSoup.play();
  brainSoup.loop = true;
  brainSoup.volume = 0.5;
}

//About Button
document.getElementById("aboutButton").onclick = function() {
  $(overlay).fadeIn();
  $(about).fadeIn();
}

//Alt text
$("#altToggle").click(function() {
  if ($(".altText").hasClass("on")) {
    $(".altText").removeClass("on");
    $("#altToggle").removeClass("buttonOn");
    $("#altToggle").html('Alt Text: Off');
  } else {
    $(".altText").addClass("on");
    $("#altToggle").addClass("buttonOn");
    $("#altToggle").html('Alt Text: On');
  }
});

//Mute brain soup
$("#soupToggle").click(function() {
  if ($("#soupToggle").hasClass("noSoup")) {
    brainSoup.volume = 0.5;
    $("#soupToggle").removeClass("noSoup");
    $("#soupToggle").addClass("buttonOn");
    $("#soupToggle").html('BG Voices: On');
  } else {
    brainSoup.volume = 0;
    $("#soupToggle").addClass("noSoup");
    $("#soupToggle").removeClass("buttonOn");
    $("#soupToggle").html('BG Voices: Off');
  }
});

//"Display styles blurb when clicking styles bubble"
document.getElementById("bStyles").onclick = function() {
  $(overlay).fadeIn();
  $(styles).fadeIn();
}

document.querySelector("#bXennia").onclick = function() {
  $(overlay).fadeIn();
  $(xennia).fadeIn();
}

document.querySelector("#bCammie").onclick = function() {
  $(overlay).fadeIn();
  $(cammie).fadeIn();
}

document.querySelector("#bContain").onclick = function() {
  $(overlay).fadeIn();
  $(contain).fadeIn();
  audios[0].play();
}

document.querySelector("#bEdwin").onclick = function() {
  $(overlay).fadeIn();
  $(edwin).fadeIn();
}

document.querySelector("#bFigapp").onclick = function() {
  $(overlay).fadeIn();
  $(figapp).fadeIn();
  audios[1].play();
}

document.querySelector("#bFigpers").onclick = function() {
  $(overlay).fadeIn();
  $(figpers).fadeIn();
}

document.querySelector("#bKaworu").onclick = function() {
  $(overlay).fadeIn();
  $(kaworu).fadeIn();
}

document.querySelector("#bKazuya").onclick = function() {
  $(overlay).fadeIn();
  $(kazuya).fadeIn();
}

document.querySelector("#bKeydes").onclick = function() {
  $(overlay).fadeIn();
  $(keydes).fadeIn();
}

document.querySelector("#bKeywip").onclick = function() {
  $(overlay).fadeIn();
  $(keywip).fadeIn();
  audios[2].play();
}

document.querySelector("#bNewOC").onclick = function() {
  $(overlay).fadeIn();
  $(newOC).fadeIn();
}

document.querySelector("#bPhoto").onclick = function() {
  $(overlay).fadeIn();
  $(photo).fadeIn();
  audios[3].play();
}

document.querySelector("#bSoe").onclick = function() {
  $(overlay).fadeIn();
  $(soe).fadeIn();
  audios[4].play();
}

document.querySelector("#bUsc").onclick = function() {
  $(overlay).fadeIn();
  $(usc).fadeIn();
}
