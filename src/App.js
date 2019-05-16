import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import { Bio } from "./components/Bio";
import { timeLine } from "./data/timeLine";
import CalendarToday from "@material-ui/core/SvgIcon/SvgIcon";

class App extends Component {
  render() {
    const displayRow = (timeLine, position) => {
      let row = [];
      for (let i = position; i < position + 4; i++) {
        const previous = i > 0 ? timeLine[i - 1] : undefined;
        row.push(<Bio {...timeLine[i]} previous={previous} />);
      }
      return row;
    };

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
        {/*<h1> Prime Minister timeLine! </h1>*/}

        {timeLine.map((values, i) => {
          if (multiple(i) && i > 11+12) {
            return (
              <Grid
                spacing={8}
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {displayRow(timeLine, i)}
              </Grid>
            );
          }
        })}
      </div>
    );
  }
}

export default App;
