import React, { ChangeEventHandler } from "react";
import { notes } from "../utils/notes";

export default function RootNoteSelector({onChangeRootNote} : { onChangeRootNote:ChangeEventHandler<HTMLSelectElement>}) {

    const options = notes.map(note => <option key={note} value={note}>{note}</option>)

    return (
        <div className="input-element">
            <label htmlFor="root-note-selector">Select Root Note</label>
            <select name="root-note-selector" id="root-note-selector" onChange={onChangeRootNote} defaultValue={notes[0]}>{options}</select>
        </div>
    );

}