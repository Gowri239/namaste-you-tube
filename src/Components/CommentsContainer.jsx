import React from "react";
import Comment from "./Comment";

const CommentsContainer = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      {comment.replies && (
        <div className="pl-5 border-l-1 ml-1">
          <CommentsContainer comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

export default CommentsContainer;
