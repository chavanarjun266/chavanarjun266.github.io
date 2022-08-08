import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: profilePic1,
      review:
        "Hey Arjun Brother Look At My Happiness Finally Mene iphone 13 Pro Purchase karliya Self Earned Aaj agar aap ne starting se lake abhi tak support and guidance nahi diya hota to aai me yaha nahi Pohch ta Thank You So Much Arjun Always Supporting Me"
    },
    {
      img: profilePic2,
      review:
        "Sir mujhe Barosa nahi tha khud par ki me 30 Thousand Se bhi Jada ki Earning Kar saku At Age 17 I am Very Happy Mere parents mere upar bahot proud feel kar rahe hai Arjun sir aap ne bahut jada support kiya hai thank You so Muchi",
    },
    {
      img: profilePic3,
      review:
        "Mene jab business ki shuruaat Ki thi 0 knowledge 0 experience yaha tak mujhe kuch bhi nahi aata tha Arjun sir aapke Support and personal Mentorship ki wajese aaj mene mera milestone complete kar liye Aapke jaise Mentor kahi nahi milega Thank You So much For your Support!"
    }
    // {
    //   img: profilePic4,
    //   review:
    //     "Hello Deepanshu Bro! 50K Done Muje aaj bhi yad hay,aapne usse waqth muje help ki thi jabh may apke saath work nahi karta tha,You use to remove time for me guide me,whenIneeded someone's guidence!Aap iss business may mere liye inspiration ho!Apke aisa bro,mentor aur sponsor milna sab ke nasibh may nahi hota greatful to work with you!Thank you for supporting me!God Bless You!"
    // },
    // {
    //   img: profilePic5,
    //   review:
    //     "So Finally 2 Lakh Done Thank You So Much Everyone For Supporting Me it would be Not Possible Without Your Help, Support, Gudiance, Many Many Thanks to Mr. Deepanshu Sain Sir who helped me and Supported Me to achieve this milestone"
    // }
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>My team </span>
        <span>Earns </span>
        <span style={{ color: darkMode ? "white" : "" }}>with me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span className="review" style={{ color: darkMode ? "#bcbcbc" : "" }}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
