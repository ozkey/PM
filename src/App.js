import React, { Component } from "react";
import { Bio } from "./components/Bio";

import Grid from "@material-ui/core/Grid";
import { timeLine } from "./data/timeLine";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Prime Minister timeline! </h1>

        <Grid
          spacing={24}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {timeLine.map(values => {
            return <Bio {...values} />;
          })}
        </Grid>
      </div>
    );
  }
}

export default App;
