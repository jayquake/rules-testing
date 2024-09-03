import React, { Component } from "react";
import { Container, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/Card";
import "./slider.css";
import Images from "./images";

const MultipleItemSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Multi Slider Automatic
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
                          src="https://picsum.photos/seed/picsum/900/900"
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
export default MultipleItemSlider;
