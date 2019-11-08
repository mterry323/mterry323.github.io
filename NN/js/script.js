$(document).ready(function() {

  screen.orientation.lock('landscape');

  // ----- BG MUSIC -----
  {
    // --- Ritsuko ---
    var ritsuko = "audio/Ritsuko.mp3"
    var song1 = new Audio();

    song1.load()
    song1.addEventListener("load", function() {
      song1.play();
    }, true);

    song1.src = ritsuko;
    song1.loop = true;

    // --- Ode to Joy ---
    var joy = "audio/Ode to Joy.mp3"
    var song2 = new Audio();

    song2.load()
    song2.addEventListener("load", function() {
      song2.play();
    }, true);

    song2.src = joy;
    song2.loop = true;

    // --- Instabilite ---

    var em12 = "audio/Instabilite.mp3"
    var song3 = new Audio();

    song3.load()
    song3.addEventListener("load", function() {
      song3.play();
    }, true);

    song3.src = em12;
    song3.loop = true;

    // --- Quatre Mains ---

    var qMains = "audio/Quatre Mains_short.mp3"
    var song4 = new Audio();

    song4.load()
    song4.addEventListener("load", function() {
      song4.play();
    }, true);

    song4.src = qMains;

  }

  // ----- SOUND EFFECTS -----

  {
    var riff1 = "audio/riff1.wav"
    var piano1 = new Audio();

    piano1.load()
    piano1.addEventListener("load", function() {
      piano1.play();
    }, true);

    piano1.src = riff1;
    piano1.loop = false;

    var riff2 = "audio/riff2.wav"
    var piano2 = new Audio();

    piano2.load()
    piano2.addEventListener("load", function() {
      piano2.play();
    }, true);

    piano2.src = riff2;

  }


  // ----- SET FIRST SONG -----
  {
    song1.volume = 1;
    song2.volume = 0;
    song3.volume = 0;
    song4.volume = 0;
  }

  // ----- DEFAULT MUSIC CONTROLS -----
  {
    $("#bgmOff").css("color", "#ff8f1f");

    $("#bgmOn").click(function() {
      song1.play();
      song2.play();
      song3.play();
      song4.play();
      $("#bgmOn").css("color", "#ff8f1f");
      $("#bgmOff").css("color", "white");
    });

    $("#bgmOff").click(function() {
      song1.pause();
      song2.pause();
      song3.pause();
      song4.pause();
      $("#bgmOff").css("color", "#ff8f1f");
      $("#bgmOn").css("color", "white");
    });
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

    $("#toS3").click(function() {
      $("#s3").show();
      $("#s2").hide();
    });

    $("#toMus1").click(function() {
      $("#mus1").show();
      $("#s3").hide();
      song1.volume = 0;
      song2.volume = 1;
      song2.currentTime = 0;
    });

    $("#toTrack1").click(function() {
      $("#track1").show();
      $("#s3").hide();
    });

    $("#toHr1").click(function() {
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

    // --- player leaves kaworu route ---

    $("#leaveMus").click(function() {
      $("#s3").show();
      $("#mus7").hide();
      song2.volume = 0;
      song1.volume = 1;
      song1.currentTime = 0;
    })

  }

  // --- player stays on kaworu route ---

  $("#toMus8").click(function() {
    $("#mus8").show();
    $("#mus6").hide();
  });

  $("#toMus9").click(function() {
    $("#mus9").show();
    $("#mus8").hide();
    song2.volume = 0;
    song3.volume = 1;
    song3.currentTime = 0;
  });

  $("#toMus10").click(function() {
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
      $("#mn4").hide();
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
      $("#my5").show();
      $("#my4").hide();
      piano1.play();
    });

    $("#toMY6").click(function() {
      $("#my6").show();
      $("#my5").hide();
      piano2.play();
    });

    $("#toMY7").click(function() {
      $("#my7").show();
      $("#my6").hide();
      song4.volume = 1;
      song4.currentTime = 0;
    });

    $("#toMY8").click(function() {
      $("#my8").show();
      $("#my7").hide();
    });

    $("#toMY9").click(function() {
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
      // if ($("#mn4").show() = true) {
      //   $("#mn4").hide();
      // }

      $("#mm1").show();
      $("#mus16").hide();
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
  }

  // --- good kaworu end ---
  {
    $("#toMGOOD1").click(function() {
      $("#mGood1").show();
      $("#my16").hide();
      song4.volume = 0;
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

});
