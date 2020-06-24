import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNotes] = useState([]);
  
  function addNote(note) {
    setNotes(prevState => {
      // let uniId = prevState.length + 1;
      // let copyNote = {...note, ["id"]: uniId};
      return [...prevState, note];
    });
  }

  function deleteNote(id) {
    setNotes(prevState => {
      return prevState.filter((note, index) => index !== id);
    });
  }

  // console.log(notes);
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          id={index}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
