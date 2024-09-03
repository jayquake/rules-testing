import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Images2 from "./images2";
import Typography from "@mui/material/Typography";
import { Container, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/Card";

const SlickLanguageSlider = () => {
  var settings = {
    dots: true
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Slick Slider Different Language Controls
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>

              <Grid item xs={12}>
                <Slider {...settings}>
                  {Images2.map((item) => (
                    <Container key={item.id}>
                      <Card sx={{ width: "110%" }}>
                        <CardMedia
                          component="img"
                          alt={item.alt}
                          height="140"
                          width="100%"
                          src={item.download_url}
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

export default SlickLanguageSlider;
