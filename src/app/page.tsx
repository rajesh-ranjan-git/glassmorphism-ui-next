import Card1 from "@/components/cards/card1";
import Card2 from "@/components/cards/card2";
import Card3 from "@/components/cards/card3";

export default function Home() {
  return (
    <section className="flex justify-center items-center bg-[#e0f7fa] min-h-screen">
      <div className="relative flex flex-wrap justify-center items-center my-9">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </section>
  );
}
