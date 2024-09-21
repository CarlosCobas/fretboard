import ModalitySelector from './ModalitySelector';
import RootNoteSelector from './RootNoteSelector'

export default function Toolbar({notes} : {notes:Array<string>}) {

    return (
        <section className="toolbar-holder">
            <RootNoteSelector notes={notes}/>
            <ModalitySelector/>
        </section>
    );

}