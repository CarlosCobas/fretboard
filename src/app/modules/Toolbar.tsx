import { ChangeEventHandler } from 'react';
import ModalitySelector from './ModalitySelector';
import RootNoteSelector from './RootNoteSelector'

export default function Toolbar({onChangeRootNote, onChangeModality} : {onChangeRootNote:ChangeEventHandler<HTMLSelectElement>, onChangeModality: ChangeEventHandler<HTMLSelectElement>}) {

    return (
        <section className="toolbar-holder">
            <RootNoteSelector onChangeRootNote={onChangeRootNote}/>
            <ModalitySelector onChangeModality={onChangeModality}/>
        </section>
    );

}