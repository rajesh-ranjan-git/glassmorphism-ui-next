import AnimatedBackground from "@/components/background/animatedBackground";
import Login from "@/components/form/login";
import AnimatedFloatingSquares from "@/components/squares/animatedFloatingSquares";

export default function Home() {
  return (
    <section className="flex justify-center items-center bg-[linear-gradient(to_bottom,#f1f4f9,#dff1ff)] min-h-screen font-alkatra">
      <AnimatedBackground />

      <div className="relative">
        <AnimatedFloatingSquares />

        <div className="relative flex justify-center items-center bg-white/10 shadow-2xl shadow-black/10 backdrop-blur-xs border border-white/50 border-r-white/20 border-b-white/20 rounded-xl w-96 min-h-96">
          <Login />
        </div>
      </div>
    </section>
  );
}
