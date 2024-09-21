import { notes } from "../utils/notes";
import { useContext } from 'react';
import { RootNoteContextObject } from "../contexts/RootNoteContext"
import { intervals } from "../utils/intervals";
import { valid_intervals } from "../utils/modalities";

export default function String({note} : {note:string}) {

    const stateData = useContext(RootNoteContextObject);

    const rearrangeArray = (rootNote: string) => {
        const index = notes.indexOf(rootNote);
        const notesFromRoot = notes.slice(index);
        const restOfNotes = notes.slice(0, index);
        return notesFromRoot.concat(restOfNotes);
    }

    const calculateInterval = (currentNote: string, rootNote: string)  => {
        const notesWithRootAtStart = rearrangeArray(rootNote);
        const currentNoteIndex = notesWithRootAtStart.indexOf(currentNote);
        return intervals[currentNoteIndex];
    }
    
    const currentInterval = calculateInterval(note, stateData.rootNote);

    // if(stateData.modality.valid_intervals.includes(currentInterval)) {
    if(valid_intervals[stateData.modality as keyof typeof valid_intervals].includes(currentInterval)) {
        return (
            <div className="string">
                <span className={`note-value ${currentInterval}`}>{note}</span>
            </div>
        );
    } else {
        return (
            <div className="string">
            </div>
        );
    }
    
}