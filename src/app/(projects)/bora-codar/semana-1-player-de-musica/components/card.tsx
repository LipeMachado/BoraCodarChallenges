import { cn } from "@/lib/utils";
import Image from "next/image";
import Bg from "../assets/bg.png"
import { FastForward, Play } from "lucide-react";
import { Slider } from "@/app/(projects)/bora-codar/semana-1-player-de-musica/components/ui/slider";

export const CardVertical = () => {
  return(
    <div className="bg-[#2A2141] p-[38px] flex flex-col justify-center items-center gap-[29px] rounded-xl">
      <div className="w-[189px] h-[189px] rounded-lg">
        <Image src={Bg} alt="Image music" />
      </div>
      <div className="w-full flex flex-col">
        <h1 className="font-bold text-2xl text-[#E1E1E6] font-roboto">
          Acorda Devinho
        </h1>
        <p className="text-[#A5A2B0] font-roboto text-xl font-normal">
          Banda Rocketseat
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <FastForward color="#E1E1E6" fill="#E1E1E6" className="tranform rotate-180" />
        <Play color="#E1E1E6" fill="#E1E1E6"/>
        <FastForward color="#E1E1E6" fill="#E1E1E6" />
      </div>
      <div className="w-full flex flex-col gap-[9px]">
        <Slider defaultValue={[70]} max={100} step={1} />
        <div className="w-full flex justify-between">
          <span className="font-roboto text-[#A5A2B0] text-[14px]">
            03:20
          </span>
          <span className="font-roboto text-[#A5A2B0] text-[14px]">
            00:12
          </span>
        </div>
      </div>
    </div>
  )
}

export const CardHorizontal = ({slider} : {slider?: string}) => {
  return (
    <div className="bg-[#2A2141] w-fit p-[29px] flex flex-col gap-[29px] rounded-xl">
      <div className="flex gap-[28px] w-full items-center">
        <div className="max-w-[84px] max-h-[84px] rounded-lg">
          <Image src={Bg} alt="Image music" />
        </div>
        <div className="w-full flex flex-col">
          <h1 className="font-bold text-2xl text-[#E1E1E6] font-roboto">
            Acorda Devinho
          </h1>
          <p className="text-[#A5A2B0] font-roboto text-xl font-normal">
            Banda Rocketseat
          </p>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <FastForward color="#E1E1E6" fill="#E1E1E6" className="tranform rotate-180" />
        <Play color="#E1E1E6" fill="#E1E1E6"/>
        <FastForward color="#E1E1E6" fill="#E1E1E6" />
      </div>
      <div className={cn("w-full flex flex-col gap-[9px]", slider)}>
        <Slider defaultValue={[70]} max={100} step={1} />
        <div className="w-full flex justify-between">
          <span className="font-roboto text-[#A5A2B0] text-[14px]">
            03:20
          </span>
          <span className="font-roboto text-[#A5A2B0] text-[14px]">
            00:12
          </span>
        </div>
      </div>
    </div>
  )
}