import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./images";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SlickSliderThumbnails = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <FontAwesomeIcon className="next-slick-arrow" icon={faChevronRight} />
      </div>
    ),
    prevArrow: (
      <div>
        <FontAwesomeIcon className="prev-slick-arrow" icon={faChevronLeft} />
      </div>
    )
  };
  return (
    <>
      <Container>
        <Typography m="auto" variant="overline">
          Simple Slider with controls
        </Typography>
        <Slider {...settings}>
          {Images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="img" />
              <Typography m="auto" variant="overline">
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default SlickSliderThumbnails;
