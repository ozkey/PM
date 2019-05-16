import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import CalendarToday from "@material-ui/icons/CalendarToday";
import moment from "moment";

const styles = {
  bigAvatar: {
    marginTop: 20,
    marginBottom: -15,
    width: 60,
    height: 60
  },
  card: {
    height: 300,
    "page-break-inside": "avoid",
    "page-break-before": "always",

    "page-break-after": "always",
    "break-after": "avoid-region"
  }
};
export const _Bio = ({ classes, name, start, end, image, party, previous }) => {
  const m_start = moment(start);
  const m_end = moment(end);
  const years = m_end.diff(m_start, "year");
  const months = m_end.diff(m_start, "months") - 12 * years;
  let blocks = 3;

  const displayMonths = months => {
    let icons = [];
    for (let i = 0; i < months; i++) {
      icons.push(<CalendarToday color="action" style={{ fontSize: 10 }} />);
    }
    return icons;
  };

  const displayYears = years => {
    let icons = [];
    for (let i = 0; i < years; i++) {
      icons.push(<CalendarToday />);
    }
    return icons;
  };

  return (
    <Grid xs={blocks} item>
      <Card className="noBreak" className={classes.card}>
        <CardActionArea>
          <Grid container justify="center" alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={image}
              className={classes.bigAvatar}
            />
          </Grid>
          <CardContent>
            <Typography variant="subtitle2" component="caption">
              {name}
            </Typography>
            <hr />
            <Typography component="p">{party}</Typography>
            <Typography component="p">
              {start}
              <br />
              {end}
            </Typography>
            <hr />
            <Typography component="caption">
              {years > 0 ? <span> {years} years </span> : undefined}
              {months > 0 ? <span> {months} months </span> : undefined}
            </Typography>

            <hr />
            {previous && (
              <div>
                Replaces:
                <Avatar alt="Remy Sharp" src={previous.image} />
                <Typography component="p">{previous.name}</Typography>
              </div>
            )}

            {/*{displayYears(years)}*/}
            {/*{displayMonths(months)}*/}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export const Bio = withStyles(styles)(_Bio);
