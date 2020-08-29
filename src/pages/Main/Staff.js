import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
export default function Staff({ ...props }) {
  const classes = props.class;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom variant="h5">
            Our Staff Team
          </Typography>
          <Typography gutterBottom variant="body1">
            We r comited to make good service for our good servers yes
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    My name niggas
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    I go beep boop nigger chinks
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image="https://avatars2.githubusercontent.com/u/26664578?s=400&u=5cd905f7e8dcb2d052d6197240d6181a53968b88&v=4"
                title="AndyIsCool5463"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    My name niggas
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    I go beep boop nigger chinks
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image="https://avatars2.githubusercontent.com/u/26664578?s=400&u=5cd905f7e8dcb2d052d6197240d6181a53968b88&v=4"
                title="AndyIsCool5463"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    My name niggas
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    I go beep boop nigger chinks
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image="https://avatars2.githubusercontent.com/u/26664578?s=400&u=5cd905f7e8dcb2d052d6197240d6181a53968b88&v=4"
                title="AndyIsCool5463"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    My name niggas
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    I go beep boop nigger chinks
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image="https://avatars2.githubusercontent.com/u/26664578?s=400&u=5cd905f7e8dcb2d052d6197240d6181a53968b88&v=4"
                title="AndyIsCool5463"
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
