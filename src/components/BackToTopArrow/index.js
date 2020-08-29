import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  scrollTop: {
    position: "fixed",
    width: "100%",
    bottom: "20px",
    alignItems: "center",
    height: "20px",
    justifyContent: "center",
    zIndex: 1000,
    cursor: "pointer",
    animation: "$fadeIn 0.3s",
    transition: "opacity 0.4s",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0.5,
    },
  },
}));
const ScrollTopArrow = () => {
  const classes = useStyles();
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <ArrowUpward
      className={classes.scrollTop}
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollTopArrow;
