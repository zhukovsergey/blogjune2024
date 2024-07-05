import CommentForm from "./CommentForm";

const CommentsContainer = ({ className }) => {
    const addCommentHandler = (value, parent= null, replyOnUser = null) => {
        
    }
  return (
    <div className={`${className}`}>
      <CommentForm btnLabel="Оставить комментарий" />
    </div>
  );
};

export default CommentsContainer;
