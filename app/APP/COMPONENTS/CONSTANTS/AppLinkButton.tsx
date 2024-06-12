import Link from 'next/link'
import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'

function AppLinkButton({link}:{link:string}) {
  return (
    <Link href={link}>
    <div className="bg-AppPop hover:bg-AppSecondary text-white CENTER w-[90px] h-[35px] rounded-md ga-4">
      <FaAngleLeft />
      Back
    </div>
  </Link>
  )
}

export default AppLinkButton