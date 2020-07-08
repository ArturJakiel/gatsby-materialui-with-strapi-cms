/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "20px 10px",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={props.link}>
        <>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {props.lead}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="caption" color="textSecondary" component="p">
              Posted by:{props.author} on {props.date}
            </Typography>
          </CardContent>
        </>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.link}>
          Read More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
