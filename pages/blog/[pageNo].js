import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((val) => {
    return {
      params: {
        pageNo: val.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { pageNo } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${pageNo}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
const singleData = ({ data }) => {
  console.log(data.title);

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <div style={{backgroundColor:"white",color:"black",width:"70%", padding:"150px 80px",margin:"70px auto"}}>
            <h1 style={{margin:"10px 0"}}>Single Data</h1>
        <h2 style={{margin:"10px 0"}}>{data.title}</h2>
          <p style={{margin:"10px 0"}}>{data.body}</p>
        </div>
      </div>
    </>
  );
};

export default singleData;
