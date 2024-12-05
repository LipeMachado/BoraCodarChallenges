import { ModeToggle } from "./mode-toogle";


export function NavBar(){
  return(
    <nav className="flex items-center justify-between mx-0 lg:mx-32 p-4">
      <h1 className="text-xl">Desafios</h1>
      <ModeToggle />
    </nav>
  )
}