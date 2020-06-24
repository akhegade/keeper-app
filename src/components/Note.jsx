import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
export default function Note(props) {
  const {id, title, content, onDelete} = props;
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}
