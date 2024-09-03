import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { CardHeader, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import data from "./auditrules.json";
import { CodeSection } from "react-code-section-lib";
import { Component } from "react";

function RuleCard({ rule }) {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography m="auto" variant="overline">
                {rule.id} {rule.name}
              </Typography>
              <Divider sx={{ mb: 2 }}></Divider>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Typography sx={{ mb: 1.5, pt: 1.5 }} variant="overline">
                  {rule.shortDescription}
                </Typography>
              </Grid>
              <CardContent>
                <Typography sx={{ mb: 1.5, pt: 1.5 }} variant="">
                  {rule.issueDescription}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, pt: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography variant="body2">
                  Issue Resolution:
                  <pre>
                    <CodeSection>{rule.issueResolution}</CodeSection>
                  </pre>
                </Typography>
              </CardContent>
              <Divider sx={{ mb: 2 }}></Divider>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

class Rules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    const rule_list = this.state.data.map((e) => {
      return (
        <Container key={e.id} maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <RuleCard rule={e} />
        </Container>
      );
    });
    return (
      <>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Typography m="auto" variant="overline">
                  Auditor Rules
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        {rule_list}
      </>
    );
  }
}
console.log(Rules[24]);
export default Rules;
