$(document).ready(function() {

  // ----- BG MUSIC -----
  {
    // --- Ritsuko ---
    var ritsuko = "audio/music/Ritsuko.mp3"
    var song1 = new Audio();

    song1.load()
    song1.addEventListener("load", function() {
      song1.play();
    }, true);

    song1.src = ritsuko;
    song1.loop = true;

    // --- Ode to Joy ---
    var joy = "audio/music/Ode to Joy.mp3"
    var song2 = new Audio();

    song2.load()
    song2.addEventListener("load", function() {
      song2.play();
    }, true);

    song2.src = joy;
    song2.loop = true;

    // --- Instabilite ---

    var em12 = "audio/music/Instabilite.mp3"
    var song3 = new Audio();

    song3.load()
    song3.addEventListener("load", function() {
      song3.play();
    }, true);

    song3.src = em12;
    song3.loop = true;

    // --- Quatre Mains ---

    var qMains = "audio/music/Quatre Mains_short.mp3"
    var song4 = new Audio();

    song4.load()
    song4.addEventListener("load", function() {
      song4.play();
    }, true);

    song4.src = qMains;
    song4.loop = true;

    // --- Suiten fur Violoncello ---

    var suiten = "audio/music/Violoncello.mp3"
    var song5 = new Audio();

    song5.load()
    song5.addEventListener("load", function() {
      song5.play();
    }, true);

    song5.src = suiten;
    song5.loop = true;

  }

  // ----- SET FIRST SONG -----
  {
    song1.volume = 1;
    song2.volume = 0;
    song3.volume = 0;
    song4.volume = 0;
    song5.volume = 0;
  }

  // ----- DEFAULT MUSIC CONTROLS -----
  {
    $("#bgmOn").css("color", "#ff8f1f");

    $("#bgmOn").click(function() {
      song1.play();
      song2.play();
      song3.play();
      song4.play();
      song5.play();
      $("#bgmOn").css("color", "#ff8f1f");
      $("#bgmOff").css("color", "white");
    });

    $("#bgmOff").click(function() {
      song1.pause();
      song2.pause();
      song3.pause();
      song4.pause();
      song5.pause();
      $("#bgmOff").css("color", "#ff8f1f");
      $("#bgmOn").css("color", "white");
    });
  }

  // ----- SOUND EFFECTS -----

  {
    // --- school bell ---
    var scBell = "audio/sfx/bell.mp3"
    var bell = new Audio();

    bell.load()
    bell.addEventListener("load", function() {
      bell.play();
    }, true);

    bell.src = scBell;
    bell.volume = 1;

    // --- cicadas ---

    var miii = "audio/sfx/cicada1.mp3"
    var cicada = new Audio();

    cicada.load()
    cicada.addEventListener("load", function() {
      cicada.play();
    }, true);

    cicada.src = miii;
    cicada.volume = 1;

    // --- piano riffs ---

    var riff1 = "audio/sfx/riff1.mp3"
    var piano1 = new Audio();

    piano1.load()
    piano1.addEventListener("load", function() {
      piano1.play();
    }, true);

    piano1.src = riff1;
    piano1.volume = 1;

    var riff2 = "audio/sfx/riff2.mp3"
    var piano2 = new Audio();

    piano2.load()
    piano2.addEventListener("load", function() {
      piano2.play();
    }, true);

    piano2.src = riff2;
    piano2.volume = 1;

    // --- cello playing ---

    var prelude = "audio/sfx/cello.mp3"
    var cello = new Audio();

    cello.load()
    cello.addEventListener("load", function() {
      cello.play();
    }, true);

    cello.src = prelude;
    cello.volume = 1;

  }

  // ----- POPUPS -----
  {
    $("#aboutBlurb").hide();
    $("#copyBlurb").hide();
    $("#Endscreen").hide();
    $("#Startscreen").show();
    $(".bgShade").show();

    $(".begin").click(function() {
      $("#Startscreen").hide();
      $(".bgShade").hide();
      song1.play();
      song2.play();
      song3.play();
      song4.play();
      song5.play();
      bell.play();
      $("#bgmOn").css("color", "#ff8f1f");
      $("#bgmOff").css("color", "white");
    })

    $("#About").click(function() {
      $("#aboutBlurb").show();
      $(".bgShade").show();

      $("#Close").click(function() {
        $("#aboutBlurb").hide();
        $(".bgShade").hide();
      });
    });

    $("#Copyright").click(function() {
      $("#copyBlurb").show();
      $(".bgShade").show();

      $("#Close1").click(function() {
        $("#copyBlurb").hide();
        $(".bgShade").hide();
      });
    });

    $("#toEndscreen").click(function() {
      $("#Endscreen").show();
      $(".bgShade").show();
    });
  }

  // ----- BEGINNING SCENE -----
  {
    $(".storypoint").hide();
    $("#s1").show();

    $("#toS2").click(function() {
      $("#s2").show();
      $("#s1").hide();
    });

    $(".toS3").click(function() {
      $("#s3").show();
      $("#s2").hide();
      $("#mus7").hide();
    });

    $("#toMus1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_corridor.jpg)");
      $("#mus1").show();
      $("#s3").hide();
      song1.volume = 0;
      song2.volume = 1;
      song2.currentTime = 0;
    });

    $("#toTrack1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_pool-back.jpg)");
      $("#track1").show();
      $("#s3").hide();
    });

    $("#toHr1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_classroom.jpg)");
      $("#hr1").show();
      $("#s3").hide();
    });

  }

  // ----- MUSIC ROOM -----
  {
    $("#toMus2").click(function() {
      $("#mus2").show();
      $("#mus1").hide();
    });

    $("#toMus3").click(function() {
      $("#mus3").show();
      $("#mus2").hide();
    });

    $("#toMus4").click(function() {
      $("#mus4").show();
      $("#mus3").hide();
    });

    $("#toMus5").click(function() {
      $("#mus5").show();
      $("#mus4").hide();
    });

    $("#toMus6").click(function() {
      $("#mus6").show();
      $("#mus5").hide();
    });

    $("#toMus7").click(function() {
      $("#mus7").show();
      $("#mus6").hide();
    });

  }

  // --- player stays on kaworu route ---

  $("#toMus8").click(function() {
    $("#mus8").show();
    $("#mus6").hide();
  });

  $("#toMus9").click(function() {
    $(".storyBG").css("background-image", "url(img/bg/gos2_school_music-room.jpg)");
    $("#mus9").show();
    $("#mus8").hide();
    song2.volume = 0;
    song3.volume = 1;
    song3.currentTime = 0;
  });

  $("#toMus10").click(function() {
    $(".storyBG").css("background-image", "url(img/event/gos2_124_a.jpg)");
    $("#mus10").show();
    $("#mus9").hide();
  });

  $("#toMus11").click(function() {
    $("#mus11").show();
    $("#mus10").hide();
  });

  $("#toMus12").click(function() {
    $("#mus12").show();
    $("#mus11").hide();
  });

  $("#toMus13").click(function() {
    $("#mus13").show();
    $("#mus12").hide();
  });

  $("#toMus14").click(function() {
    $("#mus14").show();
    $("#mus13").hide();
  });

  $("#toMus15").click(function() {
    $("#mus15").show();
    $("#mus14").hide();
  });

  $("#toMus16").click(function() {
    $("#mus16").show();
    $("#mus15").hide();
  });

  // --- player says yes ---
  {
    $("#toMY1").click(function() {
      $("#my1").show();
      $("#mus16").hide();
    });

    $("#toMY2").click(function() {
      $("#my2").show();
      $("#my1").hide();
    });

    $("#toMY3").click(function() {
      $("#my3").show();
      $("#my2").hide();
    });

    $("#toMY4").click(function() {
      $("#my4").show();
      $("#my3").hide();
      song3.volume = 0;
    });

    $("#toMY5").click(function() {
      piano1.play();
      $("#my5").show();
      $("#my4").hide();
    });

    $("#toMY6").click(function() {
      piano2.play();
      $("#my6").show();
      $("#my5").hide();
    });

    $("#toMY7").click(function() {
      $(".storyBG").css("background-image", "url(img/event/piano.jpg)");
      $("#my7").show();
      $("#my6").hide();
      piano1.pause();
      piano2.pause();
      song4.volume = 1;
      song4.currentTime = 0;
    });

    $("#toMY8").click(function() {
      $("#my8").show();
      $("#my7").hide();
    });

    $("#toMY9").click(function() {
      $(".storyBG").css("background-image", "url(img/event/piano2.jpg)");
      $("#my9").show();
      $("#my8").hide();
    });

    $("#toMY10").click(function() {
      $("#my10").show();
      $("#my9").hide();
    });

    $("#toMY11").click(function() {
      $("#my11").show();
      $("#my10").hide();
    });

    $("#toMY12").click(function() {
      $("#my12").show();
      $("#my11").hide();
    });

    $("#toMY13").click(function() {
      $("#my13").show();
      $("#my12").hide();
    });

    $("#toMY14").click(function() {
      $("#my14").show();
      $("#my13").hide();
    });

    $("#toMY15").click(function() {
      $("#my15").show();
      $("#my14").hide();
    });

    $("#toMY16").click(function() {
      $("#my16").show();
      $("#my15").hide();
    });
  }

  // --- player plays cello ---
  {
    $("#toMM1").click(function() {
      $("#mm1").show();
      $("#mus16").hide();
    });

    $("#toMM2").click(function() {
      $("#mm2").show();
      $("#mm1").hide();
    });

    $("#toMM3").click(function() {
      $("#mm3").show();
      $("#mm2").hide();
    });

    $("#toMM4").click(function() {
      $("#mm4").show();
      $("#mm3").hide();
    });

    $("#toMM5").click(function() {
      $("#mm5").show();
      $("#mm4").hide();
    });

    $("#toMM6").click(function() {
      $("#mm6").show();
      $("#mm5").hide();
    });

    $("#toMM7").click(function() {
      $("#mm7").show();
      $("#mm6").hide();
    });

    $("#toMM8").click(function() {
      $("#mm8").show();
      $("#mm7").hide();
    });

    $("#toMM9").click(function() {
      $("#mm9").show();
      $("#mm8").hide();
    });

    $("#toMM10").click(function() {
      $("#mm10").show();
      $("#mm9").hide();
    });

    $("#toMM11").click(function() {
      $(".storyBG").css("background-image", "url(img/event/gos2_034.jpg)");
      $("#mm11").show();
      $("#mm10").hide();
      cello.play();
      song3.volume = 0;
    });

    $("#toMM12").click(function() {
      $("#mm12").show();
      $("#mm11").hide();
    });

    $("#toMM13").click(function() {
      $("#mm13").show();
      $("#mm12").hide();
    });

    $("#toMM14").click(function() {
      $("#mm14").show();
      $("#mm13").hide();
    });

    $("#toMM15").click(function() {
      $("#mm15").show();
      $("#mm14").hide();
    });

    $("#toMM16").click(function() {
      $("#mm16").show();
      $("#mm15").hide();
    });

    $("#toMM17").click(function() {
      $("#mm17").show();
      $("#mm16").hide();
    });

    $("#toMM18").click(function() {
      $("#mm18").show();
      $("#mm17").hide();
    });

    $("#toMM19").click(function() {
      $("#mm19").show();
      $("#mm18").hide();
    });

    $("#toMM20").click(function() {
      $("#mm20").show();
      $("#mm19").hide();
      cello.pause();
    });

    $("#toMM21").click(function() {
      $("#mm21").show();
      $("#mm20").hide();
      song5.volume = 1;
      song5.currentTime = 0;
    });

    $("#toMM22").click(function() {
      $("#mm22").show();
      $("#mm21").hide();
    });

    $("#toMM23").click(function() {
      $("#mm23").show();
      $("#mm22").hide();
    });

    $("#toMM24").click(function() {
      $("#mm24").show();
      $("#mm23").hide();
    });

    $("#toMM25").click(function() {
      $("#mm25").show();
      $("#mm24").hide();
    });

    $("#toMM26").click(function() {
      $("#mm26").show();
      $("#mm25").hide();
    });

    $("#toMM27").click(function() {
      $("#mm27").show();
      $("#mm26").hide();
    });

    $("#toMM28").click(function() {
      $("#mm28").show();
      $("#mm27").hide();
    });

    $("#toMM29").click(function() {
      $("#mm29").show();
      $("#mm28").hide();
    });

    $("#toMM30").click(function() {
      $("#mm30").show();
      $("#mm29").hide();
    });

    $("#toMM31").click(function() {
      $("#mm31").show();
      $("#mm30").hide();
    });

    $("#toMM32").click(function() {
      $("#mm32").show();
      $("#mm31").hide();
    });

    $("#toMM33").click(function() {
      $("#mm33").show();
      $("#mm32").hide();
    });

    $("#toMM34").click(function() {
      $("#mm34").show();
      $("#mm33").hide();
    });

    $("#toMM35").click(function() {
      $("#mm35").show();
      $("#mm34").hide();
    });

    $("#toMM36").click(function() {
      $("#mm36").show();
      $("#mm35").hide();
    });

  }

  // --- player says no ---
  {
    $("#toMN1").click(function() {
      $("#mn1").show();
      $("#mus16").hide();
    });

    $("#toMN2").click(function() {
      $("#mn2").show();
      $("#mn1").hide();
    });

    $("#toMN3").click(function() {
      $("#mn3").show();
      $("#mn2").hide();
    });

    $("#toMN4").click(function() {
      $("#mn4").show();
      $("#mn3").hide();
    });

    $("#switchMY1").click(function() {
      $("#mn4").hide();
      $("#my1").show();
    });

    $("#switchMM1").click(function() {
      $("#mn4").hide();
      $("#mm1").show();
    });

    $("#toMN5").click(function() {
      $("#mn5").show();
      $("#mn4").hide();
    });

    $("#toMN6").click(function() {
      $("#mn6").show();
      $("#mn5").hide();
    });

    $("#toMN7").click(function() {
      $("#mn7").show();
      $("#mn6").hide();
    });

    $("#toMN8").click(function() {
      $("#mn8").show();
      $("#mn7").hide();
    });

    $("#toMN9").click(function() {
      $("#mn9").show();
      $("#mn8").hide();
    });

    $("#toMN10").click(function() {
      $("#mn10").show();
      $("#mn9").hide();
    });

    $("#toMN11").click(function() {
      $("#mn11").show();
      $("#mn10").hide();
    });

    $("#toMN12").click(function() {
      $("#mn12").show();
      $("#mn11").hide();
    });

    $("#toMN13").click(function() {
      $("#mn13").show();
      $("#mn12").hide();
    });

    $("#toMN14").click(function() {
      $("#mn14").show();
      $("#mn13").hide();
    });

    $("#toMN15").click(function() {
      $("#mn15").show();
      $("#mn14").hide();
    });

    $("#toMN16").click(function() {
      $("#mn16").show();
      $("#mn15").hide();
    });

    $(".toMBAD1").click(function() {
      $("#mBad1").show();
      $("#mn16").hide();
    });
  }

  // --- good kaworu end ---
  {
    $(".toMGOOD1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_rooftop.jpg)");
      $("#mGood1").show();
      $("#my16").hide();
      $("#mm36").hide();
      song4.volume = 0;
      song5.volume = 0;
      song3.volume = 1;
      song3.currentTime = 0;
    });

    $("#toMGOOD2").click(function() {
      $("#mGood2").show();
      $("#mGood1").hide();
    });

    $("#toMGOOD3").click(function() {
      $("#mGood3").show();
      $("#mGood2").hide();
    });

    $("#toMGOOD4").click(function() {
      $("#mGood4").show();
      $("#mGood3").hide();
    });

    $("#toMGOOD5").click(function() {
      $("#mGood5").show();
      $("#mGood4").hide();
    });

    $("#toMGOOD6").click(function() {
      $("#mGood6").show();
      $("#mGood5").hide();
    });

    $("#toMGOOD7").click(function() {
      $("#mGood7").show();
      $("#mGood6").hide();
    });

    $("#toMGOOD8").click(function() {
      $("#mGood8").show();
      $("#mGood7").hide();
    });

    $("#toMGOOD9").click(function() {
      $("#mGood9").show();
      $("#mGood8").hide();
    });

    $("#toMGOOD10").click(function() {
      $("#mGood10").show();
      $("#mGood9").hide();
    });

    $("#toMGOOD11").click(function() {
      $("#mGood11").show();
      $("#mGood10").hide();
    });

    $("#toMGOOD12").click(function() {
      $("#mGood12").show();
      $("#mGood11").hide();
    });

    $("#toMGOOD13").click(function() {
      $("#mGood13").show();
      $("#mGood12").hide();
    });

    $("#toMGOOD14").click(function() {
      $("#mGood14").show();
      $("#mGood13").hide();
    });

    $("#toMGOOD15").click(function() {
      $("#mGood15").show();
      $("#mGood14").hide();
    });

    $("#toMGOOD16").click(function() {
      $("#mGood16").show();
      $("#mGood15").hide();
    });
  }

  // ----- TRACK FIELD -----
  {
    $("#toTrack2").click(function() {
      $("#track2").show();
      $("#track1").hide();
    });

  }

  // ----- HOMEROOM -----
  {
    $("#toHr2").click(function() {
      $("#hr2").show();
      $("#hr1").hide();
    });

  }

})
