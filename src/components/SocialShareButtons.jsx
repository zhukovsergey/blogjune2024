import { SlSocialVkontakte } from "react-icons/sl";
const SocialShareButtons = ({ url, title }) => {
  return (
    <div className="w-full justify-between">
      <a
        href={`https://vk.com/share.php?url=${url}&title=${title}`}
        target="_blank"
        rel="noreferrer"
      >
        <SlSocialVkontakte className="text-2xl hover:text-primary" />
      </a>
    </div>
  );
};

export default SocialShareButtons;
