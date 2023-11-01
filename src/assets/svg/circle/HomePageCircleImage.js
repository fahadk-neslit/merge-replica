import * as React from "react";
const HomePageCircleImage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={988}
    height={488}
    fill="none"
    className="Light_svg__w1z6U"
    data-gsap="svg-element-big-services"
    style={{ opacity: 1 }}
    {...props}
  >
    <g filter="url(#a)">
      <ellipse
        cx={494}
        cy={244}
        fill="url(#b)"
        fillOpacity={1}
        rx={344}
        ry={94}
      />
    </g>
    <defs>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 88.1598 -344 0 494 244)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.005} stopColor="#079FFC" />
        <stop offset={1} stopColor="#3532C1" />
      </radialGradient>
      <filter
        id="a"
        width={988}
        height={488}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_23002_5753"
          stdDeviation={75}
        />
      </filter>
    </defs>
  </svg>
);
export default HomePageCircleImage;
