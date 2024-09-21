import Fret from './Fret'
import { RootNoteContext } from "../contexts/RootNoteContext"
import { notes } from "../utils/notes";

export default function Fretboard({rootNote} : {rootNote:string}) {

    const totalFrets = 22;
    const standardTuning = ['E', 'A', 'D', 'G', 'B', 'E'];

    const generateFretNotes = (fretIndex: number) => 
        standardTuning.map(note => {
            const noteIndex = notes.indexOf(note);
            return notes[(noteIndex + fretIndex) % notes.length]
        });

    const generateFrets = () => {
        const res = [];
        
        for (let index = 0; index < totalFrets; index++) {
            const validNotes = generateFretNotes(index);
            res.push(<Fret key={index} validNotes={validNotes} isFretZero={index == 0}/>)
        }

        return res;
    }


    return(
        <section className="fretboard-section">
            <RootNoteContext.Provider value={rootNote} >
                <div className="fretboard">
                    {generateFrets()}
                </div> 
            </RootNoteContext.Provider>
                
        </section>
    );
}