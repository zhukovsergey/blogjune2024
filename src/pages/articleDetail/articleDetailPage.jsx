import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";

const breadCrumbsData = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "Статьи",
    link: "/blog",
  },
  {
    name: "Наименование статьи",
    link: "/blog/12",
  },
];

const postsData = [
  {
    _id: 1,
    title: "Наименование статьи1",
    image: "https://klike.net/uploads/posts/2023-01/1675172315_3-60.jpg",
    link: "/blog/12",
    createdAt: "2023-01-01T00:00:00.000Z",
  },
  {
    _id: 2,
    title: "Наименование статьи2",
    image:
      "https://bipbap.ru/wp-content/uploads/2017/09/1579700770_26-p-foni-s-krasnoyarskimi-peizazhami-101.jpg",
    link: "/blog/13",
    createdAt: "2023-01-01T00:00:00.000Z",
  },
  {
    _id: 3,
    title: "Наименование статьи3",
    image:
      "https://www.zastavki.com/pictures/originals/2023/Nature___Rivers_and_lakes_Mountains_and_sky_are_reflected_in_the_blue_surface_of_the_lake_167026_.jpg",
    link: "/blog/14",
    createdAt: "2023-01-01T00:00:00.000Z",
  },
];
const tagsData = ["Дорамы", "Красота", "Здоровье"];

const articleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <h1 className="text-center text-xl md:text-[26px] font-medium font-roboto my-4 text-dark-hard">
            Наименование статьи
          </h1>
          <img
            className="rounded-xl w-[80%] object-cover mx-auto"
            src="https://klike.net/uploads/posts/2023-01/1675172315_3-60.jpg"
            alt="title"
          />
          <Link
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
            to="/blog?category=selectedCategory"
          >
            ДОРАМЫ
          </Link>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor, nisl eget ultricies ultricies, nunc nunc aliquam nisl,
              eget ultricies ultricies nunc nunc aliquam nisl, eget ultricies
              ultricies.
            </p>
          </div>
          <CommentsContainer className="mt-10" />
        </article>
        <SuggestedPosts
          header={"Последние статьи"}
          posts={postsData}
          tags={tagsData}
          className="mt-8 lg:mt-0 lg:max-w-xs"
        />
      </section>
    </MainLayout>
  );
};

export default articleDetailPage;
