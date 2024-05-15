import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const ErrorPage = () => {
    const router=useRouter();
    const handleInput=()=>{
        router.push('/')
    }
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },5000)
    },[])
  return (
    <>
      <h1>Custom Error page is here</h1>
      <Link href='/' style={{padding:"10px 15px",backgroundColor:"white",color:"black",border:"none",borderRadius:"20px"}}>Back to home page</Link>
      <button onClick={handleInput} >again go backk</button>
    </>
  )
}

export default ErrorPage
