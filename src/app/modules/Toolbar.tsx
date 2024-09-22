import { ChangeEventHandler } from 'react';
import ModalitySelector from './ModalitySelector';
import RootNoteSelector from './RootNoteSelector'

export default function Toolbar({rootNote, modality, onChangeRootNote, onChangeModality} : {rootNote:string, modality:string, onChangeRootNote:ChangeEventHandler<HTMLSelectElement>, onChangeModality: ChangeEventHandler<HTMLSelectElement>}) {

    return (
        <section className="toolbar-holder">
            <div className="toolbar-flex">
                <RootNoteSelector rootNote={rootNote} onChangeRootNote={onChangeRootNote}/>
                <ModalitySelector modality={modality} onChangeModality={onChangeModality}/>
            </div>
        </section>
    );

}