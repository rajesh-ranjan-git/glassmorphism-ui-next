import FontsListItem from "@/components/fontsListItem";
import { googleFonts } from "@/config/fonts/googleFonts";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen">
      <main className="flex flex-col items-center sm:items-start gap-[32px] row-start-2">
        <ol className="text-xl sm:text-left text-center list-decimal">
          {googleFonts.map((font) => (
            <div className={`${font.variable}`} key={font.name}>
              <FontsListItem />
            </div>
          ))}
        </ol>
      </main>
    </div>
  );
}
