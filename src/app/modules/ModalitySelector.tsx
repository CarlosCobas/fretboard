import React from "react";

export default function Modalityslector() {

    const modalities = [
        'Show all notes',
        'Modes',
        'Arpegios',
        'Pentatonic Scale',
    ]; 

    const options = modalities.map(modality => <option key={modality} value={modality}>{modality}</option>)

    return (
        <div className="input-element">
            <label htmlFor="modality-selector">Select Modality</label>
            <select name="modality-selector" id="modality-selector">{options}</select>
        </div>
    );
}