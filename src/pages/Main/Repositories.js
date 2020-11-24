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
import truncateWithDots from "../../util/truncateWithDots";
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
    minWidth: "100%",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));
export default function Repositories() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos();
  }, []);
  async function fetchRepos() {
    const res = await fetch("https://api.github.com/orgs/doujinfucks/repos");
    const data = await res.json();
    console.log(data);
    setRepos(data);
  }
  const classes = useStyles();
  return (
    <Container style={{ paddingTop: 20 }} maxWidth="md">
      <Typography gutterBottom variant="h3">
        Repositories
      </Typography>
      <Grid container className={classes.root} spacing={2}>
        {repos
          ? repos.map((c) => (
              <Grid key={c.name} item xs={12} sm={6}>
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
              {truncateWithDots(description, 100)}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              <span role="img" aria-label="ok emoji">
                ⭐
              </span>
              Stars: {stars}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Last Updated: {time}
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
    </Card>
  );
}
