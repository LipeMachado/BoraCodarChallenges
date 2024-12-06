import { Main } from "@/components/main";
import { NavBar } from "@/components/nav-bar";
import { Separator } from "@/components/ui/separator";

export const title = "Desafios do Bora Codar";
export const description = "Aqui são desafios do Bora Codar da Rocketseat";

export default function BoraCodarPage(){
  return(
    <div className="bg-background">
      <NavBar
        title="Desafios Bora Codar"
      />
      <Separator />
      <Main />
    </div>
  )
}