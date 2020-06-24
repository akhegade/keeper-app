import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
// import Note from "./Note";
function CreateArea(props) {
  const {onAdd} = props;
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpand, setExpand] = useState(false);

  function expand(params) {
    setExpand(true);
  }

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
      <form className="create-note">
        {isExpand ? (
          <input
            type="text"
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={handleChange}
          />
        ) : null}
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpand}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
