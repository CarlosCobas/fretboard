import React from "react";
import { modalities } from "../utils/modalities";

export default function Modalityslector() {

    const options = modalities.map(modality => <option key={modality} value={modality}>{modality}</option>)

    return (
        <div className="input-element">
            <label htmlFor="modality-selector">Select Modality</label>
            <select name="modality-selector" id="modality-selector">{options}</select>
        </div>
    );
}