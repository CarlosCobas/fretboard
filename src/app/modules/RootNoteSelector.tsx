import React, { ChangeEventHandler } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "../../../node_modules/@mui/material/index";
import { notes } from "../utils/notes";

export default function RootNoteSelector({rootNote, onChangeRootNote} : { rootNote:string, onChangeRootNote:ChangeEventHandler<HTMLSelectElement>}) {
    
    const options = notes.map(note =>  <MenuItem key={note} value={note}>{note}</MenuItem>)

    return (

        <div className="input-element">
            <FormControl fullWidth>
                <InputLabel id="root-note-selector-label">Select Root Note</InputLabel>
                <Select
                    labelId="root-note-selector-label"
                    id="root-note-selector"
                    value={rootNote}
                    label="Root Note"
                    onChange={onChangeRootNote}
                >
                    {options}
                </Select>
            </FormControl>
        </div>

       
    );

}