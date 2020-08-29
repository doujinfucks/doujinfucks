import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#323232",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingLeft: "10vw",
    fontFamily: "Poppins, sans-serif",
    textDecoration: "none",
    color: theme.palette.secondary.main,
    flexGrow: 1,
  },
  link: {
    padding: "20px",
    textDecoration: "none",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "12px",
    lineHeight: "23px",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: "red",
    },
  },
}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.title}>
            <Typography variant="h6" className={classes.title}>
              Doujin Fucks
            </Typography>
          </Link>
          <Link to="/about" className={classes.link}>
            <Typography className={classes.link} variant="h6">
              About
            </Typography>
          </Link>
          <Link to="/contact" className={classes.link}>
            <Typography className={classes.link} variant="h6">
              Contact
            </Typography>
          </Link>
          <Link to="/redir/discord" className={classes.link}>
            <Typography className={classes.link} variant="h6">
              Discord
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
