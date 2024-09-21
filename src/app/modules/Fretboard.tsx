import Fret from './Fret'

export default function Fretboard({notes} : {notes:Array<string>}) {

    const totalFrets = 22;
    const standardTuning = ['E', 'A', 'D', 'G', 'B', 'E'];

    const generateFretNotes = (fretIndex: number) => 
        standardTuning.map(note => {
            const noteIndex = notes.indexOf(note);
            return notes[(noteIndex + fretIndex) % notes.length]
        });

    // const frets = Array(21).fill(<Fret validNotes={standardTuning}/>)
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
            <div className="fretboard">
                {generateFrets()}
            </div>
        </section>
    );
}