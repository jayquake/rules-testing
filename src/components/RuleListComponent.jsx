import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Component } from "react";

class RuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.filterData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.criteria !== prevProps.criteria) {
      this.filterData();
    }
  }

  filterData() {
    const { list, criteria } = this.props;
    const filteredList = list.filter((item) => item.criteria === criteria);
    this.setState({ data: filteredList });
  }

  render() {
    return (
      <>
        {this.state.data.map((item, index) => (
          <Grid key={index} item xs={12}>
            <Stack direction="row" spacing={1}>
              <Grid item xs={2} sm={4} md={4}>
                <Button
                  size="large"
                  color="info"
                  component={Link}
                  to={{
                    pathname: "/",
                    pageName: ""
                  }}
                >
                  {item.name}
                </Button>
              </Grid>
            </Stack>
          </Grid>
        ))}
      </>
    );
  }
}

export default RuleList;
