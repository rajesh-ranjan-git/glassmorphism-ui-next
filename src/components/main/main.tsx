"use client";

import { useState } from "react";
import AnimatedBackground from "@/components/background/animatedBackground";
import ThemeToggle from "@/components/theme/themeToggle";

const Main = () => {
  const [switchTheme, setSwitchTheme] = useState("dark");

  return (
    <section
      className={`flex justify-center items-center ${
        switchTheme === "dark" ? "bg-black" : "bg-transparent"
      } min-h-screen transition-all duration-500`}
    >
      <AnimatedBackground />
      <ThemeToggle switchTheme={switchTheme} setSwitchTheme={setSwitchTheme} />
    </section>
  );
};

export default Main;
