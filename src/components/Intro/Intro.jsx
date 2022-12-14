import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import deepanshu from "../../img/deepanshu.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
// import Github from "../../img/github.png";
// import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Instagramgreen from "../../img/instagramgreen.png";
import Youtube from '../../img/youtube.png'
import Youtubegreen from '../../img/youtubegreen.png'
import Telegram from '../../img/telegram.png'
import TelegramRed from '../../img/telegramRed.png'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span className="mobile-dp"><img src={deepanshu} alt="" /></span>
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Arjun Chavan</span>
          <span style={{fontWeight:"600"}}>
          A leading Affiliate Marketer at LeadsGuru and a Digital creator
          </span>
        </div>
        <a className="button n-button" href="tel:+917028498179 ">WhatsApp me on &nbsp;+917028498179</a>
        <div className="social-icons">
        <a href="https://www.instagram.com/arjunchavan_ac/" target="__blank" className="instaTag">
          <img src={darkMode?Instagram:Instagramgreen} alt="Instagram" height="30px" style={{padding:"7px"}}/>@arjunchavan_ac
          </a>
        <a href="https://www.youtube.com/channel/UCKh9ej7-7oYzMS4Ctrq8EmQ" target="__blank" className="instaTag">
          <img src={darkMode?Youtube:Youtubegreen} alt="Youtube" height="30px" style={{padding:"7px"}}/>Arjun Chavan
          </a>
        <a href="https://t.me/arjunchavanofficial" target="__blank" className="instaTag">
          <img src={darkMode?Telegram:TelegramRed} alt="Telegram" height="30px" style={{padding:"7px"}}/>@arjunchavanofficial
          </a>
        </div>
        {/* social icons */}
        <div className="i-icons">
          {/* <img src={Github} alt="" /> */} 
          {/* <img src={LinkedIn} alt="" /> */}

        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Affiliate" text2="Marketer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Digital" text2="Creator" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
