import { NavBar } from "@/components/nav-bar"
import { ReturnBar } from "@/components/return-bar"

interface BoraCodarLayoutProps {
  children: React.ReactNode
}

const BoraCodarLayout = ({ children }:BoraCodarLayoutProps) => {
  return(
    <div className="bg-[#0F0D13]">
      <ReturnBar />
      {children}
    </div>
  )
}

export default BoraCodarLayout