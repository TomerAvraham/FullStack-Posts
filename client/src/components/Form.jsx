import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Form({ handelAddButton }) {
  const [form, setForm] = useState({});

  return (
    <div className="form">
      <TextField
        onChange={(e) =>
          setForm((prevValue) => ({ ...prevValue, title: e.target.value }))}
        label="Title"
      />
      <TextField
        onChange={(e) =>
          setForm((prevValue) => ({ ...prevValue, description: e.target.value }))}
        label="Description"
      />
      <Button
        onClick={() => handelAddButton(form)}
        variant="contained"
        color="secondary"
      >
        Add
      </Button>
    </div>
  );
}

export default Form;
