"use client";

import Fretboard from "./modules/Fretboard";
import Toolbar from "./modules/Toolbar";
import ModesTable from "./modules/ModesTable"
import { notes } from "./utils/notes";
import { useState } from "react";
import { modalities } from "./utils/modalities";


export default function Home() {

  const [rootNote, setRootNote] = useState(notes[0]);
  const [modality, setModality] = useState(modalities[0].value);

  const onChangeRootNote = (e) => {
    setRootNote(e.target.value)
  }

  const onChangeModality = (e) => {
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
