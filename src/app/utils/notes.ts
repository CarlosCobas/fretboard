export const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

export const orderNotesOnRoot = (rootNote: string) => {
    const index = notes.indexOf(rootNote);
    const notesFromRoot = notes.slice(index);
    const restOfNotes = notes.slice(0, index);
    return notesFromRoot.concat(restOfNotes);
}

export const generateMajorScale = (rootNote : string) => {
    
    const orderedNotes = orderNotesOnRoot(rootNote);
    return [
        orderedNotes[0],
        orderedNotes[2],
        orderedNotes[4],
        orderedNotes[5],
        orderedNotes[7],
        orderedNotes[9],
        orderedNotes[11],
    ];
    
} 