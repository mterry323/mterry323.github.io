$(document).ready(function() {

  // ----- BG MUSIC -----
  {
    // --- Ritsuko ---
    var ritsuko = new Audio();
    ritsuko.src = "audio/music/Ritsuko.mp3";
    ritsuko.loop = true;

    ritsuko.load()
    ritsuko.addEventListener("load", function() {
      ritsuko.play();
    }, true);

    // --- Ode to Joy ---
    var joy = new Audio();
    joy.src = "audio/music/Ode to Joy.mp3"
    joy.loop = true;

    joy.load()
    joy.addEventListener("load", function() {
      joy.play();
    }, true);

    // --- Instabilite ---
    var em17 = new Audio();
    em17.src = "audio/music/Instabilite.mp3";
    em17.loop = true;

    em17.load()
    em17.addEventListener("load", function() {
      em17.play();
    }, true);

    // --- Quatre Mains ---

    var qMains = new Audio();
    qMains.src = "audio/music/Quatre Mains_short.mp3";
    qMains.loop = true;

    qMains.load()
    qMains.addEventListener("load", function() {
      qMains.play();
    }, true);

    // --- Suiten fur Violoncello ---

    var suiten = new Audio();
    suiten.src = "audio/music/Violoncello.mp3";
    suiten.loop = true;

    suiten.load()
    suiten.addEventListener("load", function() {
      suiten.play();
    }, true);

    // --- A Step Forward into Terror ---

    var terror = new Audio();
    terror.src = "audio/music/A Step Forward Into Terror.mp3";
    terror.loop = true;

    terror.load()
    terror.addEventListener("load", function() {
      terror.play();
    }, true);

    // --- When I Find Peace Of Mind ---

    var peace = new Audio();
    peace.src = "audio/music/When I Find Peace of Mind.mp3";
    peace.loop = true;

    peace.load()
    peace.addEventListener("load", function() {
      peace.play();
    }, true);

  }

  // ----- SET FIRST SONG -----
  {
    ritsuko.volume = 1;
    joy.volume = 0;
    em17.volume = 0;
    qMains.volume = 0;
    suiten.volume = 0;
    terror.volume = 0;
    peace.volume = 0;
  }

  // ----- MUSIC CONTROLS -----
  {
    $("#bgmOn").css("color", "#ff8f1f");

    $("#bgmOn").click(function() {
      ritsuko.play();
      joy.play();
      em17.play();
      qMains.play();
      suiten.play();
      terror.play();
      peace.play();
      $("#bgmOn").css("color", "#ff8f1f");
      $("#bgmOff").css("color", "white");
    });

    $("#bgmOff").click(function() {
      ritsuko.pause();
      joy.pause();
      em17.pause();
      qMains.pause();
      suiten.pause();
      terror.pause();
      peace.pause();
      $("#bgmOff").css("color", "#ff8f1f");
      $("#bgmOn").css("color", "white");
    });
  }

  // ----- SOUND EFFECTS -----

  {
    // --- school bell ---
    var bell = new Audio();
    bell.src = "audio/sfx/bell.mp3";
    bell.volume = 1;

    bell.load()
    bell.addEventListener("load", function() {
      bell.play();
    }, true);

    // --- cicadas ---
    var cicada = new Audio();
    cicada.src = "audio/sfx/cicada.mp3";
    cicada.volume = 1;

    cicada.load()
    cicada.addEventListener("load", function() {
      cicada.play();
    }, true);

    // --- piano riffs ---
    var piano1 = new Audio();
    piano1.src = "audio/sfx/riff1.mp3";
    piano1.volume = 1;

    piano1.load()
    piano1.addEventListener("load", function() {
      piano1.play();
    }, true);

    var piano2 = new Audio();
    piano2.src = "audio/sfx/riff2.mp3";
    piano2.volume = 1;

    piano2.load()
    piano2.addEventListener("load", function() {
      piano2.play();
    }, true);

    // --- cello playing ---
    var cello = new Audio();
    cello.src = "audio/sfx/cello.mp3";
    cello.volume = 1;

    cello.load()
    cello.addEventListener("load", function() {
      cello.play();
    }, true);

    // --- warning alarm ---
    var alarm = new Audio();
    alarm.src = "audio/sfx/alarm.mp3";
    alarm.volume = 1;

    alarm.load()
    alarm.addEventListener("load", function() {
      alarm.play();
    }, true);

    // --- a.t. field ---
    var atField = new Audio();
    atField.src = "audio/sfx/at field.mp3";
    atField.volume = 1;

    atField.load()
    atField.addEventListener("load", function() {
      atField.play();
    }, true);

  }

  // ----- SOUND CONTROLS -----
  {
    $("#sfxOn").css("color", "#ff8f1f");

    $("#sfxOn").click(function() {
      bell.volume = 1;
      cicada.volume = 1;
      piano1.volume = 1;
      piano2.volume = 1;
      cello.volume = 1;
      alarm.volume = 1;
      atField.volume = 1;
      $("#sfxOn").css("color", "#ff8f1f");
      $("#sfxOff").css("color", "white");
    });

    $("#sfxOff").click(function() {
      bell.volume = 0;
      cicada.volume = 0;
      piano1.volume = 0;
      piano2.volume = 0;
      cello.volume = 0;
      alarm.volume = 0;
      atField.volume = 0;
      $("#sfxOff").css("color", "#ff8f1f");
      $("#sfxOn").css("color", "white");
    });
  }

  // ----- POPUPS - DON'T FORGET TO PLAY NEW TRACKS -----
  {
    $("#aboutBlurb").hide();
    $("#copyBlurb").hide();
    $("#Endscreen").hide();
    $("#Startscreen").show();
    $(".bgShade").show();

    $(".begin").click(function() {
      $("#Startscreen").hide();
      $(".bgShade").hide();
      ritsuko.play();
      joy.play();
      em17.play();
      qMains.play();
      suiten.play();
      terror.play();
      peace.play();
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
      $("#roof6").hide();
    });

    $("#toMus1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_corridor.jpg)");
      $("#mus1").show();
      $("#s3").hide();
      ritsuko.volume = 0;
      joy.volume = 1;
      joy.currentTime = 0;
    });

    $("#toTrack1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_pool-back.jpg)");
      $("#track1").show();
      $("#s3").hide();
    });

    $("#toRoof1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_rooftop.jpg)");
      $("#roof1").show();
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

    // --- player leaves kaworu route ---

    $("#toMus7").click(function() {
      $("#mus7").show();
      $("#mus6").hide();
    });

    // --- player stays on kaworu route ---
    {
      $("#toMus8").click(function() {
        $("#mus8").show();
        $("#mus6").hide();
      });

      $("#toMus9").click(function() {
        $(".storyBG").css("background-image", "url(img/bg/gos2_school_music-room.jpg)");
        $("#mus9").show();
        $("#mus8").hide();
        joy.volume = 0;
        em17.volume = 1;
        em17.currentTime = 0;
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
          em17.volume = 0;
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
          qMains.volume = 1;
          qMains.currentTime = 0;
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
          em17.volume = 0;
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
          suiten.volume = 1;
          suiten.currentTime = 0;
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
    }

    // --- good kaworu end ---
    {
      $(".toMGOOD1").click(function() {
        $(".storyBG").css("background-image", "url(img/bg/gos_tokyo3_evening.jpg)");
        $("#mGood1").show();
        $("#my16").hide();
        $("#mm36").hide();
        qMains.volume = 0;
        suiten.volume = 0;
        em17.volume = 1;
        em17.currentTime = 0;
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
  }

  // ----- TRACK FIELD -----
  {
    $("#toTrack2").click(function() {
      $("#track2").show();
      $("#track1").hide();
    });

  }

  // ----- ROOFTOP -----
  {
    $("#toRoof2").click(function() {
      $("#roof2").show();
      $("#roof1").hide();
    });


    $("#toRoof3").click(function() {
      $("#roof3").show();
      $("#roof2").hide();
    });


    $("#toRoof4").click(function() {
      $("#roof4").show();
      $("#roof3").hide();
    });


    $("#toRoof5").click(function() {
      $("#roof5").show();
      $("#roof4").hide();
    });


    $("#toRoof6").click(function() {
      $("#roof6").show();
      $("#roof5").hide();
    });


    $("#toRoof7").click(function() {
      $(".storyBG").css("background-image", "url(img/event/gos2_118.jpg)");
      $("#roof7").show();
      $("#roof5").hide();
    });

    $("#toRoof8").click(function() {
      $("#roof8").show();
      $("#roof7").hide();
    });

    $("#toRoof9").click(function() {
      $("#roof9").show();
      $("#roof8").hide();
    });

    $("#toRoof10").click(function() {
      $("#roof10").show();
      $("#roof9").hide();
    });

    $("#toRoof11").click(function() {
      $("#roof11").show();
      $("#roof10").hide();
    });

    $("#toRoof12").click(function() {
      $("#roof12").show();
      $("#roof11").hide();
    });

    $("#toRoof13").click(function() {
      $("#roof13").show();
      $("#roof12").hide();
    });

    $("#toRoof14").click(function() {
      $("#roof14").show();
      $("#roof13").hide();
    });

    $("#toRoof15").click(function() {
      $("#roof15").show();
      $("#roof14").hide();
    });

    $("#toRoof16").click(function() {
      $("#roof16").show();
      $("#roof15").hide();
    });

    $("#toRoof17").click(function() {
      $("#roof17").show();
      $("#roof16").hide();
    });

    $("#toRoof18").click(function() {
      $("#roof18").show();
      $("#roof17").hide();
    });

    $("#toRoof19").click(function() {
      $("#roof19").show();
      $("#roof18").hide();
    });

    $("#toRoof20").click(function() {
      $("#roof20").show();
      $("#roof19").hide();
    });

    $("#toRoof21").click(function() {
      $("#roof21").show();
      $("#roof20").hide();
    });

    $("#toRoof22").click(function() {
      $("#roof22").show();
      $("#roof21").hide();
    });

    $("#toRoof23").click(function() {
      $("#roof23").show();
      $("#roof22").hide();
      ritsuko.volume = 0;
      alarm.play();
      terror.volume = 1;
      terror.currentTime = 0;
    });

    $("#toRoof24").click(function() {
      $("#roof24").show();
      $("#roof23").hide();
    });

    $("#toRoof25").click(function() {
      $("#roof25").show();
      $("#roof24").hide();
    });

    // --- player hands camera ---
    {
      $("#toRY1").click(function() {
        $("#rY1").show();
        $("#roof25").hide();
      });

      $("#toRY2").click(function() {
        $("#rY2").show();
        $("#rY1").hide();
      });

      $("#toRY3").click(function() {
        $("#rY3").show();
        $("#rY2").hide();
      });

      $("#toRY4").click(function() {
        $("#rY4").show();
        $("#rY3").hide();
      });

      $("#toRY5").click(function() {
        $("#rY5").show();
        $("#rY4").hide();
      });

      $("#toRY6").click(function() {
        $(".storyBG").css("background-image", "url(img/event/gos_c251.jpg)");
        $("#rY6").show();
        $("#rY5").hide();
      });

      $("#toRY7").click(function() {
        $("#rY7").show();
        $("#rY6").hide();
        atField.play();
      });

      $("#toRY8").click(function() {
        $("#rY8").show();
        $("#rY7").hide();
      });

      $("#toRY9").click(function() {
        $("#rY9").show();
        $("#rY8").hide();
      });

      $("#toRY10").click(function() {
        $("#rY10").show();
        $("#rY9").hide();
      });

      $("#toRY11").click(function() {
        $("#rY11").show();
        $("#rY10").hide();
      });

      $("#toRY12").click(function() {
        $("#rY12").show();
        $("#rY11").hide();
      });

      $("#toRY13").click(function() {
        $("#rY13").show();
        $("#rY12").hide();
      });

      $("#toRY14").click(function() {
        $("#rY14").show();
        $("#rY13").hide();
      });

      $("#toRY15").click(function() {
        $("#rY15").show();
        $("#rY14").hide();
      });

      $("#toRY16").click(function() {
        $("#rY16").show();
        $("#rY15").hide();
      });

      $("#toRY17").click(function() {
        $("#rY17").show();
        $("#rY16").hide();
      });

      $("#toRY18").click(function() {
        $("#rY18").show();
        $("#rY17").hide();
      });

      $("#toRY19").click(function() {
        $("#rY19").show();
        $("#rY18").hide();
      });

      $("#toRY20").click(function() {
        $("#rY20").show();
        $("#rY19").hide();
      });

      $("#toRY21").click(function() {
        $("#rY21").show();
        $("#rY20").hide();
      });
    }

    // --- player watches ---
    {
      $("#toRM1").click(function() {
        $("#rM1").show();
        $("#roof25").hide();
      });

      $("#toRM2").click(function() {
        $(".storyBG").css("background-image", "url(img/event/gos_c251.jpg)");
        $("#rM2").show();
        $("#rM1").hide();
      });

      $("#toRM3").click(function() {
        $("#rM3").show();
        $("#rM2").hide();
        atField.play();
      });

      $("#toRM4").click(function() {
        $("#rM4").show();
        $("#rM3").hide();
      });

      $("#toRM5").click(function() {
        $("#rM5").show();
        $("#rM4").hide();
      });

      $("#toRM6").click(function() {
        $("#rM6").show();
        $("#rM5").hide();
      });

      $("#toRM7").click(function() {
        $("#rM7").show();
        $("#rM6").hide();
      });

      $("#toRM8").click(function() {
        $("#rM8").show();
        $("#rM7").hide();
      });

      $("#toRM9").click(function() {
        $("#rM9").show();
        $("#rM8").hide();
      });

      $("#toRM10").click(function() {
        $("#rM10").show();
        $("#rM9").hide();
      });

      $("#toRM11").click(function() {
        $("#rM11").show();
        $("#rM10").hide();
      });

      $("#toRM12").click(function() {
        $("#rM12").show();
        $("#rM11").hide();
      });

      $("#toRM13").click(function() {
        $("#rM13").show();
        $("#rM12").hide();
      });

      $("#toRM14").click(function() {
        $("#rM14").show();
        $("#rM13").hide();
      });

      $("#toRM15").click(function() {
        $("#rM15").show();
        $("#rM14").hide();
      });

      $("#toRM16").click(function() {
        $("#rM16").show();
        $("#rM15").hide();
      });

      $("#toRM17").click(function() {
        $("#rM17").show();
        $("#rM16").hide();
      });

      $("#toRM18").click(function() {
        $("#rM18").show();
        $("#rM17").hide();
      });

      $("#toRM19").click(function() {
        $("#rM19").show();
        $("#rM18").hide();
      });

      $("#toRM20").click(function() {
        $("#rM20").show();
        $("#rM19").hide();
      });

      $("#toRM21").click(function() {
        $("#rM21").show();
        $("#rM20").hide();
      });

      $("#toRM22").click(function() {
        $("#rM22").show();
        $("#rM21").hide();
      });

      $("#toRM23").click(function() {
        $("#rM23").show();
        $("#rM22").hide();
      });
    }

    // --- good kensuke end ---
    {
      $(".toRGOOD1").click(function() {
        $(".storyBG").css("background-image", "url(img/bg/gos_tokyo3_evening.jpg)");
        $("#rGood1").show();
        $("#rY21").hide();
        $("#rM23").hide();
        terror.volume = 0;
        peace.volume = 1;
        peace.currentTime = 0;
      });
    }

    // --- player leaves ---
    {
      $("#toRN1").click(function() {
        $("#rN1").show();
        $("#roof25").hide();
      });
    }

  }

})
