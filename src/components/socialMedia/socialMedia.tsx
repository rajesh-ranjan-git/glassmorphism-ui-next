import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <ul className="relative flex gap-4">
      <li className="relative list-none">
        <a href="#">
          <FaFacebookF />
        </a>
      </li>
      <li className="relative list-none">
        <a href="#">
          <FaInstagram />
        </a>
      </li>
      <li className="relative list-none">
        <a href="#">
          <FaXTwitter />
        </a>
      </li>
      <li className="relative list-none">
        <a href="#">
          <FaLinkedinIn />
        </a>
      </li>
      <li className="relative list-none">
        <a href="#">
          <FaWhatsapp />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
