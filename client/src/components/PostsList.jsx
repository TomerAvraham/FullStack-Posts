import React from "react";
import Post from "./Post";

function PostsList({ posts, handelDeleteButton, handelEditButton }) {
  return (
    <div className="posts__list">
      {posts.map((post, i) => (
        <Post
          handelEditButton={handelEditButton}
          handelDeleteButton={handelDeleteButton}
          key={i}
          post={post}
        />
      ))}
    </div>
  );
}

export default PostsList;
