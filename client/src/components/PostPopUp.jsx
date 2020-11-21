import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

function PostPopUp({ open, handleClose, handelEditButton, postId }) {
  const [editForm, setEditForm] = useState({});

  const handelSave = () => {
    handelEditButton(postId, editForm);
    handleClose();
  };

  return (
    <div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade className="modal__container" in={open}>
          <div>
            <h2>Edit text</h2>
            <TextField
              onChange={(e) =>
                setEditForm((prevValue) => ({
                  ...prevValue,
                  newTitle: e.target.value,
                }))
              }
              label="newTitle"
            />
            <TextField
              onChange={(e) =>
                setEditForm((prevValue) => ({
                  ...prevValue,
                  newDescription: e.target.value,
                }))
              }
              label="newDescription"
            />
            <Button onClick={handelSave}>
              <CheckIcon style={{ fontSize: 38 }} />
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default PostPopUp;
