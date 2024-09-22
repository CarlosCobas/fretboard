"use client";

import Fretboard from "./modules/Fretboard";
import Toolbar from "./modules/Toolbar";
import ModesTable from "./modules/ModesTable"
import { notes } from "./utils/notes";
import { SetStateAction, useState } from "react";
import { modalities } from "./utils/modalities";


export default function Home() {

  const [rootNote, setRootNote] = useState(notes[0]);
  const [modality, setModality] = useState(modalities[0].value);

  const onChangeRootNote = (e: { target: { value: SetStateAction<string>; }; }) => {
    setRootNote(e.target.value)
  }

  const onChangeModality = (e: { target: { value: SetStateAction<string>; }; }) => {
    setModality(e.target.value)
  }

  return (
    <main>
      <Toolbar rootNote={rootNote} modality={modality} onChangeRootNote={onChangeRootNote} onChangeModality={onChangeModality}/>      
      <Fretboard rootNote={rootNote} modality={modality}/>
      <ModesTable rootNote={rootNote}/>
    </main>
  );
}
