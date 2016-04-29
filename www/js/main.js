/* global slideController */

var test_lecture = {
    id: "1",
    title: "Intro to JavaScript",
    course: "CMPSC421",
    instructor: "Xiacong Fan",
    theme: {
        background: "#444",
        color: "#fff"
    },
    slides: [{
            id: "1",
            Sequence: 1,
            audioUrl: "http://mp3-skulls.net/music/temp320/Low_Life(feat._The_Weeknd)_(www.Mp3Skulls.info).mp3",
            entities: [{
                id: "1",
                type: "h1",
                location: {
                    top: 15,
                    left: 10
                },
                content: "EventSource: Chat Client!",
                animation: "fade-in"
            }, {
                id: "2",
                type: "p",
                location: {
                    top: 25,
                    left: 10
                },
                content: "In a Web Browser, when a client requests the root URL \" / \", the server sends the chatclient.html",
                animation: "slide-in"
            }, {
                id: "3",
                type: "p",
                location: {
                    top: 40,
                    left: 10
                },
                content: "When creating an EventSource object, a client makes a GET request for the URL \" / chat \". Once the server receives such a request, it saves the response stream in an array and keeps that connection open.",
                animation: "bounce-in"
            }, {
                id: "4",
                type: "p",
                location: {
                    top: 60,
                    left: 10
                },
                content: "When a client makes a POST request to \" / chat \", it uses the body of the request as a chat message, which is prefixed with the Server-Sent Events ",
                data: " prefix, and written to all the open response streams.",
                animation: "slide-in"
            }, {
                id: "5",
                type: "img",
                height: 25,
                location: {
                    top: 75,
                    left: 25
                },
                content: "/slides/images/slidepic1.PNG",
                animation: "slide-in"
            }]
        }, {
            id: "2",
            Sequence: 2,
            audioUrl: "http://mp3-skulls.net/music/temp320/Low_Life(feat._The_Weeknd)_(www.Mp3Skulls.info).mp3",
            entities: [{
                id: "1",
                type: "h1",
                location: {
                    top: 5,
                    left: 50
                },
                content: "Getting and Setting CSS Attributes",
                animation: "fade-in"
            }, {
                id: "2",
                type: "img",
                height: 25,
                location: {
                    top: 75,
                    left: 0
                },
                content: "/slides/images/slidepic2.PNG",
                animation: "drop-in"
            }]
        }, {
            id: "3",
            Sequence: 3,
            audioUrl: "http://mp3-skulls.net/music/temp320/Low_Life(feat._The_Weeknd)_(www.Mp3Skulls.info).mp3",
            entities: [{
                id: "1",
                type: "h1",
                location: {
                    top: 5,
                    left: 50
                },
                content: "Getting and Setting CSS Classes",
                animation: "slide-in"
            }, {
                id: "2",
                type: "p",
                location: {
                    top: 15,
                    left: 10
                },
                content: "addClass() and removeClass() add and remove classes from the selected elements.",
                animation: "slide-in"
            }, {
                id: "3",
                type: "img",
                height: 25,
                location: {
                    top: 75,
                    left: 0
                },
                content: "/slides/images/slidepic3.PNG",
                animation: "drop-in"
            }, {
                id: "4",
                type: "p",
                location: {
                    top: 25,
                    left: 10
                },
                content: "addClass() and removeClass() add and remove classes from the selected elements.",
                animation: "slide-in"
            }, {
                id: "5",
                type: "p",
                location: {
                    top: 35,
                    left: 10
                },
                content: "toggleClass() adds classes to elements that don’t already have them and removes classes from those that do.",
                animation: "slide-in"
            }, {
                id: "6",
                type: "p",
                location: {
                    top: 45,
                    left: 10
                },
                content: "hasClass() tests for the presence of a specified class.",
                animation: "fade-in"
            }]
        }, {
            id: "4",
            Sequence: 4,
            audioUrl: "http://mp3-skulls.net/music/temp320/Low_Life(feat._The_Weeknd)_(www.Mp3Skulls.info).mp3",
            entities: [{
                id: "1",
                type: "h1",
                location: {
                    top: 5,
                    left: 50
                },
                content: "Getting and Setting",
                animation: "fade-in"
            }, {
                id: "2",
                type: "p",
                location: {
                    top: 15,
                    left: 10
                },
                content: "addClass() and removeClass() add and remove classes from the selected elements.",
                animation: "fade-in"
            }, {
                id: "3",
                type: "img",
                height: 30,
                location: {
                    top: 10,
                    left: 0
                },
                content: "/slides/images/slidepic4.PNG",
                animation: "drop-in"
            }, {
                id: "4",
                type: "p",
                location: {
                    top: 25,
                    left: 10
                },
                content: "addClass() and removeClass() add and remove classes from the selected elements.",
                animation: "fade-in"
            }, {
                id: "5",
                type: "p",
                location: {
                    top: 35,
                    left: 10
                },
                content: "toggleClass() adds classes to elements that don’t already have them and removes classes from those that do.",
                animation: "fade-in"
            }, {
                id: "6",
                type: "p",
                location: {
                    top: 45,
                    left: 10
                },
                content: "hasClass() tests for the presence of a specified class.",
                animation: "fade-in"
            }]
        }, {
            id: "5",
            Sequence: 5,
            audioUrl: "http://mp3-skulls.net/music/temp320/Low_Life(feat._The_Weeknd)_(www.Mp3Skulls.info).mp3",
            entities: [{
                id: "1",
                type: "h1",
                location: {
                    top: 5,
                    left: 50
                },
                content: "The HttpServelet API",
                animation: "fade-in"
            }, {
                id: "2",
                type: "img",
                height: 25,
                location: {
                    top: 75,
                    left: 0
                },
                content: "/slides/images/slidepic5.PNG",
                animation: "drop-in"
            }]

        }]
};

slideController.loadLecture(test_lecture);