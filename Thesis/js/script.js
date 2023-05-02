// DEFINE THE OVERLAY AS AN ID
let overlay = document.querySelector("#overlay");
let info = document.querySelectorAll(".info");
let fullImg = document.querySelectorAll(".fullImg");
let fullScreen = document.querySelector("#fullScreen");
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

  let fStyles = document.querySelector("#fStyles"),
  fXennia1 = document.querySelector("#fXennia1"),
  fXennia2 = document.querySelector("#fXennia2"),
  fXennia4 = document.querySelector("#fXennia4"),
  fXennia5 = document.querySelector("#fXennia5"),
  fCammie = document.querySelector("#fCammie"),
  fCammieOG = document.querySelector("#fCammieOG"),
  fCammieOld = document.querySelector("#fCammieOld"),
  fContain1 = document.querySelector("#fContain1"),
  fContain2 = document.querySelector("#fContain2"),
  fEdwinNew = document.querySelector("#fEdwinNew"),
  fEdwinOld = document.querySelector("#fEdwinOld"),
  fFiguresF = document.querySelector("#fFiguresF"),
  fFiguresM = document.querySelector("#fFiguresM"),
  fFigpers1 = document.querySelector("#fFigpers1"),
  fFigpers2 = document.querySelector("#fFigpers2"),
  fFigpers3 = document.querySelector("#fFigpers3"),
  fFigpers4 = document.querySelector("#fFigpers4"),
  fKaworuNew = document.querySelector("#fKaworuNew"),
  fKaworuOld = document.querySelector("#fKaworuOld"),
  fKazuya = document.querySelector("#fKazuya"),
  fKazuOld1 = document.querySelector("#fKazuOld1"),
  fKazuOld2 = document.querySelector("#fKazuOld2"),
  fKazuOld3 = document.querySelector("#fKazuOld3"),
  fKazuOld4 = document.querySelector("#fKazuOld4"),
  fKeyDes = document.querySelector("#fKeyDes"),
  fKeyWip = document.querySelector("#fKeyWip"),
  fNewOC = document.querySelector("#fNewOC"),
  fNewOCGif = document.querySelector("#fNewOCGif"),
  fNewOC1 = document.querySelector("#fNewOC1"),
  fNewOC2 = document.querySelector("#fNewOC2"),
  fNewOC3 = document.querySelector("#fNewOC3"),
  fNewOC4 = document.querySelector("#fNewOC4"),
  fTrace1 = document.querySelector("#fTrace1"),
  fTrace2 = document.querySelector("#fTrace2"),
  fSoeNew = document.querySelector("#fSoeNew"),
  fSoeOld = document.querySelector("#fSoeOld"),
  fUsc = document.querySelector("#fUsc");

//BRAIN SOUP
let brainSoup = new Audio("./Audio/brain soup.wav");

//BLURBS CORRESPONDING AUDIOS
let audios = [new Audio("./Audio/cammie.wav"), //0
  new Audio("./Audio/contain.wav"), //1
  new Audio("./Audio/edwin.wav"), //2
  new Audio("./Audio/figures apps.wav"), //3
  new Audio("./Audio/kaworu.wav"), //4
  new Audio("./Audio/kazuya.wav"), //5
  new Audio("./Audio/key designs.wav"), //6
  new Audio("./Audio/keyblade wip.wav"), //7
  new Audio("./Audio/traced photo.wav"), //8
  new Audio("./Audio/soe.wav"), //9
  new Audio("./Audio/usc.wav"), //10
  new Audio("./Audio/xennia.wav"), //11
  new Audio("./Audio/new oc.wav"), //12
  new Audio("./Audio/figures personal.wav"), //13
  new Audio("./Audio/20 styles.wav") //14
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

document.getElementById("fullScreen").onclick = function() {
  $(fullScreen).fadeOut();
  for (var i = 0; i < fullImg.length; i++) {
    $(fullImg[i]).fadeOut();
  }
}

// Images not draggable
const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};

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

//MAKE THE BUBBLES OPEN THE INFO POPUPS
document.getElementById("bStyles").onclick = function() {
  $(overlay).fadeIn();
  $(styles).fadeIn();
  audios[14].play();
}

document.querySelector("#bXennia").onclick = function() {
  $(overlay).fadeIn();
  $(xennia).fadeIn();
  audios[11].play();
}

document.querySelector("#bCammie").onclick = function() {
  $(overlay).fadeIn();
  $(cammie).fadeIn();
  audios[0].play();
}

document.querySelector("#bContain").onclick = function() {
  $(overlay).fadeIn();
  $(contain).fadeIn();
  audios[1].play();
}

document.querySelector("#bEdwin").onclick = function() {
  $(overlay).fadeIn();
  $(edwin).fadeIn();
  audios[2].play();
}

document.querySelector("#bFigapp").onclick = function() {
  $(overlay).fadeIn();
  $(figapp).fadeIn();
  audios[3].play();
}

document.querySelector("#bFigpers").onclick = function() {
  $(overlay).fadeIn();
  $(figpers).fadeIn();
  audios[13].play();
}

document.querySelector("#bKaworu").onclick = function() {
  $(overlay).fadeIn();
  $(kaworu).fadeIn();
  audios[4].play();
}

document.querySelector("#bKazuya").onclick = function() {
  $(overlay).fadeIn();
  $(kazuya).fadeIn();
  audios[5].play();
}

document.querySelector("#bKeydes").onclick = function() {
  $(overlay).fadeIn();
  $(keydes).fadeIn();
  audios[6].play();
}

document.querySelector("#bKeywip").onclick = function() {
  $(overlay).fadeIn();
  $(keywip).fadeIn();
  audios[7].play();
}

document.querySelector("#bNewOC").onclick = function() {
  $(overlay).fadeIn();
  $(newOC).fadeIn();
  audios[12].play();
}

document.querySelector("#bPhoto").onclick = function() {
  $(overlay).fadeIn();
  $(photo).fadeIn();
  audios[8].play();
}

document.querySelector("#bSoe").onclick = function() {
  $(overlay).fadeIn();
  $(soe).fadeIn();
  audios[9].play();
}

document.querySelector("#bUsc").onclick = function() {
  $(overlay).fadeIn();
  $(usc).fadeIn();
  audios[10].play();
}

//MAKE CLICKING THE IMAGES TOGGLE FULLSCREEN
document.querySelector("#iStyles").onclick = function() {
  $(fullScreen).fadeIn();
  $(fStyles).fadeIn();
}

document.querySelector("#iCammie").onclick = function() {
  $(fullScreen).fadeIn();
  $(fCammie).fadeIn();
}

document.querySelector("#iCammieOG").onclick = function() {
  $(fullScreen).fadeIn();
  $(fCammieOG).fadeIn();
}

document.querySelector("#iCammieOld").onclick = function() {
  $(fullScreen).fadeIn();
  $(fCammieOld).fadeIn();
}

document.querySelector("#iXennia1").onclick = function() {
  $(fullScreen).fadeIn();
  $(fXennia1).fadeIn();
}

document.querySelector("#iXennia2").onclick = function() {
  $(fullScreen).fadeIn();
  $(fXennia2).fadeIn();
}

document.querySelector("#iXennia4").onclick = function() {
  $(fullScreen).fadeIn();
  $(fXennia4).fadeIn();
}

document.querySelector("#iXennia5").onclick = function() {
  $(fullScreen).fadeIn();
  $(fXennia5).fadeIn();
}

document.querySelector("#iContain1").onclick = function() {
  $(fullScreen).fadeIn();
  $(fContain1).fadeIn();
}

document.querySelector("#iContain2").onclick = function() {
  $(fullScreen).fadeIn();
  $(fContain2).fadeIn();
}

document.querySelector("#iEdwinNew").onclick = function() {
  $(fullScreen).fadeIn();
  $(fEdwinNew).fadeIn();
}

document.querySelector("#iEdwinOld").onclick = function() {
  $(fullScreen).fadeIn();
  $(fEdwinOld).fadeIn();
}

document.querySelector("#iFiguresM").onclick = function() {
  $(fullScreen).fadeIn();
  $(fFiguresM).fadeIn();
}

document.querySelector("#iFiguresF").onclick = function() {
  $(fullScreen).fadeIn();
  $(fFiguresF).fadeIn();
}

document.querySelector("#iFigpers1").onclick = function() {
  $(fullScreen).fadeIn();
  $(fFigpers1).fadeIn();
}

document.querySelector("#iFigpers2").onclick = function() {
  $(fullScreen).fadeIn();
  $(fFigpers2).fadeIn();
}

document.querySelector("#iFigpers3").onclick = function() {
  $(fullScreen).fadeIn();
  $(fFigpers3).fadeIn();
}

document.querySelector("#iFigpers4").onclick = function() {
  $(fullScreen).fadeIn();
  $(fFigpers4).fadeIn();
}

document.querySelector("#iKaworuOld").onclick = function() {
  $(fullScreen).fadeIn();
  $(fKaworuOld).fadeIn();
}

document.querySelector("#iKaworuNew").onclick = function() {
  $(fullScreen).fadeIn();
  $(fKaworuNew).fadeIn();
}

document.querySelector("#iKazuya").onclick = function() {
  $(fullScreen).fadeIn();
  $(fKazuya).fadeIn();
}

document.querySelector("#iKazuOld1").onclick = function() {
  $(fullScreen).fadeIn();
  $(fKazuOld1).fadeIn();
}

document.querySelector("#iKazuOld2").onclick = function() {
  $(fullScreen).fadeIn();
  $(fKazuOld2).fadeIn();
}

document.querySelector("#iKazuOld3").onclick = function() {
  $(fullScreen).fadeIn();
  $(fKazuOld3).fadeIn();
}

document.querySelector("#iKazuOld4").onclick = function() {
  $(fullScreen).fadeIn();
  $(fKazuOld4).fadeIn();
}

document.querySelector("#iKeyDes").onclick = function() {
  $(fullScreen).fadeIn();
  $(fKeyDes).fadeIn();
}

document.querySelector("#iKeyWip").onclick = function() {
  $(fullScreen).fadeIn();
  $(fKeyWip).fadeIn();
}

document.querySelector("#iNewOC").onclick = function() {
  $(fullScreen).fadeIn();
  $(fNewOC).fadeIn();
}

document.querySelector("#iNewOCGif").onclick = function() {
  $(fullScreen).fadeIn();
  $(fNewOCGif).fadeIn();
}

document.querySelector("#iNewOC1").onclick = function() {
  $(fullScreen).fadeIn();
  $(fNewOC1).fadeIn();
}

document.querySelector("#iNewOC2").onclick = function() {
  $(fullScreen).fadeIn();
  $(fNewOC2).fadeIn();
}

document.querySelector("#iNewOC3").onclick = function() {
  $(fullScreen).fadeIn();
  $(fNewOC3).fadeIn();
}

document.querySelector("#iNewOC4").onclick = function() {
  $(fullScreen).fadeIn();
  $(fNewOC4).fadeIn();
}

document.querySelector("#iTrace1").onclick = function() {
  $(fullScreen).fadeIn();
  $(fTrace1).fadeIn();
}

document.querySelector("#iTrace2").onclick = function() {
  $(fullScreen).fadeIn();
  $(fTrace2).fadeIn();
}

document.querySelector("#iSoeNew").onclick = function() {
  $(fullScreen).fadeIn();
  $(fSoeNew).fadeIn();
}

document.querySelector("#iSoeOld").onclick = function() {
  $(fullScreen).fadeIn();
  $(fSoeOld).fadeIn();
}

document.querySelector("#iUsc").onclick = function() {
  $(fullScreen).fadeIn();
  $(fUsc).fadeIn();
}
