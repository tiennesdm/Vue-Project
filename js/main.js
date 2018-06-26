$(function () {
    //   init navbar
    $(".button-collapse").sideNav();

    //  init slider
    $(".slider").slider({
        indicators: false,
        height: $(window).height() - $("nav").height()
    });

    // the min-height image in the hero area
    $(".slider .slides li").css({
        minHeight: $(window).height() - $("nav").height()
    });

    $("input.autocomplete").autocomplete({
        data: {
            Apple: null,
            Microsoft: null,
            abdo: null,
            nancy: null,
            nelly: null,
            Google: null
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        minLength: 1 // The minimum length of the input for the autocomplete to start. Default: 1.
    });
});
