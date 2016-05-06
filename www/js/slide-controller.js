/* global jQuery, $, slideLoader, createjs, notesManager */

var slideController = {
    _contentDiv: $("slide-content"),
    _lecture: {}, // holds lecture data object
    _nonCircularLecture: {}, // non circular
    _currSlide: null, // current slide on display
    _currEntities: null, // current slide on display
    _slideSequence: null, // slide number
    _entitySequence: null, // entity number
    _soundOn: true, // whether sound is on or not.
    _audioInstance: null, // audio instance object
    _audioInstanceCounter: 0, // number of audio instances
    _audioInstanceId: null, // current audio instance id
    _numSlides: null, // number of slides
    loadLecture: function(lectureData) {
        this._print("loadLecture()");
        this._lecture = lectureData;
        this._nonCircularLecture = $.extend(true, {}, lectureData);
        this._slides = lectureData.slides;
        this._soundOn = true;
        this._numSlides = lectureData.slides.length;
        // Print lecture info
        this._print(lectureData.title);
        this._print(lectureData.course);
        this._print(lectureData.instructor);
        // Initialize our slide loader
        slideLoader.init();
        slideLoader.setTheme({
            background: lectureData.theme.background,
            color: lectureData.theme.color
        });
        // Set up entity handler etc. & start from slide 0
        this._prepareSlide(0);
    },
    getLectureData: function() {
        return $.extend(true, {}, this._nonCircularLecture);
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
        }
        else {
            this._prepareSlide(this._slideSequence + 1);
        }
    },
    previous: function() { // could be slide or animation
        this._print("previous()");
        if (this._entitySequence > 0) {
            this._entitySequence--;
            var ent = this._currEntities[this._entitySequence];
            slideLoader.removeEntity(ent);
        }
        else {
            if (this._slideSequence > 0) {
                this._prepareSlide(this._slideSequence - 1);
            }
        }
    },
    saveNote: function(note, id) {
        id = id.toString();
        this._print("saveNote(): saving note: " + note);
        if (note.trim() !== "") {
            var lecture = this._nonCircularLecture;
            var currentSlide = lecture.slides[this._slideSequence];
            if (typeof currentSlide.notes === "undefined" ||
                currentSlide.notes === null) {
                currentSlide.notes = {};
            }
            if (typeof id === "string") {
                currentSlide.notes[id] = note;
            }
        }
    },
    removeNote: function(id) {
        var lecture = this._nonCircularLecture;
        var currentSlide = lecture.slides[this._slideSequence];
        this._print("Deleting note: " + id);
        if (typeof currentSlide.notes !== "undefined" &&
            currentSlide.notes !== null) {
            if (currentSlide.notes !== null &&
                typeof currentSlide.notes[id] !== "undefined") {
                delete currentSlide.notes[id];
            }
        }
    },
    _loadSavedNotes: function() {
        var _this = this;
        this._print("_loadSavedNotes()");
        var lecture = this._nonCircularLecture;
        var currentSlide = lecture.slides[this._slideSequence];
        if (typeof currentSlide.notes !== "undefined" && currentSlide.notes !== null) {
            _this._print("has notes.");
            var notes = currentSlide.notes;
            $.each(notes, function(id, val) {
                _this._print(id + ": " + val);
                notesManager.displayNote(val, id);
            });
        }
    },
    _print: function(msg) {
        console.log("slideController: " + msg);
    },
    // Loads the slide into memory and prepares it for viewing
    _prepareSlide: function(sequence) {
        this._print("_prepareSlide():" + sequence);
        if (sequence < this._slides.length) {
            slideLoader.clear();
            this._slideSequence = sequence;
            this._entitySequence = 0;
            this._currEntities = this._lecture.slides[sequence].entities;
            console.log(this._lecture.slides[sequence]);
            this._loadAudio(this._lecture.slides[sequence].audioUrl);
            notesManager.clear();
            this._loadSavedNotes();
        }
        else {
            throw new Error("slideController: No such slide sequence exists");
        }
    },
    // Create new audio instance
    _loadAudio: function(url) {
        var _this = this;
        if (typeof url !== "undefined" && url !== null) {
            if (this._audioInstance !== null) {
                createjs.Tween.get(this._audioInstance).to({
                    volume: 0
                }, 2500).call(function() {
                    _this._audioInstance.stop();
                    _this._initializeAudio(url);
                });
            }
            else {
                this._initializeAudio(url);
            }
        }
    },
    _initializeAudio: function(url) {
        createjs.Sound.removeSound(this._audioInstanceId);
        console.log(url);
        var _this = this;
        var soundId = "slideAudio" + this._audioInstanceCounter;
        this._audioInstanceId = soundId;
        var audioLoaded = function(event) {
            if (soundId === _this._audioInstanceId) {
                console.log(".play(): " + soundId);
                var instance = createjs.Sound.play(soundId);
                _this._audioInstance = instance;
                _this._audioInstance.volume = 0;
                if (_this.isSoundOn()) {
                    createjs.Tween.get(_this._audioInstance).to({
                        volume: 1
                    }, 1200).call(function() {

                    });
                }
            }
        };
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.on("fileload", audioLoaded, window);
        createjs.Sound.registerSound(url, soundId);
        console.log(".registerSound(): " + soundId);
        this._audioInstanceCounter++;
    },
    _playAudio: function() {
        this._print("_playAudio()");
        if (this.isSoundOn()) {
            this._audioInstance.volume = 1;
        }
        console.log(this._audioInstance.volume);
    },
    _stopAudio: function() {
        this._print("_stopAudio()");
        if (!this.isSoundOn()) {
            this._print("this._audioInstance.volume = 0;");
            this._audioInstance.volume = 0;
        }
        console.log(this._audioInstance.volume);
    }
};
