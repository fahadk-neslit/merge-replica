import * as React from "react";
const SvgComponent = (props) => (
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
    <path d="M9.405 11.43H7.697c-.269 0-.365-.097-.365-.367V8.978c0-.267.102-.37.367-.37h1.706V7.096c0-.683.123-1.337.47-1.936a2.85 2.85 0 0 1 1.535-1.275 3.795 3.795 0 0 1 1.315-.218l1.69.001c.243 0 .35.107.35.351.002.654.002 1.308 0 1.961 0 .247-.103.346-.35.348-.462.005-.925.002-1.386.02-.466 0-.711.228-.711.71-.011.51-.005 1.022-.005 1.55h1.99c.281 0 .378.097.378.38l-.001 2.074c0 .279-.09.368-.374.368h-1.998v5.594c0 .298-.094.393-.388.393H9.767c-.26 0-.361-.1-.361-.36V11.43z" />
  </svg>
);
export default SvgComponent;
