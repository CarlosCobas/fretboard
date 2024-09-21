import React from "react";

export default function RootNoteSelector({notes} : {notes:Array<string>}) {

    const options = notes.map(note => <option key={note} value={note}>{note}</option>)

    return (
        <div className="input-element">
            <label htmlFor="root-note-selector">Select Root Note</label>
            <select name="root-note-selector" id="root-note-selector">{options}</select>
        </div>
    );

}