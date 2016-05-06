/* global $, slideController */

var notesManager = {
    saveNotes: function() {
        var date = new Date();
        var uniqueId = date.getTime();
        var note = $("#notes-text").val();
        slideController.saveNote(note, uniqueId.toString());
        this._addNoteToView(note, uniqueId.toString());
    },
    displayNote: function(note, id) {
        this._addNoteToView(note, id);
    },
    clear: function() {
        this._print("clear()");
        $("#notes-content").html("");
    },
    _addNoteToView: function(note, id) {
        var X = "<span data-nId=\"" + id +
            "\" id=\"" + this._getDeleteId(id) +
            "\" style='color: red; float: right;'>X</span>";
        var html = "<span data-id='" + id +
            "' id='" + this._getElemId(id) + "'>" + note + X + "<br></span>";
        $("#notes-content").append(html);
        this._bindRemoveHandler(id);
    },
    _removeNoteFromView: function(id) {
        var elemId = this._getElemId(id);
        $("#" + elemId).remove();
        slideController.removeNote(id);
    },
    _bindRemoveHandler: function(id) {
        var deletId = this._getDeleteId(id);
        var _id = id;
        var _this = this;
        $("#" + deletId).click(function() {
            _this._removeNoteFromView(_id);
            slideController.removeNote(_id);
        });
    },
    _getElemId: function(id) {
        return "note-instance-" + id;
    },
    _getDeleteId: function(id) {
        return "note-delete-" + id;
    },
    _print: function(msg) {
        console.log("notesManager: " + msg);
    }
};