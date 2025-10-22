import Button1 from "@/components/buttons/Button1";
import Button2 from "@/components/buttons/Button2";
import Button3 from "@/components/buttons/Button3";
import Button4 from "@/components/buttons/Button4";
import Button5 from "@/components/buttons/Button5";
import Button6 from "@/components/buttons/Button6";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#350048] min-h-screen font-alkatra text-white">
      <div className="flex flex-wrap justify-around my-8">
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
      <div className="flex flex-wrap justify-around my-8">
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}
