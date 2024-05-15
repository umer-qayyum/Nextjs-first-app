import Navbar from "@/components/Navbar";
import React from "react";
import Head from "next/head";
import Link from "next/link";
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <h1>My Blogs</h1>
        {data &&
          data.slice(0, 20).map((val) => {
            return (
              <>
                <ul
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    width: "50%",
                    padding: "30px 0px",
                    margin: "20px auto",
                  }}
                >
                  <Link href={`/blog/${val.id}`}>
                    <li>
                      {val.id}- {val.title}
                    </li>
                  </Link>
                </ul>
              </>
            );
          })}
      </div>
    </>
  );
};

export default index;
