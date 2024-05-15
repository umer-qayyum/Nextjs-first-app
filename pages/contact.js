import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Head from 'next/head';
const contact = () => {
  return (
    <>
        <Head>
      <title>
        Contact
      </title>
    </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 style={{margin:"30px 0px"}}>Contact us</h1>
        <Image
          src="https://images.pexels.com/photos/20807272/pexels-photo-20807272/free-photo-of-a-woman-smiling-while-eating-food-at-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height="400"
          width="300"
        ></Image>
      </div>
    </>
  );
};

export default contact;
