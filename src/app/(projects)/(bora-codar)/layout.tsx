interface BoraCodarLayoutProps {
  children: React.ReactNode
}

const BoraCodarLayout = ({ children }:BoraCodarLayoutProps) => {
  return(
    <div className="bg-[#0F0D13]">
      {children}
    </div>
  )
}

export default BoraCodarLayout