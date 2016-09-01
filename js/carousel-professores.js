$.definePage({
  init: function() {

    $(".professores-fotos").slick({
      asNavFor: ".professores-textos",
      infinite: true,
      slidesToShow: 7,
      centerMode: true,
      variableWidth: true,
      focusOnSelect: true,
      arrows: false
    });

    $(".professores-textos").slick({
      asNavFor: ".professores-fotos",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
});
