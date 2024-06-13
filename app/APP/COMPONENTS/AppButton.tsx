import Link from 'next/link'
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

function AppButton({children}:{children:React.ReactNode}) {
  return (
   
    <div className="bg-AppPop hover:bg-AppSecondary hover:cursor-pointer text-white CENTER w-[90px] h-[35px] rounded-md ga-4">
      <FaAngleLeft />
      {children}
    </div>

  )
}

export default AppButton