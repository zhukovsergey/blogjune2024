import { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItemsInfo = [
  { name: "Главная", type: "link" },
  { name: "Статьи", type: "dropdown", items: ["Item 1", "Item 2", "Item 3"] },
  { name: "Обо мне", type: "link" },
  { name: "Контакты", type: "link" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => !curState);
  };
  return (
    <li className=" relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2 ">
            {item.name}
          </a>
          <span className="text-blue-500 cursor-pointer absolute transition-all duration-200 right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100 ">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>

          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="flex flex-col text-center bg-dark-soft lg:bg-transparent shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <li
                  key={index}
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 lg:text-dark-soft text-white"
                >
                  <a href="/" className="px-4 py-2">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-16" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 flex w-full flex-col lg:flex-row lg:w-auto fixed justify-center lg:justify-end top-0 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent bottom-0 z-[49] gap-x-9 items-center lg:static`}
        >
          <ul className=" items-center gap-y-5 text-white lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold ">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="bg-blue-500 text-white px-5 mt-5 lg:mt-0 py-2 rounded-full hover:bg-blue-400 font-semibold transition-all duration-200">
            Войти
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
