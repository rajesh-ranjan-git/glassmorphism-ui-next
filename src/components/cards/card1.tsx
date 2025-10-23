import Image from "next/image";
import CardContent from "@/components/cards/cardContent";

const Card1 = () => {
  return (
    <div className="group relative flex justify-center items-center shadow-[0_0.3rem_1rem_rgba(0,0,0,0.2)] m-5 rounded-2xl w-72 h-96 overflow-hidden">
      <Image
        src="/assets/IMG_0009.JPG"
        alt="pic"
        width={600}
        height={400}
        className="w-full h-full select-none"
      />

      <CardContent name="Rajesh Ranjan" designation="Full Stack Developer" />
    </div>
  );
};

export default Card1;
