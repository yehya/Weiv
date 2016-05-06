/* global $, slideController */

var notesManager = {
    _noteIndex: 0,
    saveNotes: function() {
        var note = $("#notes-text").val();
        slideController.saveNote(note);
        this._addNoteToView(note);
    },
    clear: function() {
        $("#notes-content").html("");
        this._reset();
    },
    _reset: function() {
        this._noteIndex = 0;
    },
    _addNoteToView: function(note) {
        var index = this._noteIndex;
        var X = "<span data-nId=\"" + index +
            "\" id=\"" + this._getDeleteId(index) +
            "\" style='color: red; float: right;'>X</span>";
        var html = "<span data-id='" + index +
            "' id='" + this._getElemId(index) + "'>" + note + X + "<br></span>";
        $("#notes-content").append(html);
        this._bindRemoveHandler(index);
        this._noteIndex++;
    },
    _removeNoteFromView: function(index) {
        var elemId = this._getElemId(index);
        $("#" + elemId).remove();
        slideController.removeNote(index);
    },
    _bindRemoveHandler: function(index) {
        var deletId = this._getDeleteId(index);
        var _index = index;
        var _this = this;
        $("#" + deletId).click(function() {
            _this._removeNoteFromView(_index);
        });
    },
    _getElemId: function(index) {
        return "note-instance-" + index;
    },
    _getDeleteId: function(index) {
        return "note-delete-" + index;
    }
};