/* global jQuery, $, slideController, slideLoader, notesManager, swal */

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

////////////////
// Theme Button
////////////////

var themeAlert = function() {
    swal({
        title: 'Select a theme',
        input: 'select',
        inputOptions: {
            'DARK': 'Dark',
            'LIGHT': 'Light',
            'COLOR': 'Color'
        },
        inputPlaceholder: 'Select theme',
        showCancelButton: true,
        inputValidator: function(value) {
            return new Promise(function(resolve, reject) {
                resolve();
            });
        }
    }).then(function(result) {
        if (result) {
            swal({
                type: 'success',
                html: 'You selected: ' + result
            });
            if (result === "DARK") {
                slideLoader.setTheme({
                    background: "#000",
                    color: "#fff"
                });
            }
            else if (result === "LIGHT") {
                slideLoader.setTheme({
                    background: "#fff",
                    color: "#000"
                });
            }
            else {
                slideLoader.setTheme({
                    background: "#F9C22E",
                    color: "#E01A4F"
                });
            }
        }
    })
};

$("#theme-button").click(function() {
    themeAlert();
});

/////////////////
// Notes button
/////////////////

$("#button-saveNotes").click(function() {
    console.log("SAVE NOTES");
    notesManager.saveNotes();
});

////////////////
// Save Button
////////////////

$("#button-save").click(function() {
    var lectureString = JSON.stringify(slideController.getLectureData());
    sessionStorage.setItem("lecture", lectureString);
    swal(
        'Saved!',
        'Lecture & Notes have been saved!',
        'success'
    );
});

////////////////
// Load Button
////////////////

$("#button-load").click(function() {
    if (sessionStorage.getItem("lecture") === null) {
        swal(
            'No saved lecture',
            'There are no saved lectures.',
            'error'
        );
    }
    else {
        var lecture = JSON.parse(sessionStorage.getItem("lecture"));
        slideController.loadLecture(lecture);
        swal(
            'Loaded lecture!',
            'Lecture & Notes have been loaded!',
            'success'
        );
    }
});