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

    // --- Sorrow of Losing ---

    var sorrow = new Audio();
    sorrow.src = "audio/music/The Sorrow Of Losing The Object Of One's Dependence.mp3";
    sorrow.loop = true;

    sorrow.load()
    sorrow.addEventListener("load", function() {
      sorrow.play();
    }, true);

    // --- Barefoot in the Park ---

    var barefoot = new Audio();
    barefoot.src = "audio/music/Barefoot In The Park.mp3";
    barefoot.loop = true;

    barefoot.load()
    barefoot.addEventListener("load", function() {
      barefoot.play();
    }, true);

    // --- Hedgehog's Dilemma ---

    var hedgehog = new Audio();
    hedgehog.src = "audio/music/Hedgehog's Dilemma.mp3";
    hedgehog.loop = true;

    hedgehog.load()
    hedgehog.addEventListener("load", function() {
      hedgehog.play();
    }, true);

    // --- A Moment When the Tension Breaks ---

    var tension = new Audio();
    tension.src = "audio/music/A Moment When The Tension Breaks.mp3";
    tension.loop = true;

    tension.load()
    tension.addEventListener("load", function() {
      tension.play();
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
    sorrow.volume = 0;
    barefoot.volume = 0;
    hedgehog.volume = 0;
    tension.volume = 0;
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
      sorrow.play();
      barefoot.play();
      hedgehog.play();
      tension.play();
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
      sorrow.pause();
      barefoot.pause();
      hedgehog.pause();
      tension.pause();
      $("#bgmOff").css("color", "#ff8f1f");
      $("#bgmOn").css("color", "white");
    });
  }

  // ----- SOUND EFFECTS -----
  {

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
    $("#gameOver").hide();
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
      sorrow.play();
      barefoot.play();
      hedgehog.play();
      tension.play();
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

    $(".toEndscreen").click(function() {
      $("#Endscreen").show();
      $(".bgShade").show();
    });

    $(".toGameover").click(function() {
      $("#gameOver").show();
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
      $("#track6").hide();
    });

    $("#toMus1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_corridor.jpg)");
      $("#mus1").show();
      $("#s3").hide();
      if (ritsuko.volume == 1) {
        ritsuko.volume = 0;
        joy.volume = 1;
        joy.currentTime = 0;
      } else if (barefoot.volume == 1) {
        barefoot.volume = 0;
        joy.volume = 1;
        joy.currentTime = 0;
      }
    });

    $("#toTrack1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_pool-back.jpg)");
      $("#track1").show();
      $("#s3").hide();
      cicada.play();
      if (ritsuko.volume == 1) {
        ritsuko.volume = 0;
        barefoot.volume = 1;
        barefoot.currentTime = 0;
      } else if (joy.volume == 1) {
        joy.volume = 0;
        barefoot.volume = 1;
        barefoot.currentTime = 0;
      }
    });

    $("#toRoof1").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_school_rooftop.jpg)");
      $("#roof1").show();
      $("#s3").hide();
      cicada.play();
      if (joy.volume == 1) {
        joy.volume = 0;
        ritsuko.volume = 1;
        ritsuko.currentTime = 0;
      } else if (barefoot.volume == 1) {
        barefoot.volume = 0;
        ritsuko.volume = 1;
        ritsuko.currentTime = 0;
      }
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

        $(".toBADEND1").click(function() {
          $(".storyBG").css("background-image", "url(img/bg/gos2_home_comfort-17-apartment.jpg)");
          $("#badEnd1").show();
          $("#mn16").hide();
          $("#rn14").hide();
          $("#tn11").hide();
          em17.volume = 0;
          terror.volume = 0;
          barefoot.volume = 0;
          sorrow.volume = 1;
          sorrow.currentTime = 0;
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

    $("#toTrack3").click(function() {
      $("#track3").show();
      $("#track2").hide();
    });

    $("#toTrack4").click(function() {
      $("#track4").show();
      $("#track3").hide();
    });

    $("#toTrack5").click(function() {
      $("#track5").show();
      $("#track4").hide();
    });

    // -- player leaves --
    $("#toTrack6").click(function() {
      $("#track6").show();
      $("#track5").hide();
    });

    // -- player stays --
    $("#toTrack7").click(function() {
      $("#track7").show();
      $("#track5").hide();
    });

    $("#toTrack8").click(function() {
      $(".storyBG").css("background-image", "url(img/event/toji.jpg)");
      $("#track8").show();
      $("#track7").hide();
    });

    $("#toTrack9").click(function() {
      $("#track9").show();
      $("#track8").hide();
    });

    $("#toTrack10").click(function() {
      $("#track10").show();
      $("#track9").hide();
    });

    $("#toTrack11").click(function() {
      $("#track11").show();
      $("#track10").hide();
    });

    $("#toTrack12").click(function() {
      $("#track12").show();
      $("#track11").hide();
    });

    $("#toTrack13").click(function() {
      $("#track13").show();
      $("#track12").hide();
    });

    $("#toTrack14").click(function() {
      $("#track14").show();
      $("#track13").hide();
    });

    // --- player goes to locker room ---
    {
      $("#toTY1").click(function() {
        $("#ty1").show();
        $("#track14").hide();
      });

      $("#toTY2").click(function() {
        $("#ty2").show();
        $("#ty1").hide();
      });

      $("#toTY3").click(function() {
        $("#ty3").show();
        $("#ty2").hide();
      });

      $("#toTY4").click(function() {
        $(".storyBG").css("background-image", "url(img/bg/gos2_ael_boys-locker-room.jpg)");
        $("#ty4").show();
        $("#ty3").hide();
      });

      $("#toTY5").click(function() {
        $("#ty5").show();
        $("#ty4").hide();
      });

      $("#toTY6").click(function() {
        $("#ty6").show();
        $("#ty5").hide();
      });

      $("#toTY7").click(function() {
        $("#ty7").show();
        $("#ty6").hide();
      });

      $("#toTY8").click(function() {
        $("#ty8").show();
        $("#ty7").hide();
      });

      $("#toTY9").click(function() {
        $("#ty9").show();
        $("#ty8").hide();
      });

      $("#toTY10").click(function() {
        $("#ty10").show();
        $("#ty9").hide();
      });

      $("#toTY11").click(function() {
        $("#ty11").show();
        $("#ty10").hide();
      });

      $("#toTY12").click(function() {
        $("#ty12").show();
        $("#ty11").hide();
      });

      $("#toTY13").click(function() {
        $("#ty13").show();
        $("#ty12").hide();
      });

      $("#toTY14").click(function() {
        $("#ty14").show();
        $("#ty13").hide();
      });

      $("#toTY15").click(function() {
        $("#ty15").show();
        $("#ty14").hide();
      });

      $("#toTY16").click(function() {
        $("#ty16").show();
        $("#ty15").hide();
      });

      $("#toTY17").click(function() {
        $("#ty17").show();
        $("#ty16").hide();
      });

      $("#toTY18").click(function() {
        $("#ty18").show();
        $("#ty17").hide();
      });

      $("#toTY19").click(function() {
        $("#ty19").show();
        $("#ty18").hide();
      });

      $("#toTY20").click(function() {
        $("#ty20").show();
        $("#ty19").hide();
      });

      $("#toTY21").click(function() {
        $("#ty21").show();
        $("#ty20").hide();
      });

      $("#toTY22").click(function() {
        $("#ty22").show();
        $("#ty21").hide();
      });

      $("#toTY23").click(function() {
        $("#ty23").show();
        $("#ty22").hide();
      });

      $("#toTY24").click(function() {
        $("#ty24").show();
        $("#ty23").hide();
      });

      $("#toTY25").click(function() {
        $("#ty25").show();
        $("#ty24").hide();
      });

      $("#toTY26").click(function() {
        $("#ty26").show();
        $("#ty25").hide();
      });

      $("#toTY27").click(function() {
        $("#ty27").show();
        $("#ty26").hide();
      });

      $("#toTY28").click(function() {
        $("#ty28").show();
        $("#ty27").hide();
      });

      $("#toTY29").click(function() {
        $("#ty29").show();
        $("#ty28").hide();
      });

      $("#toTY30").click(function() {
        $("#ty30").show();
        $("#ty29").hide();
      });

      $("#toTY31").click(function() {
        $(".storyBG").css("background-image", "url(img/event/gos2_075.jpg)");
        $("#ty31").show();
        $("#ty30").hide();
      });

      $("#toTY32").click(function() {
        $("#ty32").show();
        $("#ty31").hide();
      });

      $("#toTY33").click(function() {
        $("#ty33").show();
        $("#ty32").hide();
      });

      $("#toTY34").click(function() {
        $("#ty34").show();
        $("#ty33").hide();
      });

      $("#toTY35").click(function() {
        $("#ty35").show();
        $("#ty34").hide();
      });

      $("#toTY36").click(function() {
        $("#ty36").show();
        $("#ty35").hide();
      });

      $("#toTY37").click(function() {
        $("#ty37").show();
        $("#ty36").hide();
      });
    }

    // --- player gets drinks ---
    {
      $("#toTM1").click(function() {
        $("#tm1").show();
        $("#track14").hide();
      });

      $("#toTM2").click(function() {
        $("#tm2").show();
        $("#tm1").hide();
      });

      $("#toTM3").click(function() {
        $("#tm3").show();
        $("#tm2").hide();
      });

      $("#toTM4").click(function() {
        $("#tm4").show();
        $("#tm3").hide();
      });

      $("#toTM5").click(function() {
        $("#tm5").show();
        $("#tm4").hide();
      });

      $("#toTM6").click(function() {
        $("#tm6").show();
        $("#tm5").hide();
      });

      $("#toTM7").click(function() {
        $("#tm7").show();
        $("#tm6").hide();
      });

      $("#toTM8").click(function() {
        $("#tm8").show();
        $("#tm7").hide();
      });

      $("#toTM9").click(function() {
        $("#tm9").show();
        $("#tm8").hide();
      });

      $("#toTM10").click(function() {
        $("#tm10").show();
        $("#tm9").hide();
      });

      $("#toTM11").click(function() {
        $("#tm11").show();
        $("#tm10").hide();
      });

      $("#toTM12").click(function() {
        $(".storyBG").css("background-image", "url(img/bg/gos2_school_pastry-corner-room.jpg)");
        $("#tm12").show();
        $("#tm11").hide();
        barefoot.volume = 0;
        hedgehog.volume = 1;
        hedgehog.currentTime = 0;
      });

      $("#toTM13").click(function() {
        $("#tm13").show();
        $("#tm12").hide();
      });

      $("#toTM14").click(function() {
        $("#tm14").show();
        $("#tm13").hide();
      });

      $("#toTM15").click(function() {
        $("#tm15").show();
        $("#tm14").hide();
      });

      $("#toTM16").click(function() {
        $(".storyBG").css("background-image", "url(img/event/gos2_020c.jpg)");
        $("#tm16").show();
        $("#tm15").hide();
      });

      $("#toTM17").click(function() {
        $("#tm17").show();
        $("#tm16").hide();
      });

      $("#toTM18").click(function() {
        $("#tm18").show();
        $("#tm17").hide();
      });

      $("#toTM19").click(function() {
        $("#tm19").show();
        $("#tm18").hide();
      });

      $("#toTM20").click(function() {
        $("#tm20").show();
        $("#tm19").hide();
      });

      $("#toTM21").click(function() {
        $("#tm21").show();
        $("#tm20").hide();
      });

      $("#toTM22").click(function() {
        $("#tm22").show();
        $("#tm21").hide();
      });

      $("#toTM23").click(function() {
        $("#tm23").show();
        $("#tm22").hide();
      });

      $("#toTM24").click(function() {
        $("#tm24").show();
        $("#tm23").hide();
      });

      $("#toTM25").click(function() {
        $("#tm25").show();
        $("#tm24").hide();
      });

      $("#toTM26").click(function() {
        $("#tm26").show();
        $("#tm25").hide();
      });

      $("#toTM27").click(function() {
        $("#tm27").show();
        $("#tm26").hide();
      });

      $("#toTM28").click(function() {
        $("#tm28").show();
        $("#tm27").hide();
      });

      $("#toTM29").click(function() {
        $("#tm29").show();
        $("#tm28").hide();
      });

      $("#toTM30").click(function() {
        $("#tm30").show();
        $("#tm29").hide();
      });

      $("#toTM31").click(function() {
        $("#tm31").show();
        $("#tm30").hide();
      });

      $("#toTM32").click(function() {
        $("#tm32").show();
        $("#tm31").hide();
      });

      $("#toTM33").click(function() {
        $("#tm33").show();
        $("#tm32").hide();
      });

      $("#toTM34").click(function() {
        $("#tm34").show();
        $("#tm33").hide();
      });

      $("#toTM35").click(function() {
        $("#tm35").show();
        $("#tm34").hide();
      });

      $("#toTM36").click(function() {
        $("#tm36").show();
        $("#tm35").hide();
      });

      $("#toTM37").click(function() {
        $("#tm37").show();
        $("#tm36").hide();
      });

      $("#toTM38").click(function() {
        $("#tm38").show();
        $("#tm37").hide();
      });

      $("#toTM39").click(function() {
        $("#tm39").show();
        $("#tm38").hide();
      });

      $("#toTM40").click(function() {
        $("#tm40").show();
        $("#tm39").hide();
      });

      $("#toTM41").click(function() {
        $("#tm41").show();
        $("#tm40").hide();
      });

      $("#toTM42").click(function() {
        $("#tm42").show();
        $("#tm41").hide();
      });

      $("#toTM43").click(function() {
        $("#tm43").show();
        $("#tm42").hide();
      });
    }

    // --- player leaves ---
    {
      $("#toTN1").click(function() {
        $("#tn1").show();
        $("#track14").hide();
      });

      $("#toTN2").click(function() {
        $("#tn2").show();
        $("#tn1").hide();
      });

      $("#toTN3").click(function() {
        $("#tn3").show();
        $("#tn2").hide();
      });

      $("#toTN4").click(function() {
        $("#tn4").show();
        $("#tn3").hide();
      });

      $("#toTN5").click(function() {
        $("#tn5").show();
        $("#tn4").hide();
      });

      $("#switchTY1").click(function() {
        $("#ty1").show();
        $("#tn5").hide();
      });

      $("#switchTM1").click(function() {
        $("#tm1").show();
        $("#tn5").hide();
      });

      $("#toTN6").click(function() {
        $("#tn6").show();
        $("#tn5").hide();
      });

      $("#toTN7").click(function() {
        $("#tn7").show();
        $("#tn6").hide();
      });

      $("#toTN8").click(function() {
        $("#tn8").show();
        $("#tn7").hide();
      });

      $("#toTN9").click(function() {
        $("#tn9").show();
        $("#tn8").hide();
      });

      $("#toTN10").click(function() {
        $("#tn10").show();
        $("#tn9").hide();
      });

      $("#toTN11").click(function() {
        $("#tn11").show();
        $("#tn10").hide();
      });
    }

    // --- good toji end ---
    {
      $(".toTGOOD1").click(function() {
        $(".storyBG").css("background-image", "url(img/bg/gos_tokyo3_evening.jpg)");
        $("#tGood1").show();
        $("#ty37").hide();
        $("#tm43").hide();
        hedgehog.volume = 0;
        barefoot.volume = 0;
        tension.volume = 1;
        tension.currentTime = 0;
      });

      $("#toTGOOD2").click(function() {
        $("#tGood2").show();
        $("#tGood1").hide();
      });

      $("#toTGOOD3").click(function() {
        $("#tGood3").show();
        $("#tGood2").hide();
      });

      $("#toTGOOD4").click(function() {
        $("#tGood4").show();
        $("#tGood3").hide();
      });

      $("#toTGOOD5").click(function() {
        $("#tGood5").show();
        $("#tGood4").hide();
      });

      $("#toTGOOD6").click(function() {
        $("#tGood6").show();
        $("#tGood5").hide();
      });

      $("#toTGOOD7").click(function() {
        $("#tGood7").show();
        $("#tGood6").hide();
      });

      $("#toTGOOD8").click(function() {
        $("#tGood8").show();
        $("#tGood7").hide();
      });

      $("#toTGOOD9").click(function() {
        $("#tGood9").show();
        $("#tGood8").hide();
      });

      $("#toTGOOD10").click(function() {
        $("#tGood10").show();
        $("#tGood9").hide();
      });

      $("#toTGOOD11").click(function() {
        $("#tGood11").show();
        $("#tGood10").hide();
      });

      $("#toTGOOD12").click(function() {
        $("#tGood12").show();
        $("#tGood11").hide();
      });

      $("#toTGOOD13").click(function() {
        $("#tGood13").show();
        $("#tGood12").hide();
      });

      $("#toTGOOD14").click(function() {
        $("#tGood14").show();
        $("#tGood13").hide();
      });

      $("#toTGOOD15").click(function() {
        $("#tGood15").show();
        $("#tGood14").hide();
      });

      $("#toTGOOD16").click(function() {
        $("#tGood16").show();
        $("#tGood15").hide();
      });

      $("#toTGOOD17").click(function() {
        $("#tGood17").show();
        $("#tGood16").hide();
      });

      $("#toTGOOD18").click(function() {
        $("#tGood18").show();
        $("#tGood17").hide();
      });
    }
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
        $("#ry1").show();
        $("#roof25").hide();
      });

      $("#toRY2").click(function() {
        $("#ry2").show();
        $("#ry1").hide();
      });

      $("#toRY3").click(function() {
        $("#ry3").show();
        $("#ry2").hide();
      });

      $("#toRY4").click(function() {
        $("#ry4").show();
        $("#ry3").hide();
      });

      $("#toRY5").click(function() {
        $("#ry5").show();
        $("#ry4").hide();
      });

      $("#toRY6").click(function() {
        $(".storyBG").css("background-image", "url(img/event/gos_c251.jpg)");
        $("#ry6").show();
        $("#ry5").hide();
      });

      $("#toRY7").click(function() {
        $("#ry7").show();
        $("#ry6").hide();
        atField.play();
      });

      $("#toRY8").click(function() {
        $("#ry8").show();
        $("#ry7").hide();
      });

      $("#toRY9").click(function() {
        $("#ry9").show();
        $("#ry8").hide();
      });

      $("#toRY10").click(function() {
        $("#ry10").show();
        $("#ry9").hide();
      });

      $("#toRY11").click(function() {
        $("#ry11").show();
        $("#ry10").hide();
      });

      $("#toRY12").click(function() {
        $("#ry12").show();
        $("#ry11").hide();
      });

      $("#toRY13").click(function() {
        $("#ry13").show();
        $("#ry12").hide();
      });

      $("#toRY14").click(function() {
        $("#ry14").show();
        $("#ry13").hide();
      });

      $("#toRY15").click(function() {
        $("#ry15").show();
        $("#ry14").hide();
      });

      $("#toRY16").click(function() {
        $("#ry16").show();
        $("#ry15").hide();
      });

      $("#toRY17").click(function() {
        $("#ry17").show();
        $("#ry16").hide();
      });

      $("#toRY18").click(function() {
        $("#ry18").show();
        $("#ry17").hide();
      });

      $("#toRY19").click(function() {
        $("#ry19").show();
        $("#ry18").hide();
      });

      $("#toRY20").click(function() {
        $("#ry20").show();
        $("#ry19").hide();
      });

      $("#toRY21").click(function() {
        $("#ry21").show();
        $("#ry20").hide();
      });
    }

    // --- player watches ---
    {
      $("#toRM1").click(function() {
        $("#rm1").show();
        $("#roof25").hide();
        $("#rn4").hide();
      });

      $("#toRM2").click(function() {
        $(".storyBG").css("background-image", "url(img/event/gos_c251.jpg)");
        $("#rm2").show();
        $("#rm1").hide();
      });

      $("#toRM3").click(function() {
        $("#rm3").show();
        $("#rm2").hide();
        atField.play();
      });

      $("#toRM4").click(function() {
        $("#rm4").show();
        $("#rm3").hide();
      });

      $("#toRM5").click(function() {
        $("#rm5").show();
        $("#rm4").hide();
      });

      $("#toRM6").click(function() {
        $("#rm6").show();
        $("#rm5").hide();
      });

      $("#toRM7").click(function() {
        $("#rm7").show();
        $("#rm6").hide();
      });

      $("#toRM8").click(function() {
        $("#rm8").show();
        $("#rm7").hide();
      });

      $("#toRM9").click(function() {
        $("#rm9").show();
        $("#rm8").hide();
      });

      $("#toRM10").click(function() {
        $("#rm10").show();
        $("#rm9").hide();
      });

      $("#toRM11").click(function() {
        $("#rm11").show();
        $("#rm10").hide();
      });

      $("#toRM12").click(function() {
        $("#rm12").show();
        $("#rm11").hide();
      });

      $("#toRM13").click(function() {
        $("#rm13").show();
        $("#rm12").hide();
      });

      $("#toRM14").click(function() {
        $("#rm14").show();
        $("#rm13").hide();
      });

      $("#toRM15").click(function() {
        $("#rm15").show();
        $("#rm14").hide();
      });

      $("#toRM16").click(function() {
        $("#rm16").show();
        $("#rm15").hide();
      });

      $("#toRM17").click(function() {
        $("#rm17").show();
        $("#rm16").hide();
      });

      $("#toRM18").click(function() {
        $("#rm18").show();
        $("#rm17").hide();
      });

      $("#toRM19").click(function() {
        $("#rm19").show();
        $("#rm18").hide();
      });

      $("#toRM20").click(function() {
        $("#rm20").show();
        $("#rm19").hide();
      });

      $("#toRM21").click(function() {
        $("#rm21").show();
        $("#rm20").hide();
      });

      $("#toRM22").click(function() {
        $("#rm22").show();
        $("#rm21").hide();
      });

      $("#toRM23").click(function() {
        $("#rm23").show();
        $("#rm22").hide();
      });
    }

    // --- good kensuke end ---
    {
      $(".toRGOOD1").click(function() {
        $(".storyBG").css("background-image", "url(img/bg/gos_tokyo3_evening.jpg)");
        $("#rGood1").show();
        $("#ry21").hide();
        $("#rm23").hide();
        terror.volume = 0;
        peace.volume = 1;
        peace.currentTime = 0;
      });

      $("#toRGOOD2").click(function() {
        $("#rGood2").show();
        $("#rGood1").hide();
      });

      $("#toRGOOD3").click(function() {
        $("#rGood3").show();
        $("#rGood2").hide();
      });

      $("#toRGOOD4").click(function() {
        $("#rGood4").show();
        $("#rGood3").hide();
      });

      $("#toRGOOD5").click(function() {
        $("#rGood5").show();
        $("#rGood4").hide();
      });

      $("#toRGOOD6").click(function() {
        $("#rGood6").show();
        $("#rGood5").hide();
      });

      $("#toRGOOD7").click(function() {
        $("#rGood7").show();
        $("#rGood6").hide();
      });

      $("#toRGOOD8").click(function() {
        $("#rGood8").show();
        $("#rGood7").hide();
      });

      $("#toRGOOD9").click(function() {
        $("#rGood9").show();
        $("#rGood8").hide();
      });

      $("#toRGOOD10").click(function() {
        $("#rGood10").show();
        $("#rGood9").hide();
      });

      $("#toRGOOD11").click(function() {
        $("#rGood11").show();
        $("#rGood10").hide();
      });

      $("#toRGOOD12").click(function() {
        $("#rGood12").show();
        $("#rGood11").hide();
      });

      $("#toRGOOD13").click(function() {
        $("#rGood13").show();
        $("#rGood12").hide();
      });

      $("#toRGOOD14").click(function() {
        $("#rGood14").show();
        $("#rGood13").hide();
      });

      $("#toRGOOD15").click(function() {
        $("#rGood15").show();
        $("#rGood14").hide();
      });

      $("#toRGOOD16").click(function() {
        $("#rGood16").show();
        $("#rGood15").hide();
      });
    }

    // --- player leaves ---
    {
      $("#toRN1").click(function() {
        $("#rn1").show();
        $("#roof25").hide();
      });

      $("#toRN2").click(function() {
        $("#rn2").show();
        $("#rn1").hide();
      });

      $("#toRN3").click(function() {
        $("#rn3").show();
        $("#rn2").hide();
      });

      $("#toRN4").click(function() {
        $("#rn4").show();
        $("#rn3").hide();
      });

      $("#switchRY1").click(function() {
        $("#ry1").show();
        $("#rn4").hide();
      });

      $("#switchRM1").click(function() {
        $("#rm1").show();
        $("#rn4").hide();
      });

      $("#toRN5").click(function() {
        $("#rn5").show();
        $("#rn4").hide();
      });

      $("#toRN6").click(function() {
        $("#rn6").show();
        $("#rn5").hide();
      });

      $("#toRN7").click(function() {
        $("#rn7").show();
        $("#rn6").hide();
      });

      $("#toRN8").click(function() {
        $("#rn8").show();
        $("#rn7").hide();
      });

      $("#toRN9").click(function() {
        $("#rn9").show();
        $("#rn8").hide();
      });

      $("#toRN10").click(function() {
        $("#rn10").show();
        $("#rn9").hide();
      });

      $("#toRN11").click(function() {
        $("#rn11").show();
        $("#rn10").hide();
      });

      $("#toRN12").click(function() {
        $("#rn12").show();
        $("#rn11").hide();
      });

      $("#toRN13").click(function() {
        $("#rn13").show();
        $("#rn12").hide();
      });

      $("#toRN14").click(function() {
        $("#rn14").show();
        $("#rn13").hide();
      });
    }
  }

  // ----- GENERAL BAD END -----
  {
    $("#toBADEND2").click(function() {
      $("#badEnd2").show();
      $("#badEnd1").hide();
    });

    $("#toBADEND3").click(function() {
      $(".storyBG").css("background-image", "url(img/bg/gos2_home_living-room.jpg)");
      $("#badEnd3").show();
      $("#badEnd2").hide();
    });

    $("#toBADEND4").click(function() {
      $("#badEnd4").show();
      $("#badEnd3").hide();
    });

    $("#toBADEND5").click(function() {
      $("#badEnd5").show();
      $("#badEnd4").hide();
    });

    $("#toBADEND6").click(function() {
      $(".storyBG").css("background-image", "url(img/event/gos_c309.jpg)");
      $("#badEnd6").show();
      $("#badEnd5").hide();
    });

    $("#toBADEND7").click(function() {
      $("#badEnd7").show();
      $("#badEnd6").hide();
    });

    $("#toBADEND8").click(function() {
      $("#badEnd8").show();
      $("#badEnd7").hide();
    });

    $("#toBADEND9").click(function() {
      $("#badEnd9").show();
      $("#badEnd8").hide();
    });

    $("#toBADEND10").click(function() {
      $("#badEnd10").show();
      $("#badEnd9").hide();
    });

    $("#toBADEND11").click(function() {
      $("#badEnd11").show();
      $("#badEnd10").hide();
    });

    $("#toBADEND12").click(function() {
      $("#badEnd12").show();
      $("#badEnd11").hide();
    });

    $("#toBADEND13").click(function() {
      $("#badEnd13").show();
      $("#badEnd12").hide();
    });

    $("#toBADEND14").click(function() {
      $("#badEnd14").show();
      $("#badEnd13").hide();
    });

    $("#toBADEND15").click(function() {
      $("#badEnd15").show();
      $("#badEnd14").hide();
    });

    $("#toBADEND16").click(function() {
      $("#badEnd16").show();
      $("#badEnd15").hide();
    });

    $("#toBADEND17").click(function() {
      $("#badEnd17").show();
      $("#badEnd16").hide();
    });

  }

})
