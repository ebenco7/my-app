"use client"
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
    //The code below is a hook it can not be used anywhere else but under a function
    const Params = useParams()
   
    // async permits the server to continue to load the data, it does nit block it

    const GetData = async()=>{

        const Data = await fetch("https://dog.ceo/api/breed/hound/images").then((data)=>data.json()).then((data)=>{
            console.log(data)
        })
        // Because this is a process will must tell it to wait



    }

    //The code below runs once at the first load, if loaded for the second time it wont run, a trigger is created to tell it to run when a certain value change.
    useEffect(()=>{
        alert("")
    })
  return (
    <div>Inside breed folder  (Params.breed)</div>
  )
}

export default page