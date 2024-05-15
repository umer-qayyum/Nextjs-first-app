import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head';
const about = () => {
  return (
    <>
        <Head>
      <title>
        About
      </title>
    </Head>
    <Navbar/>
    <div style={{textAlign:"center"}}>
    <h1 style={{margin:"30px 0px"}}>About Us</h1>
      <Image src='/img.png' width='1000' height='300'></Image>
    </div>

    </>
  )
}

export default about
