/* global slideController */

// Find the other one BELOW
var demoSlide = {
    id: "1",
    title: "Intro to JavaScript",
    course: "CMPSC421",
    instructor: "Xiacong Fan",
    theme: {
        background: "#fff",
        color: "#000"
    },
    slides: [{
        id: "1",
        Sequence: 1,
        audioUrl: "/slides/audio/inspirio.mp3",
        entities: [{
            id: "1",
            type: "h1",
            color: "#0098c6",
            location: {
                top: 15,
                left: 10
            },
            content: "What is Wiev?",
            animation: "fade-in"
        }, {
            id: "2",
            type: "p",
            size: 80,
            location: {
                top: 40,
                left: 25
            },
            content: "A Slide Viewer",
            animation: "slide-in"
        }]
    }, {
        id: "2",
        Sequence: 2,
        audioUrl: "/slides/audio/inspirio.mp3",
        entities: [{
            id: "1",
            type: "h1",
            color: "#2d9300",
            location: {
                top: 15,
                left: 10
            },
            content: "What can it do?",
            animation: "fade-in"
        }, {
            id: "2",
            type: "p",
            size: 65,
            location: {
                top: 40,
                left: 15
            },
            content: "Very limited things...",
            animation: "slide-in"
        }]
    }, {
        id: "3",
        Sequence: 3,
        audioUrl: "/slides/audio/inspirio.mp3",
        entities: [{
            id: "1",
            type: "h1",
            color: "#ff3300",
            location: {
                top: 15,
                left: 10
            },
            content: "Image support?",
            animation: "slide-in"
        }, {
            id: "2",
            type: "p",
            size: 85,
            location: {
                top: 40,
                left: 25
            },
            content: "...",
            animation: "drop-in"
        }, {
            id: "3",
            type: "img",
            height: 60,
            location: {
                top: 30,
                left: 10
            },
            content: "/slides/images/fan.jpg",
            animation: "drop-in"
        }]
    }, {
        id: "4",
        Sequence: 4,
        audioUrl: "/slides/audio/inspirio.mp3",
        entities: [{
            id: "1",
            type: "img",
            height: 300,
            location: {
                top: 0,
                left: 0
            },
            content: "/slides/images/bg.jpg",
            animation: "drop-in"
        }, {
            id: "2",
            type: "h1",
            color: "#000000",
            size: 80,
            location: {
                top: 40,
                left: 40
            },
            content: "Backgrounds.",
            animation: "fade-in"
        }]
    }, {
        id: "5",
        Sequence: 5,
        audioUrl: "/slides/audio/inspirio.mp3",
        entities: [{
            id: "1",
            type: "h1",
            color: "#0098c6",
            location: {
                top: 15,
                left: 10
            },
            content: "Unlimited Animations",
            animation: "fade-in"
        }, {
            id: "2",
            type: "p",
            color: "#000000",
            size: 45,
            location: {
                top: 30,
                left: 10
            },
            content: "As long as they are:",
            animation: "pop-in"
        }, {
            id: "3",
            type: "p",
            color: "#000000",
            size: 35,
            location: {
                top: 45,
                left: 20
            },
            content: "- Slide-in",
            animation: "slide-in"
        }, {
            id: "4",
            type: "p",
            color: "#000000",
            size: 35,
            location: {
                top: 55,
                left: 20
            },
            content: "- Drop-in",
            animation: "drop-in"
        }, {
            id: "5",
            type: "p",
            color: "#000000",
            size: 35,
            location: {
                top: 65,
                left: 20
            },
            content: "- Fade-in",
            animation: "fade-in"
        }]
    }]
};

slideController.loadLecture(demoSlide);

// var lecture = {
//     id: "1",
//     title: "Intro to JavaScript",
//     course: "CMPSC421",
//     instructor: "Xiacong Fan",
//     theme: {
//         background: "#444",
//         color: "#fff"
//     },
//     slides: [{
//             id: "1",
//             Sequence: 1,
//             audioUrl: "/slides/audio/inspirio.mp3",
//             entities: [{
//                 id: "1",
//                 type: "h1",
//                 color: "#00b8e6",
//                 location: {
//                     top: 15,
//                     left: 10
//                 },
//                 content: "EventSource: Chat Client!",
//                 animation: "fade-in"
//             }, {
//                 id: "2",
//                 type: "p",
//                 location: {
//                     top: 25,
//                     left: 10
//                 },
//                 content: "In a Web Browser, when a client requests the root URL \" / \", the server sends the chatclient.html",
//                 animation: "slide-in"
//             }, {
//                 id: "3",
//                 type: "p",
//                 location: {
//                     top: 40,
//                     left: 10
//                 },
//                 content: "When creating an EventSource object, a client makes a GET request for the URL \" / chat \". Once the server receives such a request, it saves the response stream in an array and keeps that connection open.",
//                 animation: "bounce-in"
//             }, {
//                 id: "4",
//                 type: "p",
//                 location: {
//                     top: 60,
//                     left: 10
//                 },
//                 content: "When a client makes a POST request to \" / chat \", it uses the body of the request as a chat message, which is prefixed with the Server-Sent Events ",
//                 data: " prefix, and written to all the open response streams.",
//                 animation: "slide-in"
//             }, {
//                 id: "5",
//                 type: "img",
//                 height: 25,
//                 location: {
//                     top: 75,
//                     left: 25
//                 },
//                 content: "/slides/images/slidepic1.PNG",
//                 animation: "slide-in"
//             }]
//         }, {
//             id: "2",
//             Sequence: 2,
//             audioUrl: "/slides/audio/inspirio.mp3",
//             entities: [{
//                 id: "1",
//                 type: "h1",
//                 color: "#2db300",
//                 location: {
//                     top: 15,
//                     left: 10
//                 },
//                 content: "Getting and Setting CSS Attributes",
//                 animation: "fade-in"
//             }, {
//                 id: "2",
//                 type: "img",
//                 height: 75,
//                 location: {
//                     top: 25,
//                     left: 10
//                 },
//                 content: "/slides/images/slidepic2.PNG",
//                 animation: "drop-in"
//             }]
//         }, {
//             id: "3",
//             Sequence: 3,
//             audioUrl: "/slides/audio/inspirio.mp3",
//             entities: [{
//                 id: "1",
//                 type: "h1",
//                 color: "#ff3300",
//                 location: {
//                     top: 15,
//                     left: 10
//                 },
//                 content: "Getting and Setting CSS Classes",
//                 animation: "slide-in"
//             }, {
//                 id: "2",
//                 type: "p",
//                 location: {
//                     top: 25,
//                     left: 5
//                 },
//                 content: "addClass() and removeClass() add and remove classes from the selected elements.",
//                 animation: "slide-in"
//             }, {
//                 id: "3",
//                 type: "p",
//                 location: {
//                     top: 35,
//                     left: 5
//                 },
//                 content: "addClass() and removeClass() add and remove classes from the selected elements.",
//                 animation: "slide-in"
//             }, {
//                 id: "4",
//                 type: "p",
//                 location: {
//                     top: 45,
//                     left: 5
//                 },
//                 content: "toggleClass() adds classes to elements that don’t already have them and removes classes from those that do.",
//                 animation: "slide-in"
//             }, {
//                 id: "5",
//                 type: "p",
//                 location: {
//                     top: 55,
//                     left: 5
//                 },
//                 content: "hasClass() tests for the presence of a specified class.",
//                 animation: "fade-in"
//             }, {
//                 id: "6",
//                 type: "img",
//                 height: 40,
//                 location: {
//                     top: 60,
//                     left: 15
//                 },
//                 content: "/slides/images/slidepic3.PNG",
//                 animation: "drop-in"
//             }]
//         }, {
//             id: "4",
//             Sequence: 4,
//             audioUrl: "/slides/audio/inspirio.mp3",
//             entities: [{
//                 id: "1",
//                 type: "h1",
//                 color: "#009999",
//                 location: {
//                     top: 15,
//                     left: 10
//                 },
//                 content: "Getting and Setting",
//                 animation: "fade-in"
//             }, {
//                 id: "2",
//                 type: "p",
//                 location: {
//                     top: 25,
//                     left: 5
//                 },
//                 content: "addClass() and removeClass() add and remove classes from the selected elements.",
//                 animation: "fade-in"
//             }, {
//                 id: "3",
//                 type: "p",
//                 location: {
//                     top: 35,
//                     left: 5
//                 },
//                 content: "addClass() and removeClass() add and remove classes from the selected elements.",
//                 animation: "fade-in"
//             }, {
//                 id: "4",
//                 type: "p",
//                 location: {
//                     top: 45,
//                     left: 5
//                 },
//                 content: "toggleClass() adds classes to elements that don’t already have them and removes classes from those that do.",
//                 animation: "fade-in"
//             }, {
//                 id: "5",
//                 type: "p",
//                 location: {
//                     top: 55,
//                     left: 5
//                 },
//                 content: "hasClass() tests for the presence of a specified class.",
//                 animation: "fade-in"
//             }, {
//                 id: "6",
//                 type: "img",
//                 height: 40,
//                 location: {
//                     top: 60,
//                     left: 25
//                 },
//                 content: "/slides/images/slidepic4.PNG",
//                 animation: "drop-in"
//             }]
//         }, {
//             id: "5",
//             Sequence: 5,
//             audioUrl: "/slides/audio/inspirio.mp3",
//             entities: [{
//                 id: "1",
//                 type: "h1",
//                 color: "#e60000",
//                 location: {
//                     top: 15,
//                     left: 10
//                 },
//                 content: "The HttpServelet API",
//                 animation: "fade-in"
//             }, {
//                 id: "2",
//                 type: "img",
//                 height: 80,
//                 location: {
//                     top: 20,
//                     left: 10
//                 },
//                 content: "/slides/images/slidepic5.PNG",
//                 animation: "drop-in"
//             }]

//         }]
// };