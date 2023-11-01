"use client";
import Button from "@/components/atoms/button/Button";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motions";
import { PiTreeStructureLight } from "react-icons/pi";
import { SlBadge, SlLike } from "react-icons/sl";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { LuLineChart } from "react-icons/lu";
import { BsChatDots } from "react-icons/bs";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { useRouter } from "next/navigation";

function Servies() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const navbar = document.querySelector("#navbar");
    navbar.classList.add("nav_color_black");
    navbar.classList.remove("nav_color_white");
    const contactUs = document.querySelector(".contact-us");
    if (contactUs.classList.contains("outlined-button")) {
      contactUs.classList.remove("outlined-button");
    }
  }, []);

  const handleScroll = (e) => {
    const whiteSection = document.querySelector("#white-section");
    const rect = whiteSection.getBoundingClientRect();

    if (rect.top <= 0) {
      const navbar = document.querySelector("#navbar");
      navbar.classList.add("nav_color_white");
      navbar.classList.remove("nav_color_black");
      const contactUs = document.querySelector(".contact-us");
      contactUs.classList.add("outlined-button");
    } else {
      navbar.classList.add("nav_color_black");
      navbar.classList.remove("nav_color_white");
      const contactUs = document.querySelector(".contact-us");
      if (contactUs.classList.contains("outlined-button")) {
        contactUs.classList.remove("outlined-button");
      }
    }
  };

  return (
    <>
      <div className="px-32 py-[70px] bg-primary w-full min-h-full flex flex-col items-center text-center ">
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div
            variants={textVariant(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="text-[1.2rem] font-[500] text-textBlue">
              Product UX Discovery to prepare for design the smart way
            </h2>
          </motion.div>
          <motion.div
            variants={textVariant(0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className="heading1 text-white mt-8">
              Collect product insights from every corner with Product UX
              Discovery
            </h2>
          </motion.div>
          <motion.div
            variants={textVariant(0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <p className="paragraph1 text-center max-w-[84%] mx-auto mt-8">
              Product UX Discovery at Merge focuses on optimizing agile solution
              ideation and release, treating each solution as a hypothesis
              within the framework of Scrum. We emphasize design thinking, avoid
              over-asserting certainty, and align our efforts with client
              business objectives through rigorous testing and efficient
              workflows, ensuring a streamlined path to market and success.
            </p>
          </motion.div>
          <motion.div
            variants={textVariant(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <Button
              onClick={() => {
                router.push("/contact");
              }}
              rightIcon={<AiOutlineRight />}
              filled
              className="bg-white mt-[52px] mx-auto  font-bold"
            >
              Book a call
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="grid grid-cols-2 mt-36">
            <motion.div
              variants={textVariant(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <img
                src={`/assets/images/ux-discovery-image-${
                  currentSlide + 1
                }.png`}
                alt="Entrepreneurs"
                className="w-[390px] min-w-[390px] max-w-[390px] rounded-3xl"
              />
            </motion.div>
            <div>
              <h2 className="heading2 text-white text-left">
                {currentSlide === 0
                  ? "Why we perform UX discovery"
                  : "Individual product discovery components"}
              </h2>
              \
              <p className="paragraph1 text-left leading-relaxed">
                {currentSlide === 1
                  ? ` We have discovered that investing our time and effort into the
            product UX discovery saves us a lot of heartache and our clients a
            lot of money by minimizing the number of later issues.`
                  : `Our approach to your Product UX Discovery is distinctly characterized by its full individualization—there's no one-size-fits-all approach here.`}{" "}
                <br />
                {currentSlide === 1
                  ? `Performing product discovery helps us collect as much information as
            possible about our clients and their existing products from various
            angles and sources. The studies of the competition and the audience
            add another layer of certainty to what we have to accomplish next.`
                  : `We offer a customized toolkit, carefully shaped to match your product specific needs and preferences, ensuring a tailored and effective experience that sets the stage for successful outcomes.`}
              </p>
              <div className="flex flex-row justify-start items-center gap-4 mt-8">
                <AiOutlineLeft
                  onClick={() => setCurrentSlide(0)}
                  className="text-foggyGreyLowOpacity hover:text-white cursor-pointer"
                />
                <p className="paragraph1">
                  <span
                    className={`${
                      currentSlide === 0
                        ? "text-white"
                        : "text-foggyGreyLowOpacity"
                    }`}
                  >
                    1
                  </span>
                  /{" "}
                  <span
                    className={`${
                      currentSlide === 1
                        ? "text-white"
                        : "text-foggyGreyLowOpacity"
                    }`}
                  >
                    2
                  </span>
                </p>
                <AiOutlineRight
                  onClick={() => setCurrentSlide(1)}
                  className="text-foggyGreyLowOpacity hover:text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="mt-36 w-full">
            <h2 className="heading2 text-white text-left">
              Steps in our UX discovery process:
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 mt-[64px] gap-4">
              <motion.div
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <div className="rounded-3xl p-6 border-[1px] border-[#1f2934] min-h-[284px] min-w-[232px] w-unset">
                  <p className="rounded-full w-[32px] h-[32px] bg-greyBlack text-greyWhite text-center flex items-center justify-center">
                    1
                  </p>
                  <p className="text-[17px]  leading-[160%] text-foggyGrey text-left mt-4">
                    Onboarding: We facilitate a seamless introduction and
                    integration of users into our project or product development
                    process.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={textVariant(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <div className="rounded-3xl p-6 border-[1px] border-[#1f2934] min-h-[284px] min-w-[232px] w-unset">
                  <p className="rounded-full w-[32px] h-[32px] bg-greyBlack text-greyWhite text-center flex items-center justify-center">
                    2
                  </p>
                  <p className="text-[17px]  leading-[160%] text-foggyGrey text-left mt-4">
                    UX research: We conduct a thorough analysis of competitors
                    and evaluate the user experience to inform design decisions
                    and strategies.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={textVariant(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <div className="rounded-3xl p-6 border-[1px] border-[#1f2934] min-h-[284px] min-w-[232px] w-unset">
                  <p className="rounded-full w-[32px] h-[32px] bg-greyBlack text-greyWhite text-center flex items-center justify-center">
                    3
                  </p>
                  <p className="text-[17px]  leading-[160%] text-foggyGrey text-left mt-4">
                    Scope prioritization: We identify and rank project
                    requirements based on importance and impact to align with
                    business objectives.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={textVariant(0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <div className="rounded-3xl p-6 border-[1px] border-[#1f2934] min-h-[284px] min-w-[232px] w-unset">
                  <p className="rounded-full w-[32px] h-[32px] bg-greyBlack text-greyWhite text-center flex items-center justify-center">
                    4
                  </p>
                  <p className="text-[17px]  leading-[160%] text-foggyGrey text-left mt-4">
                    Scrum set-up: We implement the Scrum framework to organize
                    and manage the development process in an agile and efficient
                    manner.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="grid grid-cols-2 mt-36 items-center justify-center">
            <motion.div
              variants={textVariant(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <img
                src={`/assets/images/ux-discovery-image-3.png`}
                alt="Entrepreneurs"
                className="w-[390px] min-w-[390px] max-w-[390px] rounded-3xl"
              />
            </motion.div>
            <div className="flex flex-col gap-6">
              <h2 className="heading2 text-white text-left">
                Product UX discovery deliverables:
              </h2>
              <p className="paragraph1 text-left leading-relaxed">
                The key deliverables are a comprehensive customer journey map,
                detailed user flows, and a project roadmap broken down into
                phases. Each phase includes a prioritized features list and
                requirements, representing our shared vision of the
                project&apos;s scope and outcome.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* white section */}
      <div
        id="white-section"
        className="px-32 py-[160px] bg-white w-full min-h-full flex flex-col items-start text-start text-black"
      >
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <p className="heading2 text-black">
            Why choose Merge for your Product UX Discovery?
          </p>
          <div className="grid grid-cols-3 items-start justify-start mt-[88px] gap-16">
            <motion.div
              variants={textVariant(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <div>
                <PiTreeStructureLight size={24} className="mb-[16px]" />
                <p className="text-[24px] font-normal tracking-wide">
                  Individual UX discovery strategy
                </p>
                <p className="mt-6 text-[1rem] text-greyBlackOpacity">
                  Our approach involves devising tailored UX discovery
                  strategies that align with your unique product goals and user
                  expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <div>
                <SlBadge size={24} className="mb-[16px]" />
                <p className="text-[24px] font-normal tracking-wide">
                  Individual UX discovery strategy
                </p>
                <p className="mt-6 text-[1rem] text-greyBlackOpacity">
                  Our approach involves devising tailored UX discovery
                  strategies that align with your unique product goals and user
                  expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={textVariant(0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <div>
                <SlLike size={24} className="mb-[16px]" />
                <p className="text-[24px] font-normal tracking-wide">
                  Individual UX discovery strategy
                </p>
                <p className="mt-6 text-[1rem] text-greyBlackOpacity">
                  Our approach involves devising tailored UX discovery
                  strategies that align with your unique product goals and user
                  expectations.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-3 items-start justify-start mt-[88px] gap-16">
            <motion.div
              variants={textVariant(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <div>
                <LuLineChart size={24} className="mb-[16px]" />
                <p className="text-[24px] font-normal tracking-wide">
                  Individual UX discovery strategy
                </p>
                <p className="mt-6 text-[1rem] text-greyBlackOpacity">
                  Our approach involves devising tailored UX discovery
                  strategies that align with your unique product goals and user
                  expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <div>
                <BsChatDots size={24} className="mb-[16px]" />
                <p className="text-[24px] font-normal tracking-wide">
                  Individual UX discovery strategy
                </p>
                <p className="mt-6 text-[1rem] text-greyBlackOpacity">
                  Our approach involves devising tailored UX discovery
                  strategies that align with your unique product goals and user
                  expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={textVariant(0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <div>
                <HiOutlineCheckBadge size={24} className="mb-[16px]" />
                <p className="text-[24px] font-normal tracking-wide">
                  Individual UX discovery strategy
                </p>
                <p className="mt-6 text-[1rem] text-greyBlackOpacity">
                  Our approach involves devising tailored UX discovery
                  strategies that align with your unique product goals and user
                  expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Servies;
