import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import { Bio } from "./components/Bio";
import { timeLine } from "./data/timeLine";

class App extends Component {
  render() {
    const multiple = (x, y = 4) => {
      //x and y are both integers
      var remainder = x % y;
      if (remainder == 0) {
        //x is a multiple of y
        return true;
      } else {
        return false;
      }
    };

    return (
      <div className="App">
        <CssBaseline />
        {/*<h1> Prime Minister timeline! </h1>*/}

        <Grid
          spacing={24}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {timeLine.map((values, i) => {
              if (multiple(i)){
                  return <Bio {...values} />;
              }else{
                  return <Bio {...values} />;
              }

          })}
        </Grid>
      </div>
    );
  }
}

export default App;
