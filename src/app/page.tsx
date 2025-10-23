import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center items-center bg-[#e0f7fa] min-h-screen">
      <div className="relative flex flex-wrap justify-center items-center my-9 container">
        <div className="group relative flex justify-center items-center shadow-[0_0.3rem_1rem_rgba(0,0,0,0.2)] m-5 rounded-2xl w-72 h-96 overflow-hidden card">
          <div className="imgBx">
            <Image
              src="/assets/IMG_0009.JPG"
              alt="pic"
              width={600}
              height={400}
              className="w-full h-full select-none"
            />
          </div>
          <div className="-bottom-40 group-hover:bottom-0 z-10 absolute flex flex-col justify-center items-center gap-4 shadow-[0_-0.6rem_0.6rem_rgba(0,0,0,0.1)] backdrop-blur-lg border border-white/5 w-full h-40 transition-[bottom] duration-500 delay-700 group-hover:delay-[0s] content">
            <div className="contentBx">
              <h3 className="opacity-0 group-hover:opacity-100 mx-0 mt-5 mb-4 font-semibold text-white text-xl text-center uppercase leading-4 tracking-widest transition-all -translate-y-5 group-hover:translate-0 duration-500 delay-500">
                Rajesh Ranjan
                <br />
                <span className="font-light text-xs normal-case">
                  Full Stack Developer
                </span>
              </h3>
            </div>
            <ul className="bottom-2.5 relative flex sci">
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
          </div>
        </div>
        <div className="group relative flex justify-center items-center shadow-[0_0.3rem_1rem_rgba(0,0,0,0.2)] m-5 rounded-2xl w-72 h-96 overflow-hidden card">
          <div className="imgBx">
            <Image
              src="/assets/IMG_0390.jpg"
              alt="pic"
              width={600}
              height={400}
              className="w-full h-full select-none"
            />
          </div>
          <div className="-bottom-40 group-hover:bottom-0 z-10 absolute flex flex-col justify-center items-center gap-4 shadow-[0_-0.6rem_0.6rem_rgba(0,0,0,0.1)] backdrop-blur-lg border border-white/5 w-full h-40 transition-[bottom] duration-500 delay-700 group-hover:delay-[0s] content">
            <div className="contentBx">
              <h3 className="opacity-0 group-hover:opacity-100 mx-0 mt-5 mb-4 font-semibold text-white text-xl text-center uppercase leading-4 tracking-widest transition-all -translate-y-5 group-hover:translate-0 duration-500 delay-500">
                Sayantanee Mohanta
                <br />
                <span className="font-light text-xs normal-case">
                  Helpdesk Senior Associate
                </span>
              </h3>
            </div>

            <ul className="bottom-2.5 relative flex sci">
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
          </div>
        </div>
        <div className="group relative flex justify-center items-center shadow-[0_0.3rem_1rem_rgba(0,0,0,0.2)] m-5 rounded-2xl w-72 h-96 overflow-hidden card">
          <div className="imgBx">
            <Image
              src="/assets/IMG_0392.jpg"
              alt="pic"
              width={600}
              height={400}
              className="w-full h-full select-none"
            />
          </div>
          <div className="-bottom-40 group-hover:bottom-0 z-10 absolute flex flex-col justify-center items-center gap-4 shadow-[0_-0.6rem_0.6rem_rgba(0,0,0,0.1)] backdrop-blur-lg border border-white/5 w-full h-40 transition-[bottom] duration-500 delay-700 group-hover:delay-[0s] content">
            <div className="contentBx">
              <h3 className="opacity-0 group-hover:opacity-100 mx-0 mt-5 mb-4 font-semibold text-white text-xl text-center uppercase leading-4 tracking-widest transition-all -translate-y-5 group-hover:translate-0 duration-500 delay-500">
                Rajesh Rahee
                <br />
                <span className="font-light text-xs normal-case">
                  Full Stack Developer
                </span>
              </h3>
            </div>

            <ul className="bottom-2.5 relative flex sci">
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
          </div>
        </div>
      </div>
    </section>
  );
}
