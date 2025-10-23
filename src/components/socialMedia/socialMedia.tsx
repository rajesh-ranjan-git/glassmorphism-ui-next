import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <ul>
      <li>
        <a href="#">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href="#">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="#">
          <FaXTwitter />
        </a>
      </li>
      <li>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a href="#">
          <FaWhatsapp />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
