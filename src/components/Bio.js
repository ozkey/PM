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

const styles = {
  bigAvatar: {
    marginTop: 10,
    marginBottom: -20,
    width: 100,
    height: 100
  }
};
export const _Bio = ({ classes, name, start, end, image, party }) => {
  return (
    <Grid xs={3} item>
      <Card>
        <CardActionArea>
          <Grid container justify="center" alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={image}
              className={classes.bigAvatar}
            />
          </Grid>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography component="p">
              {start}
              <br />
              {end}
              <br />
              {party}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export const Bio = withStyles(styles)(_Bio);
