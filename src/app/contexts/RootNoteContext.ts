import { createContext } from 'react';
import { modalities } from '../utils/modalities';
import { notes } from '../utils/notes';
export const RootNoteContext = createContext('E');

const defaultData = {
    'rootNote': notes[0],
    'modality': modalities[0].value,
}

export const RootNoteContextObject = createContext(defaultData)