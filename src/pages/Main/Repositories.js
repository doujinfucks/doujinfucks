import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardAvatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    minWidth: "308.55px",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));
export default function Repositories() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.github.com/orgs/longshotdev/repos");
      const parse = await data.json();
      setRepos(parse);
    }
    fetchData();
  }, [repos]);
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography gutterBottom variant="h3">
        Repositories
      </Typography>
      <Grid container className={classes.root} spacing={2}>
        {repos.length
          ? repos.splice(0, 6).map((c) => (
              <Grid item xs={12} sm={6}>
                <RepoCard
                  styles={classes}
                  logo={c.owner.avatar_url}
                  description={c.description ?? "No Description"}
                  title={c.name}
                  time={new Date(c.updated_at).toLocaleDateString()}
                  stars={c.stargazers_count}
                  url={c.svn_url}
                />
              </Grid>
            ))
          : "No Repos :("}
      </Grid>
    </Container>
  );
}

function RepoCard({ styles, title, logo, description, time, stars, url }) {
  const classes = styles;
  const redirectToGH = (url) => {
    window.open(url);
  };
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardActionArea onClick={() => redirectToGH(url)}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {description}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              <span role="img">⭐</span>Stars: {stars}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Last Updated: {time}
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
      <CardMedia
        className={classes.cover}
        image={logo}
        title="AndyIsCool5463"
      />
    </Card>
  );
}
