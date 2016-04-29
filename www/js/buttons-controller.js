/* global jQuery, $, slideController */

//////////////////////
// Full Screen Button
/////////////////////

$("#button-full").click(function() {
    console.log("Fullscreen!");
    var elem = document.getElementById("slide");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
    else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }
    else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
});

////////////////
// Next button
////////////////

$("#button-next").click(function() {
    slideController.next();
});

$(document).keydown(function(e) {
    if (e.keyCode === 39) {
        slideController.next();
        console.log("Next");
    }
});

////////////////////
// Previous button
////////////////////

$("#button-back").click(function() {
    console.log("Previous");
    slideController.previous();
})

$(document).keydown(function(e) {
    if (e.keyCode === 37) {
        slideController.previous();
        console.log("Previous");
    }
});

////////////////////
// Click on slide
////////////////////

$("#slide-content").click(function() {
    console.log("Next");
    slideController.next();
});

/////////////////
// Sound button
/////////////////

$("#button-sound").click(function() {
    if ($(".fa-volume-off").length > 0) {
        $(".fa-volume-off").removeClass("fa-volume-off").addClass("fa-volume-up");
    }
    else {
        $(".fa-volume-up").removeClass("fa-volume-up").addClass("fa-volume-off");
    }
    slideController.toggleSound();
});