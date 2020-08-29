import React from "react";
import { CssBaseline, makeStyles, Divider } from "@material-ui/core";
import Footer from "../../components/Footer";
import BackToTopArrow from "../../components/BackToTopArrow";
import Staff from "./Staff";
import Cards from "./Cards";
import Header from "./Header";
import Repos from "./Repositories";
const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    color: "white",
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: "5vh",
    paddingBottom: "4vh",
  },
  href: {
    textDecoration: "none",
  },
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
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
}));
export function Main() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <main>
        <Header class={classes} />
        <Repos />
        <Cards class={classes} />
        <Staff class={classes} />
        <BackToTopArrow />
      </main>
      <Footer />
    </>
  );
}
