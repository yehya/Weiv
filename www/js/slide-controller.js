/* global jQuery, $ */

var slideController = {
    _contentDiv: $("slide-content"),
    _lecture: {}, // holds lecture data object
    _currSlide: null, // current slide on display
    _slideSequence: null, // slide number
    _entitySequence: null, // entity number
    _soundOn: true, // whether sound is on or not.
    loadLecture: function(lectureData) {
        this._print("loadLecture()");
        this._lecture = lectureData;
        this._soundOn = true;
        this._setTheme(this._lecture.theme);
    },
    toggleSound: function() {
        this._print("toggleSound()");
        if (this._soundOn) {
            this._soundOn = false;
        }
        else {
            this._soundOn = true;
        }
    },
    isSoundOn: function() {
        return this._soundOn;
    },
    next: function() { // could be slide or animation
        this._print("next()");
    },
    previous: function() { // could be slide or animation
        this._print("previous()");
    },
    _print: function(msg) {
        console.log("slideController: " + msg);
    },
    // Loads the slide into memory and prepares it for viewing
    _prepareSlide: function(sequence) {
        if (sequence < this._slides.length) {
            this._slideSequence = sequence;
            this._entitySequence = 0;
        }
        else {
            throw new Error("slideController: No such slide sequence exists");
        }
    },
    _setTheme: function(theme) {
        this._contentDiv.attr("style", theme);
    },
    _playAudio: function(url) {
        this._print("_playAudio()");
        if (this.isSoundOn()) {
            var audio = new Audio(url);
            audio.autoplay = true;
            audio.play();
        }
    }
};