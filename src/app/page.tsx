import AnimatedBackgroundComponents from "@/components/background/animatedBackgroundComponents";
import SocialMedia from "@/components/socialMedia/socialMedia";

export default function Home() {
  return (
    <section className="before:bottom-0 before:z-10 before:absolute relative flex justify-center items-center bg-[linear-gradient(to_bottom,#ff4f8b,#dff1ff)] before:backdrop-blur-xs before:border-white/50 before:border-t w-full before:w-full h-screen before:h-1/2 before:content-['']">
      <AnimatedBackgroundComponents />

      <SocialMedia />
    </section>
  );
}
