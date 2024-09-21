import Fretboard from "./modules/Fretboard";
import Toolbar from "./modules/Toolbar";

export default function Home() {

  const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];



  return (
    <main>
      <Toolbar notes={notes}/>
      <Fretboard notes={notes}/>
    </main>
  );
}
