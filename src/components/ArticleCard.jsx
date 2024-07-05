import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-md ${className}`}>
      <img
        className="w-full h-auto object-cover object-center md:h-52 lg:h-48 xl:h-60"
        src="https://cameralabs.org/media/cameralabs/images/Dasha/00013_year/14/18/2/1/lighted-cherry-blossom-lake-japan.jpg"
        alt=""
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl line-clamp-3 lg:text-[28px]">
          Заголовок статьи
        </h2>
        <p className="text-dark-light mt-3 text-sm line-clamp-2 xl:text-lg">
          Описание статьи небольшое 2 строчки фывфывфывфаапвапвапрарываdfgdfgdf
          gdfgdhdhdffgdfgdfgdfgdfg
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              className="w-12 h-12 object-cover object-center rounded-full md:w-14 md:h-14"
              src="https://sun9-76.userapi.com/impg/xvWLGTzGJqZdeNUfNpeZcn8dnWi6ilSUE-5D-g/VKj5AybJaOo.jpg?size=662x663&quality=95&sign=4b2cae80d2b1edf57eee70cdfa00454c&c_uniq_tag=GouzUB3GWdqd7UKxy2i3cschJGPczyxInEZuIEroQYE&type=album"
              alt=""
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Anastasia
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36b37e] w-fit rounded-full bg-opacity-20 p-1">
                  <BsCheckLg className="text-[#36b37e] w-3 h-3" />
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  Администратор
                </span>
              </div>
            </div>
          </div>
          <hr class="h-16 w-0.5 bg-[#b9bec7] mx-2 bg-opacity-30"></hr>
          <div className="flex flex-col items-end justify-end">
            <span className="text-xs  font-roboto">Опубликовано:</span>
            <span className="font-bold text-dark-light italic text-sm  md:text-base">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
