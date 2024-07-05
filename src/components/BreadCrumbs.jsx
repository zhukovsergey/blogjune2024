import { Link } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex gap-2 items-center py-4 overflow-x-auto whitespace-nowrap">
      {data.map((item, index) => (
        <div
          className="text-black opacity-50 text-sm md:text-sm font-roboto"
          key={index}
        >
          <Link to={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="mx-1">/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
