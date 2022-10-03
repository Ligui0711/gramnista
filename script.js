$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".element-top").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("animation-top");
      } else {
        $(this).removeClass("animation-top");
      }
    });
  });
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".element-right").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("animation-right");
      } else {
        $(this).removeClass("animation-right");
      }
    });
  });
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".element-bottom").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight) {
        $(this).addClass("animation-bottom");
      } else {
        $(this).removeClass("animation-bottom");
      }
    });
  });
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".element-left").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("animation-left");
      } else {
        $(this).removeClass("animation-left");
      }
    });
  });
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".element2").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("smooth");
      } else {
        $(this).removeClass("smooth");
      }
    });
  });
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".element-right-bottom").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("animation-right-bottom");
      } else {
        $(this).removeClass("animation-right-bottom");
      }
    });
  });
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".element-left-bottom").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("animation-left-bottom");
      } else {
        $(this).removeClass("animation-left-bottom");
      }
    });
  });
  $(".contact-button-turn").hover(
    function () {
      $(".mv-contact-button").addClass("turn");
    },
    function () {
      $(".mv-contact-button").removeClass("turn");
    }
  );
  // エラーメッセージSS
  $(".require").on("blur", function () {
    let error;
    let value = $(this).val();
    let i = $(".input-area li .require").index(this);
    if (value == "" || !value.match(/[^\s\t]/)) {
      error = true;
    }
    if (error) {
      console.log(i);
      $(".error-text").eq(i).show();
      $(this).css("border", "solid 1px red");
    } else {
      $(".error-text").eq(i).hide();
      $(this).css("border", "solid 1px #ccc");
    }
  });
  $(".contact-form-button").click("blur", function () {
    let error;
    let value = $(this).val();
    let i = $(".input-area li .require").index(this);
    if (value == "" || !value.match(/[^\s\t]/)) {
      error = true;
    }
    if (error) {
      console.log(i);
      $(".error-text").show();
      $(".require").css("border", "solid 1px red");
    } else {
      $(".error-text").hide();
      $(".require").css("border", "solid 1px #ccc");
    }
  });
});
