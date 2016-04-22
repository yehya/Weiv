/* global jQuery, $ */

/////////////////////
// ANIMATING HEADER
////////////////////

var HEADER_COLORS = {
    _colors: [
        "#00A8E8",
        "#EF233C",
        "#20BF55",
        "#8D99AE",
        "#F9C22E",
        "#53B3CB",
        "#E01A4F"
    ],
    _curr: null, // current color
    _indx: 0,
    getNext: function() {
        this._curr = this._colors[this._indx];
        this._indx = (this._indx + 1) % this._colors.length;
        return this._curr;
    }
};

var headerAnimator = setInterval(function() {

    $(".header").animate({
        color: HEADER_COLORS.getNext()
    }, 1500, "linear", function() {
        setTimeout(function() {
            $(".header").animate({
                color: "#000000"
            }, 1500, "linear", function() {

            });
        }, 700);
    })
}, 3700);

/////////////////////
// ANIMATING BUTTONS
/////////////////////

$(".slide-button").hover(function() {
    if (!$(this).hasClass('animating')) {
        $(this).dequeue().stop().animate({
            'font-size': "2em",
            'color': "#003459"
        }, "fast");
    }
}, function() {
    $(this).addClass('animating').animate({
        'font-size': "1.5em",
        'color': "#000000"
    }, "normal", "linear", function() {
        $(this).removeClass('animating').dequeue();
    });
});

$(".slide-button").click(function() {
    $(this).dequeue().animate({
        'backgroundColor': HEADER_COLORS.getNext()
    }, "regular", "swing", function() {
        $(this).dequeue().animate({
            'backgroundColor': "#FFFFFF"
        }, "regular", "swing");
    });
});