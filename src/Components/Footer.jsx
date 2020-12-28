import { Grid, IconButton, Link } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import React from "react";
import "./Footer.css";
import coronavirusRed from "../coronavirusRed.png";

function Footer() {
  return (
    <div>
      <Grid container className="footer" alignItems="center">
        <Grid container md={12} justify="center" className="footer--social">
          <Link
            href="https://www.instagram.com/_____l_e_o_____/"
            target="blank"
            underline="none"
          >
            <IconButton style={{ backgroundColor: "#32BB00", margin: "1rem" }}>
              <InstagramIcon style={{ color: "#fff" }} />
            </IconButton>
          </Link>

          <Link
            href="https://www.facebook.com/layan.jayasinghe.5/"
            target="blank"
            underline="none"
          >
            <IconButton style={{ backgroundColor: "#32BB00", margin: "1rem" }}>
              <FacebookIcon style={{ color: "#fff" }} />
            </IconButton>
          </Link>

          <Link
            href="https://github.com/LayanJay"
            target="blank"
            underline="none"
          >
            <IconButton style={{ backgroundColor: "#32BB00", margin: "1rem" }}>
              <GitHubIcon style={{ color: "#fff" }} />
            </IconButton>
          </Link>
        </Grid>
        <Grid container md={12} justify="center">
          <img className="footer--image" src={coronavirusRed} alt="virus" />
          <div className="footer--title">Pandemx.</div>
        </Grid>
        <Grid container md={12} justify="center">
          <div className="footer--aknowledgment">
            © 2020 Layan Jayasinghe. All Rights Reserved.
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
