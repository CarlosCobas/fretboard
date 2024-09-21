import { ChangeEventHandler } from 'react';
import ModalitySelector from './ModalitySelector';
import RootNoteSelector from './RootNoteSelector'

export default function Toolbar({onChangeRootNote} : {onChangeRootNote:ChangeEventHandler<HTMLSelectElement>}) {

    return (
        <section className="toolbar-holder">
            <RootNoteSelector onChangeRootNote={onChangeRootNote}/>
            <ModalitySelector/>
        </section>
    );

}