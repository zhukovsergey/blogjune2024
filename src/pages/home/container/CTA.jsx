const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#A5A5F5"
        />
      </svg>
      <section className="relative bg-[#A5A5F5] px-5">
        <div className="container grid grid-cols-12 mx-auto -mt-1 py-10 gap-4 justify-items-center">
          <div className="col-span-12 md:col-span-6 gap-4">
            <h2 className="text-white font-roboto font-bold text-2xl">
              Get our stories delivered from us to you
            </h2>
            <div className="w-full max-w-[494px] space-y-3 max-auto">
              <input
                type="text"
                placeholder="Ваш Email"
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-primary text-white font-bold">
                Подписаться
              </button>
            </div>
            <p className="text-white text-sm leading-7 mt-6 italic">
              Get a response tomorrow if you submit by 9 pm today
            </p>
          </div>
          <div className="w-full grid col-span-12 md:col-span-6 bg-white rounded-lg">
            <img
              src="https://klike.net/uploads/posts/2023-01/1675172315_3-60.jpg"
              className="rounded-lg object-center object-cover w-full h-auto md:h-46 z-10 relative"
              alt="CTA "
            />

            <span className="text-center mx-auto text-primary py-6 font-semibold">
              Новые статьи каждый день
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
