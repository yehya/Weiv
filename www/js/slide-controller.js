/* global jQuery, $, slideLoader, createjs */

var slideController = {
    _contentDiv: $("slide-content"),
    _lecture: {}, // holds lecture data object
    _currSlide: null, // current slide on display
    _currEntities: null, // current slide on display
    _slideSequence: null, // slide number
    _entitySequence: null, // entity number
    _soundOn: true, // whether sound is on or not.
    _audioInstance: null, // audio instance object
    _numSlides: null, // number of slides
    loadLecture: function(lectureData) {
        this._print("loadLecture()");
        this._lecture = lectureData;
        this._slides = lectureData.slides;
        this._soundOn = true;
        this._numSlides = lectureData.slides.length;
        // Print lecture info
        this._print(lectureData.title);
        this._print(lectureData.course);
        this._print(lectureData.instructor);
        // Initialize our slide loader
        slideLoader.init();
        slideLoader.setTheme(lectureData.theme);
        // Set up entity handler etc. & start from slide 0
        this._prepareSlide(0);
    },
    toggleSound: function() {
        this._print("toggleSound()");
        if (this._soundOn) {
            this._soundOn = false;
            this._stopAudio();
        }
        else {
            this._soundOn = true;
            this._playAudio();
        }
    },
    isSoundOn: function() {
        return this._soundOn;
    },
    next: function() { // could be slide or animation
        this._print("next()");
        if (this._entitySequence < this._currEntities.length) {
            var entityIndx = this._entitySequence;
            slideLoader.addEntity(this._currEntities[entityIndx]);
            this._entitySequence++;
        } else {
            this._prepareSlide(this._slideSequence+1);
        }
    },
    previous: function() { // could be slide or animation
        this._print("previous()");
        if (this._entitySequence > 0) {
            this._entitySequence--;
            var ent = this._currEntities[this._entitySequence];
            slideLoader.removeEntity(ent);
        } else {
            if (this._slideSequence > 0) {
                this._prepareSlide(this._slideSequence-1);
            }
        }
    },
    _print: function(msg) {
        console.log("slideController: " + msg);
    },
    // Loads the slide into memory and prepares it for viewing
    _prepareSlide: function(sequence) {
        if (sequence < this._slides.length) {
            slideLoader.clear();
            this._slideSequence = sequence;
            this._entitySequence = 0;
            this._currEntities = this._lecture.slides[sequence].entities;
        }
        else {
            throw new Error("slideController: No such slide sequence exists");
        }
    },
    // Create new audio instance
    _loadAudio: function(url) {
        if (this._audioInstance !== null) {
            createjs.Sound.removeAllSounds();
        }
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.on("fileload", audioLoaded, window);
        createjs.Sound.registerSound(url, "slideAudio");
        var _this = this;
        var audioLoaded = function(event) {
            var instance = createjs.Sound.play("slideAudio");
            _this._audioInstance = instance;
            _this._audioInstance.volume = 1;
            if (!_this.isSoundOn()) {
                _this._audioInstance.stop();
            }
        };
    },
    _playAudio: function() {
        this._print("_playAudio()");
        if (this.isSoundOn()) {
            this._audioInstance.play();
        }
    },
    _stopAudio: function() {
        if (!this.isSoundOn()) {
            this._audioInstance.stop();
        }
    }
};

