import { Link } from "react-router-dom";
const SuggestedPosts = ({ className, header, posts = [], tags }) => {
  return (
    <div
      className={`w-full shadow-lg rounded-lg p-4 mt-8 md:text-xl ${className}`}
    >
      <h2 className="font-roboto font-medium text-dark-hard md:text-xl">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 lg:grid-cols-1 md:gap-x-5">
        {posts.map((item) => (
          <div
            className="flex space-x-3 flex-nowrap items-center"
            key={item._id}
          >
            <img
              className="aspect-square object-cover rounded-lg w-1/5 md:w-1/4"
              src={item.image}
              alt={item.title}
            />
            <div className="text-sm font-roboto text-dark-hard font-medium">
              <h3 className="text-sm md:text-base font-roboto text-dark-hard font-medium lg:text-lg">
                {item.title}
              </h3>
              <span className="text-xs opacity-55">
                {new Date(item.createdAt).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mt-8 font-roboto font-medium text-dark-hard">Категории</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item, index) => (
          <Link
            to="/"
            className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-white text-sm md:text-base"
            key={index}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
