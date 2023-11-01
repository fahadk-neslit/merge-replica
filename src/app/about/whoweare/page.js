"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motions";
import LinearSVG from "@/assets/svg/about/aboutLinearSvg";
import LinkIcon from "@/assets/svg/about/linkIcon";
import { useRouter } from "next/navigation";

function About() {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const navbar = document.querySelector("#navbar");
    navbar.classList.add("nav_color_white");
    navbar.classList.remove("nav_color_black");

    const contactUs = document.querySelector(".contact-us");
    contactUs.classList.add("outlined-button");
  }, []);

  const handleScroll = (e) => {
    const whiteSection = document.querySelector("#white-section");
    const rect = whiteSection.getBoundingClientRect();

    if (rect.top <= 0) {
      const navbar = document.querySelector("#navbar");
      navbar.classList.add("nav_color_white");
      navbar.classList.remove("nav_color_black");
      const contactUs = document.querySelector(".contact-us");
      contactUs.style.color = "#0A0E12";
    } else {
      navbar.classList.add("nav_color_black");
      navbar.classList.remove("nav_color_white");
      const contactUs = document.querySelector(".contact-us");
      contactUs.style.color = "#dfe1e6";
    }
  };

  const showChild = (id) => {
    document.getElementById(id).style.display = "block";
  };
  const hideChild = (id) => {
    document.getElementById(id).style.display = "none";
  };

  return (
    <>
      <div className="p-4 py-[70px] bg-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="w-full bg-lightSilverGray rounded-[50px] min-h-[200px]">
            <div className="flex flex-row justify-between flex-nowrap">
              <div className="p-12 lg:p-24 max-w-full xl:max-w-[580px]">
                <div>
                  <motion.div
                    variants={textVariant(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                  >
                    <h1 className="text-4xl font-bold text-greyBlack leading-tight">
                      Merging the impossible to create something &nbsp;
                      <span className="text-transparent bg-clip-text bg-gradient-to-br">
                        stunning
                      </span>
                    </h1>
                  </motion.div>
                  <motion.div
                    variants={textVariant(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.65 }}
                  >
                    <p className="text-lg font-normal text-greyBlackOpacity my-12">
                      We are UI UX Design and Development Agency. We help
                      businesses create awesome-looking and engaging digital
                      products: mobile and web apps, websites, and complex
                      enterprise solutions.
                    </p>
                  </motion.div>
                  <motion.div
                    variants={textVariant(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                  >
                    <div className="flex gap-1">
                      <p className="text-lg font-bold text-textBlue">
                        Explore open roles
                      </p>
                      <LinkIcon fill="#476cff" width={24} />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div>
                <div className="w-full xl:w-[480px]">
                  <motion.div
                    variants={textVariant(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}
                  >
                    <LinearSVG />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] mt-16">
          <div>
            <div className="text-center">
              <motion.div
                variants={textVariant(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.45 }}
              >
                <h1 className="text-4xl font-bold text-greyBlack leading-tight">
                  Beyond agency
                </h1>
              </motion.div>
              <div className="flex justify-center">
                <motion.div
                  variants={textVariant(0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.65 }}
                >
                  <p className="text-lg font-normal text-greyBlackOpacity my-8 max-w-[490px]">
                    We now expanded Merge beyond an agency and working on more
                    product launches as you read this text
                  </p>
                </motion.div>
              </div>
            </div>
            <motion.div
              variants={textVariant(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.65 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 min-h-52">
                <div
                  onClick={() => {
                    router.push("/");
                  }}
                  onMouseOver={() => showChild("merge_development")}
                  onMouseOut={() => hideChild("merge_development")}
                  className="flex flex-col justify-between rounded-3xl bg-lightGhostGray hover:bg-blue-700  transition duration-300 p-8 relative"
                >
                  <div>
                    <p className="text-2xl font-bold text-greyBlackOpacity">
                      Merge <br /> Development
                    </p>
                    <div
                      className="absolute top-5 right-5 hidden"
                      id="merge_development"
                    >
                      <LinkIcon fill="white" width={38} />
                    </div>
                  </div>
                  <div className="text-end">
                    <p class="text-md font-medium text-staleBlueGray">
                      — UI/UX design and <br />
                      development agency
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => {
                    router.push("/services/product-ux-discovery");
                  }}
                  onMouseOver={() => showChild("merge_labs")}
                  onMouseOut={() => hideChild("merge_labs")}
                  className="flex flex-col justify-between rounded-3xl bg-lightGhostGray hover:bg-blue-700  transition duration-300 p-8 relative"
                >
                  <div>
                    <p className="text-2xl font-bold text-greyBlackOpacity">
                      Merge <br /> Labs
                    </p>
                    <div
                      className="absolute top-5 right-5 hidden"
                      id="merge_labs"
                    >
                      <LinkIcon fill="white" width={38} />
                    </div>
                  </div>
                  <div className="text-end">
                    <p class="text-md font-medium text-staleBlueGray">
                      — Product UX <br />
                      discovery
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
