import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@material-ui/core";
export default function Cards({ ...props }) {
  const classes = props.class;
  return (
    <>
      <Container className={classes.cardGrid} maxWidth="lg"></Container>
      <Container className={classes.cardGrid} maxWidth="lg"></Container>
      <Container className="ok" maxWidth="md">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">What we do</Typography>
            <Typography variant="body1">
              We eat african childran and eat senior chines and give to
              whitepeople liek jafery cumstains. We have been douing dis sance
              12 B.C
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image="https://avatars0.githubusercontent.com/u/70341512?s=800&u=29827cae1f63eabd92093a1bc717727190667b01&v=4"
                title="ok"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
