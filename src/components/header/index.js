"use client";
import React from "react";
import Button from "../atoms/button/Button";
import { useRouter } from "next/navigation";

function Header() {
  // useRouter
  const router = useRouter();

  return (
    <div
      id="navbar"
      className="body-padding sticky top-0 left-0 flex flex-row justify-between items-center nav_color_black py-[28px] z-50"
    >
      <div>
        <h1
          onClick={() => {
            router.push("/");
          }}
          className="heading2 cursor-pointer"
        >
          merge
        </h1>
      </div>
      <div className="hidden md:flex gap-5">
        <Button
          onClick={() => {
            router.push("/services/product-ux-discovery");
          }}
        >
          Services
        </Button>
        {/* <Button>Case Studies</Button> */}
        <Button
          onClick={() => {
            router.push("/about/whoweare");
          }}
        >
          About
        </Button>
        {/* <Button>Resources</Button> */}
      </div>
      <div>
        <Button
          className="contact-us"
          onClick={() => {
            router.push("/contact");
          }}
          outlined
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default Header;
