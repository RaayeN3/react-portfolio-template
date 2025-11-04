import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://www.linkedin.com/company/eagleeye-tech"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        Designed & built by{" "}
        <a
          href="https://github.com/RaayeN3"
          target="_blank"
          rel="noreferrer noopener"
        >
          Rayen Nairi
        </a>{" "}
        with ❤️
      </p>
    </footer>
  );
}

export default Footer;
