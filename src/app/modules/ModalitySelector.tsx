import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "../../../node_modules/@mui/material/index";
import { modalities } from "../utils/modalities";

export default function Modalityslector({modality, onChangeModality}) {

    // const options = modalities.map(modality => <option key={modality.value} value={modality.value}>{modality.label}</option>)
    const options = modalities.map(modality =>  <MenuItem key={modality.value} value={modality.value}>{modality.label}</MenuItem>)

    return (

        <div className="input-element">
            <FormControl fullWidth>
                <InputLabel id="modality-selector-label">Elige una modalidad</InputLabel>
                <Select
                    labelId="modality-selector-label"
                    id="modality-selector"
                    value={modality}
                    label="Modality"
                    onChange={onChangeModality}
                >
                    {options}
                </Select>
            </FormControl>
        </div>
       
       // <div className="input-element">
        //     <label htmlFor="modality-selector">Select Modality</label>
        //     <select name="modality-selector" id="modality-selector" onChange={onChangeModality} defaultValue={modalities[0].value}>{options}</select>
        // </div>
    );


}