import React,{useContext} from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Wavegreen from "../../img/wavegreen.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { themeContext } from "../../Context";
const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="footer">
      <img src={darkMode?Wave:Wavegreen} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      <a href="https://www.instagram.com/arjunchavan_ac/" style={{textDecoration:"none"}} target="__blank">

        <span style={{color:darkMode?"black":"white"}}>@arjunchavan_ac on </span>
        <div className="f-icons">
          <Insta color={darkMode?"black":"white"} size={"3rem"} />
          {/* <Facebook color="white" size={"3rem"} /> */}
          {/* <Gitub color="white" size={"3rem"} /> */}
        </div>
      </a>
      </div>
    </div>
  );
};

export default Footer;
