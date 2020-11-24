import React from "react";
import { Container, Typography, Avatar, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Header({ ...props }) {
  const classes = props.class;
  return (
    <div className={classes.heroContent}>
      <Container className={classes.fuckyou} maxWidth="sm">
        <Typography align="center">
          <Avatar
            src="https://avatars0.githubusercontent.com/u/70341512?s=800&u=29827cae1f63eabd92093a1bc717727190667b01&v=4"
            title="ok"
            style={{
              height: 256,
              width: 256,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            variant="circle"
          />
        </Typography>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          style={{ fontSize: "28px" }}
          gutterBottom
        >
          Doujin Fucks
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          paragraph
        >
          Bing Bong we r corders har har
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <a className={classes.href} href="https://github.com/doujinfucks">
                <Button variant="contained" color="primary">
                  Github
                </Button>
              </a>
            </Grid>
            <Grid item>
              <a
                className={classes.href}
                href="https://discord.com/invite/5QR9RX2"
              >
                <Button variant="outlined" color="primary">
                  Discord
                </Button>
              </a>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
