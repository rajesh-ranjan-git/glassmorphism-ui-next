import FontsListItem from "@/components/fontsListItem";
import { googleFonts } from "@/config/fonts/googleFonts";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen">
      <main className="row-start-2">
        <ol className="max-w-94 text-4xl sm:text-left text-center list-decimal">
          {googleFonts.map((font) => (
            <div className={`${font.variable}`} key={font.name}>
              <FontsListItem font={font?.name} />
            </div>
          ))}
        </ol>
      </main>
    </div>
  );
}
