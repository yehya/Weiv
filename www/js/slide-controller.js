/* global jQuery, $ */

var slideController = {
    _contentDiv: $("slide-content"),
    _lectureName: null, // holds current lecture name
    _lectureID: null, // holds current lecture id
    _slideID: null, // current slide ID
    _slideEntities: null, // slide entities
    _slideSequence: null, // slide number
    _soundOn: false,
    toggleSound: function() {
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

    },
    previous: function() { // could be slide or animation

    },
    nextSlide: function() {

    },
    prevSlide: function() {

    }
};