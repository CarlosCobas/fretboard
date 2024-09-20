import String from './String'

export default function Fret() {

    const strings = Array(6).fill(<String/>)

    return (
        <div className="fret">
            {strings}
        </div>
    );
}