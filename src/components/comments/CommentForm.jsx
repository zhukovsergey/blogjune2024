import { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
}) => {
  const [value, setValue] = useState(initialText);
  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-primary border-opacity-20 py-4 px-4 rounded-lg">
        <textarea
          rows="5"
          className="w-full focus:outline-none resize-none bg-transparent"
          placeholder="Написать комментарий..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <div className="flex items-center gap-x-2 pt-2">
          {formCancelHandler && (
            <button
              type="button"
              className="text-primary font-semibold px-6 py-2.5 rounded-lg border border-red-500 mt-2"
              onClick={formCancelHandler}
            >
              Отменить
            </button>
          )}
          <button
            type="submit"
            className="mt-2 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
