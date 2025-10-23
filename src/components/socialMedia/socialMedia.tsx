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
        <a
          href="#"
          className="top-0 before:top-0 hover:-top-12 before:left-0 z-1 hover:z-11 before:absolute relative flex justify-center items-center before:bg-white/50 shadow-black/10 shadow-lg backdrop-blur-xs border border-white/40 border-r-white/20 border-b-white/20 rounded-xl w-20 before:w-12 h-20 before:h-full overflow-hidden text-white text-4xl no-underline before:content-[''] before:skew-x-45 before:transition before:translate-x-36 hover:before:-translate-x-36 before:duration-500"
        >
          <FaFacebookF />
        </a>
      </li>
      <li className="relative list-none">
        <a
          href="#"
          className="top-0 before:top-0 hover:-top-12 before:left-0 z-1 hover:z-11 before:absolute relative flex justify-center items-center before:bg-white/50 shadow-black/10 shadow-lg backdrop-blur-xs border border-white/40 border-r-white/20 border-b-white/20 rounded-xl w-20 before:w-12 h-20 before:h-full overflow-hidden text-white text-4xl no-underline before:content-[''] before:skew-x-45 before:transition before:translate-x-36 hover:before:-translate-x-36 before:duration-500"
        >
          <FaInstagram />
        </a>
      </li>
      <li className="relative list-none">
        <a
          href="#"
          className="top-0 before:top-0 hover:-top-12 before:left-0 z-1 hover:z-11 before:absolute relative flex justify-center items-center before:bg-white/50 shadow-black/10 shadow-lg backdrop-blur-xs border border-white/40 border-r-white/20 border-b-white/20 rounded-xl w-20 before:w-12 h-20 before:h-full overflow-hidden text-white text-4xl no-underline before:content-[''] before:skew-x-45 before:transition before:translate-x-36 hover:before:-translate-x-36 before:duration-500"
        >
          <FaXTwitter />
        </a>
      </li>
      <li className="relative list-none">
        <a
          href="#"
          className="top-0 before:top-0 hover:-top-12 before:left-0 z-1 hover:z-11 before:absolute relative flex justify-center items-center before:bg-white/50 shadow-black/10 shadow-lg backdrop-blur-xs border border-white/40 border-r-white/20 border-b-white/20 rounded-xl w-20 before:w-12 h-20 before:h-full overflow-hidden text-white text-4xl no-underline before:content-[''] before:skew-x-45 before:transition before:translate-x-36 hover:before:-translate-x-36 before:duration-500"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="relative list-none">
        <a
          href="#"
          className="top-0 before:top-0 hover:-top-12 before:left-0 z-1 hover:z-11 before:absolute relative flex justify-center items-center before:bg-white/50 shadow-black/10 shadow-lg backdrop-blur-xs border border-white/40 border-r-white/20 border-b-white/20 rounded-xl w-20 before:w-12 h-20 before:h-full overflow-hidden text-white text-4xl no-underline before:content-[''] before:skew-x-45 before:transition before:translate-x-36 hover:before:-translate-x-36 before:duration-500"
        >
          <FaWhatsapp />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
