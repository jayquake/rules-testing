import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./images";
import Typography from "@mui/material/Typography";
import { Container, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/Card";

const SimpleSliderSlick = () => {
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
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Simple Slick Slider With Controls
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>

              <Grid item xs={12}>
                <Slider {...settings}>
                  {Images.map((item) => (
                    <Container key={item.id}>
                      <Card sx={{ width: "110%" }}>
                        <CardMedia
                          component="img"
                          alt={item.alt}
                          height="140"
                          width="100%"
                          src={item.src}
                        />
                      </Card>
                    </Container>
                  ))}
                </Slider>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SimpleSliderSlick;
