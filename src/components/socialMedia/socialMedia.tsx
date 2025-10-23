import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import SocialMediaItem from "@/components/socialMedia/socialMediaItem";

const SocialMedia = () => {
  return (
    <ul className="relative flex gap-4">
      <li className="relative list-none">
        <SocialMediaItem url="#" Icon={FaFacebookF} />
      </li>
      <li className="relative list-none">
        <SocialMediaItem url="#" Icon={FaInstagram} />
      </li>
      <li className="relative list-none">
        <SocialMediaItem url="#" Icon={FaLinkedinIn} />
      </li>
      <li className="relative list-none">
        <SocialMediaItem url="#" Icon={FaWhatsapp} />
      </li>
      <li className="relative list-none">
        <SocialMediaItem url="#" Icon={FaXTwitter} />
      </li>
    </ul>
  );
};

export default SocialMedia;
