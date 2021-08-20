jQuery(function ($) {

    var $nav = $('#animate'),
        $win = $(window),
        winH = $win.height();

    $win.on("scroll", function () {
        $nav.toggleClass("animate", $(this).scrollTop() > winH);
    }).on("resize", function () { // if resizes the window
        winH = $(this).height(); // new height value
    });

});