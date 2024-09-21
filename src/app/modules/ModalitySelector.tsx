import React, { ChangeEventHandler } from "react";
import { modalities } from "../utils/modalities";

export default function Modalityslector({onChangeModality} : { onChangeModality:ChangeEventHandler<HTMLSelectElement>}) {

    const options = modalities.map(modality => <option key={modality.value} value={modality.value}>{modality.label}</option>)

    return (
        <div className="input-element">
            <label htmlFor="modality-selector">Select Modality</label>
            <select name="modality-selector" id="modality-selector" onChange={onChangeModality} defaultValue={modalities[0].value}>{options}</select>
        </div>
    );
}