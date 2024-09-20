export default function String({note} : {note:string}) {
    return (
        <div className="string">
            <span className="note-value">{note}</span>
        </div>
    );
}