import Fret from './Fret'

export default function Fretboard() {

    const frets = Array(21).fill(<Fret/>)


    return(
        <section className="fretboard-section">
            <div className="fretboard">
                {frets}
            </div>
        </section>
    );
}