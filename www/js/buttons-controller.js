/* global jQuery, $, slideController, slideLoader */

var notesManager = {
    saveNotes: function () {
        var notes = $("#notes-text").val();
        var X = "<span style='color: red; float: right;'>X</span>";
        $("#notes-content").append(notes+" "+X+"<br>");
    },
    clear: function () {
        $("#notes-content").html("");
    },
    init: function () {
        $("#button-saveNotes").click(function () {
            console.log("SAVE NOTES");
            notesManager.saveNotes();
        });
    }
};

notesManager.init();

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
    notesManager.clear();
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

$(".dark-button").click(function() {
    slideLoader.setTheme({
        background: "#000",
        color: "#fff"
    });
});

$(".color-button").click(function() {
    slideLoader.setTheme({
        background: "#00A8E8",
        color: "#8D99AE"
    });
});

$(".light-button").click(function() {
    slideLoader.setTheme({
        background: "#fff",
        color: "#000"
    });
});