import React from 'react'
import Link from "next/link";
const Navbar = () => {
  return (
    <>
       <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "90px",
            padding: "10px 15px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "25px",
            width: "60%",
            margin: "20px auto",
            listStyle: "none",
            fontSize: "20px",
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/blog">Blogs</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
