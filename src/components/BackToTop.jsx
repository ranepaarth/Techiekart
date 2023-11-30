import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <span className="fixed flex justify-end w-full bottom-10 right-2 h-5 text-4xl z-0 cursor-pointer text-purple-500">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className="hover:scale-110"
      />
    </span>
  );
};

export default BackToTop;
