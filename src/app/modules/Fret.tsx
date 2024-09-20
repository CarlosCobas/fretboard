import String from './String'

export default function Fret({validNotes, isFretZero} : {validNotes: Array<string>, isFretZero: boolean}) {


    const strings = validNotes.map(note => <String key={note} note={note}/>)


    if(isFretZero) {
        return (
            <div className="fret fret-zero">
                {strings}
            </div>
        );
    } else {
        return (
            <div className="fret">
                {strings}
            </div>
        );
    }
    
}