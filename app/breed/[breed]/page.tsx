"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function page() {

    const Params = useParams()
  return (
    <div>Inside breed folder  (Params.breed)</div>
  )
}

export default page