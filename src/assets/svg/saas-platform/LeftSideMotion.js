import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedSVG = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={603}
      height={381}
      style={{
        width: "100%",
        height: "100%",
        transform: "translate3d(0,0,0)",
        contentVisibility: "visible",
      }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setIsHovered(!isHovered)}
    >
      <motion.path
        initial={{ fill: "gray" }}
        animate={{ fill: isHovered ? "red" : "gray" }}
        transition={{ duration: 0.3 }}
      >
        <path fill="#C12DA4" d="M464.36 443.5v261.636H125.88V443.5h338.48z" />
        <path
          fillOpacity={0}
          stroke="#141C36"
          strokeWidth={0}
          d="M464.36 443.5v261.636H125.88V443.5h338.48z"
        />
      </motion.path>
    </motion.svg>
  );
};

export default AnimatedSVG;
