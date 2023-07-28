// import React from 'react'
// import { color } from "framer-motion";
import { styles } from "../styles";

import { IconContext } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} footer w-full h-20 flex items-center py-5 bottom-0 z-20 border-t-2 bg-white dark:bg-primary`}
    >
      <p className="flex flex-1 justify-start text-[1.1rem] items-center text-black dark:text-secondary">
        Created with &#10084;
      </p>
      <div className="flex py-4 cursor-pointer">
        <IconContext.Provider
          // className="cursor-pointer px-4 z-50"
          value={{
            color: "white",
            size: 30,
            style: {
              marginRight: "0.5em",
              color: "#aaa6c3",
              cursor: "pointer",
              borderRadius: "50%",
              borderColor: "#aaa6c3",
            },
          }}
        >
          <Link
            to="https://www.linkedin.com/in/pranay-sanjule-b36020191/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
          <Link to="https://github.com/PranaySanjule" target="_blank">
            <BsGithub />
          </Link>
          <Link to="https://twitter.com/PranaySanjule" target="_blank">
            <BsTwitter />
          </Link>
        </IconContext.Provider>
      </div>
      <p className="copyright flex flex-1 text-[1.1rem] justify-end items-center text-black dark:text-secondary">
        Copyright &#169; pranaysportfolio | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
