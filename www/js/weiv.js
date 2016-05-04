/* global $ */
// $(document).ready(function() {
//     var pageElms = {
//         noteArea: $("#notes-text"),
//         saveButton: $("#slide-container > div.row.notes-container > div > div:nth-child(3) > input"),
//         loadButton: $("body > div > div.two.columns.control-area > div:nth-child(7) > p"),
//         noteDisplay: $("#notes-content")
//     };

//     pageElms.saveButton.click(function() {
//         var lecture = {};
//         lecture.notes = pageElms.noteArea.val();
//         $.ajax({
//             type: "POST",
//             url: "/saveNotes",
//             data: lecture,
//             success: function(req) {
//                 console.log(req);
//             },
//             dataType: "json"
//         });
//     });

//     pageElms.loadButton.click(function() {
//         $.get("/loadNotes", function(lecture) {
//             var lec = JSON.parse(lecture);
//             pageElms.noteDisplay.text(lec.notes);
//             console.log(lecture);
//         });
//     });


// });