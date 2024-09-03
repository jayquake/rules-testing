import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Index() {
  return (
    <>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                accessFlow Auditor Rules
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {/*Rules Carousels start*/}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Rules - Carousels
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>

              <Grid item xs={12}>
                <Stack direction="row" spacing={1}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Carousels/Slick",
                        pageName: "Slick Carousels"
                      }}
                      variant="outlined"
                    >
                      Carousel Pausing
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button size="large" variant="outlined">
                      Carousel Pagnation
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button size="large" variant="outlined">
                      Carousel Arrows
                    </Button>
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button size="large" variant="outlined">
                      Carousel Labeling
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button size="large" variant="outlined">
                      Live Carousels
                    </Button>
                  </Grid>
                </Stack>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {/*Rules Keyboard start*/}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                Rules - Keyboard
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>

              <Grid item xs={12}>
                <Stack direction="row" spacing={1}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Keyboard/NoninteractiveTabindex",
                        pageName: "Non Interactive Tab Index"
                      }}
                      variant="outlined"
                    >
                      Non Interactive Tab Index
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Keyboard/BrokenTabIndex",
                        pageName: "Broken Tab Index"
                      }}
                      variant="outlined"
                    >
                      Broken Tab Index
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Keyboard/SkipLinks",
                        pageName: "Skip Links"
                      }}
                      variant="outlined"
                    >
                      Skip Links
                    </Button>
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Keyboard/FakeHiddenInteractive",
                        pageName: "Fake Hidden Interactive"
                      }}
                      variant="outlined"
                    >
                      Fake Hidden Interactive
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Keyboard/PopupFocus",
                        pageName: "PopupFocus"
                      }}
                      variant="outlined"
                    >
                      Popup Focus
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Keyboard/KeyboardHoverables",
                        pageName: "Keyboard Hoverables"
                      }}
                      variant="outlined"
                    >
                      Keyboard Hoverables
                    </Button>
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Keyboard/NoticeableFocus",
                        pageName: "Noticeable Focus"
                      }}
                      variant="outlined"
                    >
                      Noticeable Focus
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Keyboard/EnterClickability",
                        pageName: "Enter Clickability"
                      }}
                      variant="outlined"
                    >
                      Enter Clickability
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Button
                      size="large"
                      component={Link}
                      to={{
                        pathname: "/Keyboard/ScrollFocus",
                        pageName: "Scroll Focus"
                      }}
                      variant="outlined"
                    >
                      Scroll Focus
                    </Button>
                  </Grid>
                </Stack>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
