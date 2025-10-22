import FontsListItem from "@/components/fontsListItem";
import { favoriteGoogleFonts } from "@/config/fonts/googleFonts";

export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen">
      <main className="flex flex-col gap-4 row-start-2">
        <h1 className="w-full font-tourney text-5xl underline">Favorite Google Fonts from Next JS</h1>
        <ol className="max-w-94 text-4xl sm:text-left text-center list-decimal">
          {favoriteGoogleFonts.map((font) => (
            <div className={`${font.variable}`} key={font.name}>
              <FontsListItem font={font?.name} />
            </div>
          ))}
        </ol>
      </main>
    </div>
  );
}
