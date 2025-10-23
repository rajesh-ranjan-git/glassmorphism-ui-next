import { Facebook, Github, Instagram, Twitter } from "lucide-react";

const SocialMedia = () => {
  return (
    <ul className="bottom-2.5 relative flex">
      <li
        className="opacity-0 group-hover:opacity-100 mx-2.5 transition-all translate-y-10 group-hover:translate-y-0 duration-500 list-none"
        style={
          {
            "--i": 1,
            transitionDelay: "calc(0.2s * var(--i))",
          } as React.CSSProperties
        }
      >
        <a href="#" className="text-white">
          <Facebook />
        </a>
      </li>
      <li
        className="opacity-0 group-hover:opacity-100 mx-2.5 transition-all translate-y-10 group-hover:translate-y-0 duration-500 list-none"
        style={
          {
            "--i": 2,
            transitionDelay: "calc(0.2s * var(--i))",
          } as React.CSSProperties
        }
      >
        <a href="#" className="text-white">
          <Twitter />
        </a>
      </li>
      <li
        className="opacity-0 group-hover:opacity-100 mx-2.5 transition-all translate-y-10 group-hover:translate-y-0 duration-500 list-none"
        style={
          {
            "--i": 3,
            transitionDelay: "calc(0.2s * var(--i))",
          } as React.CSSProperties
        }
      >
        <a href="#" className="text-white">
          <Instagram />
        </a>
      </li>
      <li
        className="opacity-0 group-hover:opacity-100 mx-2.5 transition-all translate-y-10 group-hover:translate-y-0 duration-500 list-none"
        style={
          {
            "--i": 4,
            transitionDelay: "calc(0.2s * var(--i))",
          } as React.CSSProperties
        }
      >
        <a href="#" className="text-white">
          <Github />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
