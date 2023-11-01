import * as React from "react";
const LinkedInLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="Footer_logo__EaWBg"
    data-name="LogoText"
    data-testid="icon"
    viewBox="0 0 24 24"
    height={28}
    fill="#7c8698"
    onMouseEnter={(e) => e.target.setAttribute("fill", "#ffffff")}
    onMouseLeave={(e) => e.target.setAttribute("fill", "#7c8698")}
    {...props}
  >
    <path
      d="M6.271 4.583H6.27c-.449 0-.872.175-1.191.491a1.676 1.676 0 0 0 .01 2.392 1.642 1.642 0 0 0 1.204.475c.42 0 .835-.171 1.145-.473a1.67 1.67 0 0 0 .508-1.202 1.668 1.668 0 0 0-.492-1.188 1.663 1.663 0 0 0-1.183-.495zm.827 3.777H5.403a.622.622 0 0 0-.61.63v7.335c0 .34.287.627.628.627h1.677a.63.63 0 0 0 .629-.614v-7.35a.637.637 0 0 0-.63-.628zm6.712-.21h.441c1.63 0 2.908 1.307 2.908 2.975v5.41c0 .207-.212.419-.42.419h-2.096c-.207 0-.419-.212-.419-.42V12.04c0-.385-.093-.665-.285-.857a1.187 1.187 0 0 0-.87-.354c-.645.007-1.15.547-1.15 1.229v4.518c0 .223-.222.378-.42.378H9.193c-.198 0-.419-.156-.419-.378V8.753c0-.221.225-.393.42-.393h2.095c.208 0 .42.211.42.419v.29c.506-.572 1.287-.919 2.1-.919z"
      clipRule="evenodd"
    />
  </svg>
);
export default LinkedInLogo;
