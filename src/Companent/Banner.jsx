import { Link } from "react-router-dom";
import "../Sheard/Button/Button.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <div className="md:relative">
      <img
        src="https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxmaXRuZXNzJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="w-full h-[80vh] hidden md:block"
      />

      <div className="md:absolute top-0 w-full h-full  ">
        <div className="w-11/12 mx-auto md:flex justify-between items-center h-full ">
          <div className="md:w-[70%] md:h-[55vh] text-center p-9 md:text-left bg-black/60 rounded-l">
            <h1 className="text-2xl md:text-4xl font-medium text-white">
              Elevate Your Fitness <br /> Monitoring Experience
            </h1>
            <p className="py-3 text-lg md:text-xl text-white">
              {" "}
              BodyPulse Tracker revolutionizes your fitness journey. Monitor
              your activities, track vital stats, and unlock personalized
              insights for a holistic approach to your well-being. Sync, track,
              and excel with BodyPulse Tracker
            </p>
            <Link to="/classAll">
              <button className="btn uppercase">Tap for Wellness</button>
            </Link>
          </div>
          <div className="md:w-[30%] md:h-[55vh] border rounded-r-lg">
          <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1640504409849-da005a55cbd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxmaXRuZXNzJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="h-full w-full rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxmaXRuZXNzJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="h-full w-full rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1566351573868-0b6458790cb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxmaXRuZXNzJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="h-full w-full rounded-lg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1614760395555-ed0db393cb79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI1fHxmaXRuZXNzJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="h-full w-full rounded-lg"/>
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
      </div>
      {/* <div className="md:w-11/12 mx-auto md:flex justify-between items-center">
        <div className="md:w-[50%] text-center px-1 md:text-right">
          <h1 className="text-2xl md:text-4xl font-medium">
            Elevate Your Fitness <br /> Monitoring{" "}
            <span className="text-[#5b1ae9]">Experience</span>
          </h1>
          <p className="py-3 text-lg md:text-xl">
            {" "}
            BodyPulse Tracker revolutionizes your fitness journey. Monitor your
            activities, track vital stats, and unlock personalized insights for
            a holistic approach to your well-being. Sync, track, and excel with
            BodyPulse Tracker
          </p>
          <Link to="/classAll">
            <button className="btn uppercase">Tap for Wellness</button>
          </Link>
        </div>
        <div className="md:w-[50%]">
          <img
            src="https://img.freepik.com/premium-vector/isometric-concept-train-together-reach-your-goal-using-mobile-app-track-your-activity_130740-55.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.973147496.1700747084&semt=ais"
            alt=""
            className="w-full h-[60vh]"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
