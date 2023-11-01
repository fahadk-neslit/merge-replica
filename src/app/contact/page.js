"use client";
import React from "react";
import LinkedInLogo from "@/assets/svg/footer/linkedIn";
import DribbleLogo from "@/assets/svg/footer/dribble";
import FaceBookLogo from "@/assets/svg/footer/facebook";
import Button from "../../components/atoms/button/Button";

function Contact() {
  React.useEffect(() => {
    const navbar = document.querySelector("#navbar");
    navbar.classList.add("nav_color_black");
    navbar.classList.remove("nav_color_white");

    const contactUs = document.querySelector(".contact-us");
    if (contactUs.classList.contains("outlined-button")) {
      contactUs.classList.remove("outlined-button");
    }
  }, []);

  return (
    <div className="py-[70px] bg-primary w-full min-h-full flex flex-col items-center">
      <div>
        <h3 className="my-10 heading2 text-greyWhite">Let&apos;s Talk</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div
          className="flex flex-col h-full w-full bg-greyBlack p-[50px] justify-center items-center"
          style={{
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <h1 className="heading2 text-greyWhite">Social Media Links</h1>
          <div className="flex justify-center items-center mt-10">
            <div>
              <LinkedInLogo />
            </div>
            <div>
              <DribbleLogo />
            </div>
            <div>
              <FaceBookLogo />
            </div>
          </div>
        </div>
        <div
          className="min-w-[500px] bg-greyBlack p-[50px] justify-center items-center"
          style={{
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <div>
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="flex items-center gap-4 w-full">
                <input
                  type="text"
                  name="full-name"
                  placeholder="Full Name"
                  className="pb-[12px] focus:outline-none w-full bg-transparent text-[#CFCDCD]"
                  style={{ borderBottom: "1px solid #CFCDCD" }}
                />
                <input
                  type="text"
                  name="full-name"
                  placeholder="Email"
                  className="pb-[12px] focus:outline-none w-full bg-transparent text-[#CFCDCD]"
                  style={{ borderBottom: "1px solid #CFCDCD" }}
                />
              </div>
              <input
                type="text"
                name="full-name"
                placeholder="Your awesome comapny"
                className="pb-[12px] focus:outline-none w-full bg-transparent text-[#CFCDCD]"
                style={{ borderBottom: "1px solid #CFCDCD" }}
              />
              <input
                type="text"
                name="full-name"
                placeholder="Your contact number"
                className="pb-[12px] focus:outline-none w-full bg-transparent text-[#CFCDCD]"
                style={{ borderBottom: "1px solid #CFCDCD" }}
              />
              <textarea
                rows={1}
                placeholder="Your Message"
                className="pb-[12px] focus:outline-none w-full bg-transparent text-[#CFCDCD]"
                style={{ borderBottom: "1px solid #CFCDCD" }}
              />
              <Button filled>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
