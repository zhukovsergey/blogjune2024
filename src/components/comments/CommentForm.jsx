import { useState } from "react";

const CommentForm = ({ btnLabel, formSubmitHandler }) => {
  const [value, setValue] = useState();
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
          className="w-full focus:outline-none resize-none "
          placeholder="Написать комментарий..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold"
        >
          {btnLabel}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
