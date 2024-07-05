import ArticleCard from "../../../components/ArticleCard";
import { FaArrowDown } from "react-icons/fa";
const Articles = () => {
  return (
    <section className="flex-flex-col  container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>Больше статьей...</span>
        <FaArrowDown className="w-3 h-3 text-primary" />
      </button>
    </section>
  );
};

export default Articles;
