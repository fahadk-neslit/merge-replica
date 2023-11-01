"use client";
import Button from "@/components/atoms/button/Button";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motions";
import SaaSLeftImage from "@/assets/svg/saas-platform/LeftSide";
import SaasRightImage from "@/assets/svg/saas-platform/RightSide";
import VideoPlay from "@/components/compounds/VideoPlayer";
import HomePageCircleImage from "@/assets/svg/circle/HomePageCircleImage";
import { useRouter } from "next/navigation";

const data = [
  {
    id: 1,
    longTitle: "Understanding product vision",
    shortTitle: "Product vision",
    description:
      "Understanding business and product vision allows us to take ownership of the product and improve it by leveraging our vast experience and expertise. ",
  },
  {
    id: 2,
    longTitle: "Responsiveness, speed, and flexibility",
    shortTitle: "Responsiveness",
    description:
      "By being proactive in our everyday communication, we stay on top of every problem our partners have. Combining this with effective project management allows us to deliver everything effectively and on time.",
  },
  {
    id: 3,
    longTitle: "Team of product experts",
    shortTitle: "Team",
    description:
      "Our team combines exceptional skills and experience in delivering world-class solutions with deep knowledge of the underlying processes behind digital solutions to bring the best quality to every product.",
  },
];

function Home() {
  const [activeCard, setActiveCard] = useState(0);
  const progressWidth = useRef(0);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (screen.width > 768) {
        handleScroll(e);
      }
    });
    const navbar = document.querySelector("#navbar");
    navbar.classList.add("nav_color_black");
    navbar.classList.remove("nav_color_white");

    const contactUs = document.querySelector(".contact-us");
    if (contactUs.classList.contains("outlined-button")) {
      contactUs.classList.remove("outlined-button");
    }
  }, []);

  const handleScroll = (e) => {
    const whiteSection = document.querySelector("#why-merge");
    const rect = whiteSection.getBoundingClientRect();

    const ourServices = document.querySelector("#our-services");
    const bigCircle = document.querySelector("#big-circle");
    const ourServicesDistance = ourServices.getBoundingClientRect();

    const lampImageTop = document.querySelector("#lamp-image-top");
    const lampImageBottom = document.querySelector("#lamp-image-bottom");
    const leftCircle = document.querySelector("#left-circle");
    const rightCircle = document.querySelector("#right-circle");
    const videoPlayerContainer = document
      .querySelector(".aspect-ratio")
      .getBoundingClientRect();
    const lampDistance = lampImageTop.getBoundingClientRect();

    if (lampDistance.top < 150 && lampDistance.top >= 10) {
      const dist = lampDistance.top / 150;
      lampImageTop.style.opacity = `${dist}`;
      lampImageTop.style.transition = "all 1s ease";
    } else if (lampDistance.top <= -10 && lampDistance.top >= -800) {
      // move circles
      if (lampDistance.top <= -10 && lampDistance.top >= -250) {
        const opcty = 400 / -lampDistance.top;
        leftCircle.style.transform = `translate(0,-150px)`;
        rightCircle.style.transform = `translate(0,-150px)`;
        leftCircle.style.opacity = `0.5`;
        rightCircle.style.opacity = `0.5`;
      }
      if (lampDistance.top <= -80 && lampDistance.top >= -400) {
        const dist = -lampDistance.top - 100;
        const opcty = 600 / -lampDistance.top;

        leftCircle.style.transform = `translate(-${
          videoPlayerContainer.width / 2 - 250
        }px,${dist}px)`;
        rightCircle.style.transform = `translate(${
          videoPlayerContainer.width / 2 - 250
        }px,${dist}px)`;
        leftCircle.style.opacity = `0.5`;
        rightCircle.style.opacity = `0.5`;
        leftCircle.style.transition = "all 0.1s ease";
        rightCircle.style.transition = "all 0.1s ease";
      } else if (lampDistance.top <= -100 && lampDistance.top >= -450) {
        const dist = -lampDistance.top - 170;
        leftCircle.style.transform = `translate(0,${dist}px)`;
        rightCircle.style.transform = `translate(0,${dist}px)`;
        leftCircle.style.opacity = `0.3`;
        rightCircle.style.opacity = `0.3`;
        leftCircle.style.transition = "all 1s ease";
        rightCircle.style.transition = "all 1s ease";
      } else {
        leftCircle.style.opacity = `0`;
        rightCircle.style.opacity = `0`;
        leftCircle.style.transition = "all 1s ease";
        rightCircle.style.transition = "all 1s ease";
      }
      // bottom lamp
      if (lampDistance.top <= -510 && lampDistance.top >= -800) {
        const dist = 700 / -lampDistance.top;
        lampImageBottom.style.opacity = `${dist}`;
        lampImageBottom.style.transition = "all 1s ease";
      }
    } else {
      lampImageTop.style.opacity = `1px`;
      lampImageTop.style.transition = "all 2s ease";
      lampImageBottom.style.opacity = `0`;
      lampImageBottom.style.transition = "all 2s ease";
      // circles
      leftCircle.style.transform = `translateX(0)`;
      rightCircle.style.transform = `translateX(0)`;
      leftCircle.style.opacity = `0`;
      rightCircle.style.opacity = `0`;
      leftCircle.style.transition = "all 2s ease-in-out";
      rightCircle.style.transition = "all 2s ease-in-out";
    }

    // our services
    if (ourServicesDistance.top < 10) {
      const dist = -ourServicesDistance.top / 120;
      bigCircle.style.opacity = `${dist > 0.4 ? 0.4 : dist}`;
      bigCircle.style.transition = "all 0.5s ease";
    } else {
      bigCircle.style.opacity = `0.1`;
      bigCircle.style.transition = "all 1s ease";
    }
    // navbar
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
    <div>
      <div className="py-[70px] bg-primary w-full min-h-full flex flex-col items-center">
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          <div className="w-screen relative min-h-[1700px]">
            <img
              src={`/assets/images/lamp.png`}
              alt="Entrepreneurs"
              id="lamp-image-top"
              className="w-full absolute top-[40px] left-0 right-0"
            />
            <div className="absolute top-[935px] left-0 right-0">
              <img
                src={`/assets/images/lamp.png`}
                alt="Entrepreneurs"
                id="lamp-image-bottom"
                className="w-full "
                style={{
                  transform: "scaleY(-1) ",
                  opacity: "1",
                }}
              />
            </div>
            {/* centered imgs */}
            <img
              src={`/assets/images/bg-blue.png`}
              alt="Entrepreneurs"
              id="left-circle"
              className="w-[100%] opacity-0 absolute top-[45px] right-0 left-0 "
            />
            <img
              src={`/assets/images/bg-blue.png`}
              alt="Entrepreneurs"
              id="right-circle"
              className="w-[100%] opacity-0 absolute top-[45px] left-0 right-0"
            />
            {/* centered imgs end */}

            <div className="absolute top-0 bottom-0 left-0 right-0">
              <div className="max-w-[1200px] mx-auto">
                <h4 className="heading1 text-greyWhite text-center">
                  UX first SaaS and fintech
                </h4>
                <p className="paragraph1 text-center mt-[24px]">
                  We assist startups in building software, experimenting with
                  new features,
                  <br /> and bringing their product vision to life.
                </p>
                <Button
                  onClick={() => {
                    router.push("/contact");
                  }}
                  rightIcon={<AiOutlineRight />}
                  filled
                  className="bg-white mt-[52px] mx-auto  font-bold"
                >
                  Let&apos;s talk
                </Button>
                <div className="px-20">
                  <div className="hidden md:block mt-[136px] aspect-ratio mx-auto border-[15px] border-[#171a1e] rounded-3xl bg-greyWhite overflow-hidden">
                    <VideoPlay />
                  </div>
                </div>
              </div>

              {/* <HomePageCircleImage /> */}

              <div
                id="our-services"
                className="w-[1026px] mx-auto  pt-[160px] relative"
              >
                <div
                  id="big-circle"
                  className="w-full opacity-0 absolute top-[350px] left-0 right-0"
                >
                  <HomePageCircleImage />
                </div>
                <h2 className="heading1 text-greyWhite text-center ">
                  Our services
                  <span className="text-foggyGrey opacity-50 ">
                    {" "}
                    and capabilities
                  </span>
                </h2>
                <div>
                  <div className="grid grid-cols-2 gap-1 mt-20">
                    <button className="group min-h-[260px] px-[40px] flex flex-col justify-center items-center rounded-3xl black_glass_morphism">
                      <Button
                        rightIcon={
                          <AiOutlineRight className="hidden group-hover:block" />
                        }
                        className="text-bold text-foggyGrey mx-auto group-hover:text-secondary custom-transition border-none"
                      >
                        Idea
                      </Button>
                      <h3 className="heading2 text-white text-center">
                        MVP development
                      </h3>
                      <p className="overflow-hidden h-[0px] group-hover:h-[120px] paragraph1 text-foggyGrey text-center mt-[16px] custom-transition">
                        Validate concepts and bring them to life with our
                        approach that aims to bring your product to market cost
                        and time efficiently.
                      </p>
                    </button>
                    <button className="group min-h-[260px] px-[40px] flex flex-col justify-center items-center rounded-3xl black_glass_morphism">
                      <Button
                        rightIcon={
                          <AiOutlineRight className="hidden group-hover:block" />
                        }
                        className="text-bold text-foggyGrey mx-auto group-hover:text-secondary custom-transition border-none"
                      >
                        Design
                      </Button>
                      <h3 className="heading2 text-white text-center">
                        UI Design
                      </h3>
                      <p className="overflow-hidden h-[0px] group-hover:h-[120px] paragraph1 text-foggyGrey text-center mt-[16px] custom-transition">
                        Enhance user satisfaction and reduce churn rates of your
                        product with our UX-focused expert design team.
                      </p>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-1">
                    <button className="group min-h-[260px] px-[40px] flex flex-col justify-center items-center rounded-3xl black_glass_morphism">
                      <Button
                        rightIcon={
                          <AiOutlineRight className="hidden group-hover:block" />
                        }
                        className="text-bold text-foggyGrey mx-auto group-hover:text-secondary custom-transition border-none"
                      >
                        Development
                      </Button>
                      <h3 className="heading2 text-white text-center">
                        Webflow Development
                      </h3>
                      <p className="overflow-hidden h-[0px] group-hover:h-[120px] paragraph1 text-foggyGrey text-center mt-[16px] custom-transition">
                        Get a visually stunning and seamlessly functional
                        website that will captivate your audience, convert, and
                        drive business growth.
                      </p>
                    </button>
                    <button className="group min-h-[260px] px-[40px] flex flex-col justify-center items-center rounded-3xl black_glass_morphism">
                      <Button
                        rightIcon={
                          <AiOutlineRight className="hidden group-hover:block" />
                        }
                        className="text-bold text-foggyGrey mx-auto group-hover:text-secondary custom-transition border-none"
                      >
                        Custom Staffing
                      </Button>
                      <h3 className="heading2 text-white text-center">
                        Dedicated Teams
                      </h3>
                      <p className="overflow-hidden h-[0px] group-hover:h-[120px] paragraph1 text-foggyGrey text-center mt-[16px] custom-transition">
                        Custom-built teams meeting the unique needs of your
                        business and ensuring maximum efficiency.
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Things we excel at */}
        <div className="max-w-[1200px] mx-auto p-4">
          <h2 className="heading1 text-greyWhite text-left mt-[160px]">
            Things
            <span className="text-foggyGrey opacity-50 "> we excel at</span>
          </h2>
          <p className="text-foggyGrey mt-4 paragraph1">
            Through years of experience and dozens of successful projects,
            we&apos;ve <br />
            honed our expertise across diverse industries and fields:
          </p>
          <div className="flex flex-row gap-8 mt-20 justify-between">
            <div className="bg-[#10161D] rounded-3xl relative">
              <div className="absolute top-8 left-10 z-20">
                <h3 className="heading2 text-greyWhite">SaaS Platform</h3>
                <p className="paragraph1 text-foggyGreyLowOpacity">
                  From product MVP to implementing new features
                </p>
              </div>
              <SaaSLeftImage />
            </div>
            <div className="bg-[#10161D] rounded-3xl relative">
              <div className="absolute top-8 left-10 z-20">
                <h3 className="heading2 text-greyWhite">Fintech</h3>
                <p className="paragraph1 text-foggyGreyLowOpacity">
                  Digital finance transformation
                </p>
              </div>
              <SaasRightImage />
            </div>
          </div>
        </div>
      </div>
      {/* White section starts */}
      <section id="why-merge">
        <div className="max-w-[1200px] mx-auto p-4 py-36">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-8">
              <h2 className="heading1 text-primary text-left ">
                Why
                <span className="text-foggyGrey"> Merge</span>
              </h2>
              <p className="paragraph2">
                We share a passion for excellent products and approach every
                problem with a dedication to finding the best solution possible.
              </p>
              <Button
                onClick={() => {
                  router.push("/contact");
                }}
                filled
                rightIcon={<AiOutlineRight />}
                className="bg-primary text-greyWhite max-w-[150px] mt-4"
              >
                Book a call
              </Button>
            </div>
            <div className="flex justify-end">
              <img
                src={`/assets/images/new-home-why-merge-${activeCard + 1}.png`}
                alt="Entrepreneurs"
                className="w-[250px] min-w-[250px] max-w-[250px] rounded-full custom-transition"
              />
            </div>
          </div>
          <div className="w-full  flex flex-row gap-[34px] mt-14">
            {data.map((item, index) => {
              return (
                <button
                  onClick={() => setActiveCard(index)}
                  key={index}
                  className={`group min-w-[180px] flex flex-col items-start`}
                >
                  <div className="h-[2px] w-[100%] rounded-full bg-greyWhite relative">
                    {activeCard === index && (
                      <motion.div
                        className="h-[2px] w-[100%] rounded-full bg-greyWhite relative"
                        initial={{ width: 0 }} // Initial width is 0
                        animate={{ width: "100%" }} // Animate to 100% width
                        transition={{ duration: 10 }} // Animation duration in seconds
                        onAnimationComplete={() =>
                          setActiveCard(activeCard < 2 ? activeCard + 1 : 0)
                        }
                      >
                        <div
                          className={`absoulute top-0 left-0 transition active-transition
                      `}
                        />
                      </motion.div>
                    )}
                  </div>
                  <h3
                    className={`text-[18px] font-medium tracking-normal ${
                      activeCard === index
                        ? "text-greyBlack"
                        : "text-foggyGreyLowOpacity"
                    } mt-4 `}
                  >
                    0{item.id}
                  </h3>
                  <h3
                    className={`text-[24px] font-medium tracking-wide ${
                      activeCard === index
                        ? "text-greyBlack"
                        : "text-foggyGreyLowOpacity group-hover:text-secondary"
                    } mt-4`}
                  >
                    {activeCard === index ? item.longTitle : item.shortTitle}
                  </h3>
                  <p className="paragraph2 text-left mt-4">
                    {activeCard === index ? item.description : ""}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
