import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PostPopUp from "./PostPopUp";

function Post({ post, handelDeleteButton, handelEditButton }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className="post" elevation={3}>
      <h2>{post.title}</h2>
      <p>{[post.description]}</p>
      <div className="post__buttons">
        <Button onClick={handleOpen} variant="contained">
          <EditIcon />
        </Button>
        <Button onClick={() => handelDeleteButton(post.id)} variant="contained">
          <DeleteIcon />
        </Button>
      </div>
      <PostPopUp
        handelEditButton={handelEditButton}
        open={open}
        handleClose={handleClose}
        postId={post.id}
      />
    </Paper>
  );
}

export default Post;
