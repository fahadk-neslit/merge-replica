"use client";
import React, { useState } from "react";
import Button from "../atoms/button/Button";
import { useRouter } from "next/navigation";
import FooterLogo from "@/assets/svg/footer/footerLogo";
import LinkedInLogo from "@/assets/svg/footer/linkedIn";
import DribbleLogo from "@/assets/svg/footer/dribble";
import FaceBookLogo from "@/assets/svg/footer/facebook";

function Footer() {
  // useRouter
  const router = useRouter();

  return (
    <div>
      <div className="bg-lightSilverGray">
        <div className="mx-auto max-w-[1200px] p-12">
          <div className="grid  grid-cols-2 sm:grid-cols-4 gap-12">
            <div>
              <FooterLogo />
              <a
                className="logotype"
                href="https://clutch.co/profile/merge-development?utm_source=widget&amp;utm_medium=1&amp;utm_campaign=widget&amp;utm_content=logo&amp;utm_term=merge.rocks"
                target="_blank"
                data-ga-action="logo_click"
              ></a>
            </div>

            <div>
              <h4 className="text-foggyGreyLowOpacity font-medium">Services</h4>
              <div className="mt-6">
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Front-end Development
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Dedicated Teams
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Hiring
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Product UX discovery
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    UI/UX Design
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Marketing & Branding
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Webflow Development
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    MVP Development
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-foggyGreyLowOpacity font-medium">
                Specialization
              </h4>
              <div className="mt-6">
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    SaaS Platforms
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Mobile Apps
                  </a>
                </p>
                <h4 className="text-foggyGreyLowOpacity font-medium my-6">
                  Industries
                </h4>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Fintech
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    AI Development
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-foggyGreyLowOpacity font-medium">Company</h4>
              <div className="mt-6">
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    About Us
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Careers
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Case Studies
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Blog
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Library
                  </a>
                </p>
                <p className="mb-3">
                  <a
                    href="#"
                    className="text-sm font-light mb-3 hover:text-textBlue transition duration-400"
                  >
                    Academy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-midNightBlue">
        <div className="mx-auto max-w-[1200px] h-[88px]">
          <div className="flex justify-between items-center h-full flex-wrap p-4">
            <div>
              <p className="text-foggyGreyLowOpacity text-[14px]">
                © 2023, Merge Development
              </p>
            </div>
            <div className="flex gap-4">
              <p className="text-foggyGreyLowOpacity text-[14px] whitespace-nowrap">
                HTML Sitemap
              </p>
              <p className="text-foggyGreyLowOpacity text-[14px] whitespace-nowrap">
                Privacy Policy
              </p>
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
