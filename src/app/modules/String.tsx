import { notes } from "../utils/notes";
import { useContext } from 'react';
import { RootNoteContext } from "../contexts/RootNoteContext"

export default function String({note} : {note:string}) {


    const rootNote = useContext(RootNoteContext);


    const rearrangeArray = (rootNote: string) => {
        const index = notes.indexOf(rootNote);
        const notesFromRoot = notes.slice(index);
        const restOfNotes = notes.slice(0, index);
        return notesFromRoot.concat(restOfNotes);
    }

    const calculateInterval = (currentNote: string, rootNote: string)  => {
        const notesWithRootAtStart = rearrangeArray(rootNote);
        const currentNoteIndex = notesWithRootAtStart.indexOf(currentNote);
        const validClasses = [
            'root',
            'b_second',
            'second',
            'b_third',
            'third',
            'fourth',
            'b_fifth',
            'fifth',
            'b_sixth',
            'sixth',
            'b_seventh',
            'seventh',
        ];
        return validClasses[currentNoteIndex];
    }

    


    return (
        <div className="string">
            <span className={`note-value ${calculateInterval(note, rootNote)}`}>{note}</span>
        </div>
    );
}