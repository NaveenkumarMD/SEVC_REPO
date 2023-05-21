import React, { useRef } from "react";
import { Menu, Layout, Button, Carousel, message } from "antd";
import theme from "../../css/theme.json";
import "../../css/landing.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react";
import Scrollingbanner from "../Scrollingbanner";
const { Header, Content } = Layout;

export default function Landing() {
  const [pauseOnfocus, setpauseonfocus] = useState(true)
  const carouselRef = useRef(null);
  const handleclick = () => {
    setTimeout(() => {
      setpauseonfocus(false)
    }, [300])

  }
  const handleleave = () => {
    setpauseonfocus(true)
    carouselRef.current.next()
  }
  return (
    <Layout>
      <Navbar />
      <Content style={{
        backgroundColor: theme.colors.primaryBlack,
      }}>
        <Scrollingbanner />
        <Carousel autoplay={pauseOnfocus} infinite={true}
          autoplaySpeed={2000}
          pauseOnHover={false}
          pauseOnFocus={false}
          effect="scrollx"
          ref={carouselRef}
        >

<div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/launchposter_wide.webp")}/>
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/sevc2023_rushindusk.webp")}/>
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/GIO6.webp")}/>
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/Rulebook and General Engineering Test Poster- For Website.webp")} />
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/sevc22_winner.webp")} />
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/sevc22_runnerup_1st.webp")} />
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/sevc22_runnerup_2nd.webp")}  />
          </div>
          <div className="carousel-image" onMouseDown={handleclick} onMouseLeave={handleleave} onMouseUp={handleleave}>
            <img src={require("../../assets/landing/shutbug22.webp")} />
          </div>
        </Carousel>
      </Content>
      <Footer />
    </Layout>
  );
}
