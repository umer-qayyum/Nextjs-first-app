import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head';
const products = () => {
  return (
    <>
        <Head>
      <title>
        Products
      </title>
    </Head>
    <div style={{ textAlign: "center" }}>
        <Navbar />
        <div style={{backgroundColor:"white",color:"black",width:"70%", padding:"150px 80px",margin:"100px auto"}}>
            <h1>No Products yet</h1>

        </div>
      </div>
    </>
  )
}

export default products
