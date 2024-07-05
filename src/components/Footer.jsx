import { images } from "../constants";
const Footer = () => {
  return (
    <section className="bg-[#A5A5F5] border-t-[1px] border-gray-300">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5">
        <div className="md:col-span-5 col-span-10 mx-auto">
          <h3 className="text-[#f2f1f5] font-bold">Текст первой колонки</h3>
        </div>
        <div className="md:col-span-5 col-span-10 mx-auto">
          <h3 className="text-[#f2f1f5] font-bold">Текст второй колонки</h3>
        </div>
        <div className=" col-span-10 mx-auto">
          <img src={images.Logo} alt="logo" className="w-16 mx-auto" />
          <span className="mx-auto">ТУТ Ссылки на соц сети.</span>
          <p>
            При копировании статей обязательно указывать обратную ссылку на наш
            сайт. Все права защищены {new Date().getFullYear()} г.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
