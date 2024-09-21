"use client";

import Fretboard from "./modules/Fretboard";
import Toolbar from "./modules/Toolbar";
import { notes } from "./utils/notes";
import { SetStateAction, useState } from "react";


export default function Home() {

  const [rootNote, setRootNote] = useState(notes[0]);

  const onChangeRootNote = (e: { target: { value: SetStateAction<string>; }; }) => {
    setRootNote(e.target.value)
  }

  return (
    <main>
      <Toolbar onChangeRootNote={onChangeRootNote}/>      
      <Fretboard rootNote={rootNote}/>
    </main>
  );
}
