import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/comments";
import { useEffect, useState } from "react";
import Comment from "./Comment";

const CommentsContainer = ({ className, logginedUserId }) => {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter((comment) => comment.parent == null);
  const [affectedComment, setAffectedComment] = useState(null);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "gfd",
        name: "John",
        avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
      },
      desc: value,
      post: "12",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };

    setComments((curState) => {
      return [newComment, ...curState];
    });
    setAffectedComment(null);
  };
  const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment._id === commentId) {
        return {
          ...comment,
          desc: value,
        };
      }
      return comment;
    });

    setComments(updatedComments);

    setAffectedComment(null);
  };

  const deleteCommentHandler = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment._id !== commentId
    );
    setComments(updatedComments);
  };

  const getRepliesHandler = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };
  return (
    <div className={`${className}`}>
      <CommentForm
        btnLabel="Оставить комментарий"
        formSubmitHandler={(value) => addCommentHandler(value)}
      />

      <div className="space-y-4 mt-8">
        {mainComments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            logginedUserId={logginedUserId}
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            addComment={addCommentHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
