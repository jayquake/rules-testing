import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import SimpleSliderSlick from "./slickSliderSimple";
import "./slider.css";
import MultipleItemsSlider from "./multipleItemSlider";
import SlickLanguageSlider from "./reactSlick";

export default function CarouselsSlick() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Slick Slider Carousels
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <SimpleSliderSlick></SimpleSliderSlick>
      <MultipleItemsSlider></MultipleItemsSlider>
      <SlickLanguageSlider></SlickLanguageSlider>
    </>
  );
}
