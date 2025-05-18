import React1 from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "./Asset/pic1.png";
import pic2 from "./Asset/pic2.png";
import pic3 from "./Asset/pic3.png";
import pic4 from "./Asset/pic4.png";
const UseCarousel = () => {
  return (
    <>
      <Carousel id="car">
        <Carousel.Item interval={4000}>
          <img src={pic1} alt="pic1" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={pic2} alt="pic2" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={pic3} alt="pic3" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={pic4} alt="pic4" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
      <br></br>
    </>
  );
};
export default UseCarousel;
