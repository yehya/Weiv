/* global $, jQuery, createjs */

var slideLoader = {
    _stage: null,
    _width: null,
    _height: null,
    _bg: null,
    _entities: [],
    _textFields: [],
    _displayObjects: [],
    _theme: {
        background: "#444",
        color: "#ffffff"
    },
    init: function() {
        this._print("init()");
        this._stage = new createjs.Stage("slide-canvas");
        this._width = document.getElementById("slide-canvas").width;
        this._height = document.getElementById("slide-canvas").height;
        this.setBackground(this._theme.background);
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", this._stage);
    },
    setBackground: function(color) {
        this._print("setBackground()");
        if (this._bg !== null) {
            this._bg.graphics.beginFill(color).drawRect(0, 0, this._width, this._height);
            return;
        }
        this._bg = new createjs.Shape();
        this._bg.graphics.beginFill(color).drawRect(0, 0, this._width, this._height);
        this._stage.addChild(this._bg);
    },
    setColor: function(color) {
        this._print("setColor()");
        for (var i = 0; i < this._textFields.length; i += 1) {
            this._textFields[i].color = color;
        }
    },
    clear: function() {
        this._print("clear()");
        // Remove all display objects from stage
        for (var i = 0; i < this._displayObjects.length; i += 1) {
            var dispObj = this._displayObjects[i];
            this._stage.removeChild(dispObj);
        }
        // Clear arrays
        this._textFields = [];
        this._displayObjects = [];
        this._entities = [];
        // Re-set theme
        this.setTheme(this._theme);
    },
    setTheme: function(theme) {
        this._print("setTheme()");
        this._theme = theme;
        this.setBackground(theme.background);
        this.setColor(theme.color);
    },
    addEntity: function(entity) {
        this._print("addEntity()");
        if (entity.type === "img") {
            this._addImage(entity);
        }
        else {
            if (entity.type === "p") {
                this._addText(entity, 30);
            }
            else if (entity.type === "h1") {
                this._addText(entity, 55);
            }
        }
        this._entities.push(entity);
    },
    removeEntity: function(entity) {
        this._print("removeEntity()");
        this._stage.removeChild(entity.displayObject);
        // get index
        var indx = this._displayObjects.indexOf(entity.displayObject);
        // remove from array using indx
        this._displayObjects.splice(indx, 1);
        // get index if text
        indx = this._textFields.indexOf(entity.displayObject);
        if (indx > -1) {
            this._textFields.splice(indx, 1);
        }
    },
    _addText: function(entity, size) {
        if (typeof entity.size !== "undefined" && !isNaN(entity.size)) {
            size = entity.size;
        }
        this._print("_addText()");
        // Create text
        var text = new createjs.Text(entity.content, size + "px Raleway", this._theme.color);
        // Bind Easel Display Object to entity
        entity.displayObject = text;
        // Set location
        text.x = this._width * (entity.location.left / 100);
        text.y = this._height * (entity.location.top / 100);
        // Set config such as line width (for wrapping)
        text.textBaseline = "alphabetic";
        text.lineWidth = this._width - text.x - this._width * 0.05;
        // Add to stage and Array
        this._stage.addChild(text);
        this._textFields.push(text);
        // Add as display object aswell
        this._displayObjects.push(text);
        // Animate
        this._animate(entity.animation, text);
        // Check for color
        if (typeof entity.color !== "undefined" && entity.color !== null) {
            text.color = entity.color;
        }
    },
    _animate: function(animation, displayObject) {
        this._print("_animate()");
        if (animation === "fade-in") {
            this._fadeIn(displayObject);
        }
        else if (animation === "fade-out") {
            this._fadeOut(displayObject);
        }
        else if (animation === "slide-in") {
            this._slideIn(displayObject);
        }
        else if (animation === "pop-in") {
            this._popIn(displayObject);
        }
        else if (animation === "drop-in") {
            this._dropIn(displayObject);
        }
    },
    _fadeIn: function(displayObject) {
        displayObject.alpha = 0;
        createjs.Tween.get(displayObject).to({
            alpha: 1
        }, 2500).call(function() {});
    },
    _slideIn: function(displayObject) {
        var prevX = displayObject.x;
        displayObject.x = -this._width;
        createjs.Tween.get(displayObject).to({
            x: prevX
        }, 1000, createjs.Ease.cubicOut).call(function() {});
    },
    _popIn: function(displayObject) {
        displayObject.alpha = 0;
        createjs.Tween.get(displayObject).to({
            alpha: 1
        }, 10).call(function() {});
    },
    _dropIn: function(displayObject) {
        var prevX = displayObject.y;
        displayObject.y = -this._height;
        createjs.Tween.get(displayObject).to({
            y: prevX
        }, 1000, createjs.Ease.bounceOut).call(function() {});
    },
    _addImage: function(entity) {
        this._print("_addImage()");
        var _this = this;
        var onImageLoad = function(event) {
            var original = event.result;
            setTimeout(function() {
                var image = new createjs.Bitmap(original);
                // Bind Easel Display Object to entity
                entity.displayObject = image;
                // Get image original size
                var height = original.naturalHeight;
                var width = original.naturalWidth;
                console.log(height);
                console.log(width);
                // Calculate target size
                var targetHeight = _this._height * (entity.height / 100);
                // Calculate scale factor
                var scale = targetHeight / height;
                // Set new scales
                image.scaleX = scale;
                image.scaleY = scale;
                // Init x & y
                image.x = 0;
                image.y = 0;
                // Add to stage and Array
                _this._stage.addChild(image);
                // Add as display object aswell
                _this._displayObjects.push(image);
                // Set location
                image.x = _this._width * (entity.location.left / 100);
                image.y = _this._height * (entity.location.top / 100);
                _this._animate(entity.animation, image);
            }, 100);
        }
        var preloadImage = new createjs.LoadQueue();
        preloadImage.addEventListener("fileload", onImageLoad);
        preloadImage.loadFile(entity.content);
    },
    _print: function(msg) {
        console.log("slide-loader: " + msg);
    }
};

// slideLoader.init();

/// TESTING

// slideLoader.setTheme({
//     background: "#444",
//     color: "#0BD"
// });

var slideEntities = [{
    id: "1",
    type: "h1",
    location: {
        top: 10,
        left: 5
    },
    content: "EventSource: Chat Client!",
    animation: "fade-in",
    color: "#fff"
}, {
    id: "2",
    type: "p",
    location: {
        top: 30,
        left: 5
    },
    content: "In a Web Browser, when a client requests the root URL ' / ' , the server sends the chatclient.html",
    animation: "slide-in"
}, {
    id: "3",
    type: "p",
    location: {
        top: 45,
        left: 5
    },
    content: "When creating an EventSource object, a client makes a GET request for the URL  ' / chat ' . Once the server receives such a request, it saves the response stream in an array and keeps that connection open.",
    animation: "drop-in"
}, {
    id: "4",
    type: "p",
    location: {
        top: 65,
        left: 5
    },
    content: "When a client makes a POST request to ' / chat ', it uses the body of the request as a chat message, which is prefixed with the Server-Sent Events ",
    data: " prefix, and written to all the open response streams.",
    animation: "slide-in"
}, {
    id: "5",
    type: "img",
    height: 25,
    location: {
        top: 75,
        left: 10
    },
    content: "/slides/images/slidepic1.PNG",
    animation: "slide-in"
}];

// $.each(slideEntities, function(indx, val) {
//     slideLoader.addEntity(val);
// });