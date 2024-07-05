import { images } from "../../../constants";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className=" mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl  lg:text-left lg:max-w-[540px]">
          Прочитайте самые популярные статьи
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-left lg:text-base xl:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quod
          neque. Voluptatem quidem modi expedita ex deleniti officiis molestiae
          minus error et architecto ut eos, repudiandae sint ipsum quo
          obcaecati.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-lg md:py-4"
              type="text"
              placeholder="Поиск по сайту"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Поиск
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-6">
          <span className="text-dark-light font-semibold italic lg:text-sm xl:text-base">
            Популярные категории
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Дорамы
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Шоу
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="Пользователи читают новости"
        />
      </div>
    </section>
  );
};

export default Hero;
