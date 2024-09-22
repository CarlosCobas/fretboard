import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "../../../node_modules/@mui/material/index";
import { notes } from "../utils/notes";

export default function RootNoteSelector({rootNote, onChangeRootNote}) {
    
    const options = notes.map(note =>  <MenuItem key={note} value={note}>{note}</MenuItem>)

    return (

        <div className="input-element">
            <FormControl fullWidth>
                <InputLabel id="root-note-selector-label">Elige la tónica</InputLabel>
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