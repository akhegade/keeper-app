import React, {useState} from "react";
// import Note from "./Note";
function CreateArea(props) {
  const {onAdd} = props;
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    onAdd(note);
    setNote({title: "", content: ""});
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3" 
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
