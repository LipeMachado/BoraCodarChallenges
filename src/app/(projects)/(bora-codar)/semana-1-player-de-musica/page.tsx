import Image from "next/image";

import Bg from "./assets/bg.png"

export const title = "Player de Música";
export const description = "Descrição do Projeto - 1";

const Semana1PlayerDeMusica = () => {
  return (
    <div className="w-full h-full md:h-screen flex justify-center items-center py-20 md:py-0">
      <div className="flex-col md:flex-row flex gap-5">
        <div className="bg-[#2A2141] px-5 py-8 rounded-xl">
          <div className="w-56 h-56 bg-black rounded-lg">
            <Image src={Bg} alt="Image music" />
          </div>
          <div>
            <h1>nome musica</h1>
            <p>nome banda</p>
          </div>
          <div>
            play
          </div>
          <div>
            slider
          </div>
        </div>
        <div className="grid gap-5">
          <div className="bg-[#2A2141] px-5 py-5 rounded-xl">
            <div className="w-32 h-32 bg-black rounded-lg">
              <Image src={Bg} alt="Image music" />
            </div>
            <div>
              <h1>nome musica</h1>
              <p>nome banda</p>
            </div>
            <div>
              play
            </div>
            <div>
              slider
            </div>
          </div>
          <div className="bg-[#2A2141] px-5 py-8 rounded-xl">
            <div className="w-32 h-32 bg-black rounded-lg">
              <Image src={Bg} alt="Image music" />
            </div>
            <div>
              <h1>nome musica</h1>
              <p>nome banda</p>
            </div>
            <div>
              play
            </div>
            <div>
              slider
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Semana1PlayerDeMusica