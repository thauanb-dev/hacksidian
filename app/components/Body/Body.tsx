import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function Body({children}: Props) {
  return (
    <div className="p-4  bg-[#1b1a1f] w-full h-full">           
        {children}
    </div>
  
  )
}
