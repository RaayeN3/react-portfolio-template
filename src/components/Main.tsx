import React, { Suspense } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import TextType from "./TextType";
import Logo from "./Logo";

// Lazy-load the heavy Prism background after other imports
const Prism = React.lazy(() => import("./PrismProps"));

type MainProps = {
  mode?: "light" | "dark";
};

function Main({ mode = "dark" }: MainProps) {
  // Logo is rendered by the Logo component which respects the passed mode

  const prismProps: any = {
    animationType: "hover",
    timeScale: 0.5,
    height: 3.5,
    baseWidth: 5.5,
    scale: 3.6,
    hueShift: 0.6,
    colorFrequency: 1.2,
    noise: 0,
    glow: 1,
  };

  return (
    <div className="container">
      <Suspense
        fallback={<div className="prism-placeholder" aria-hidden="true" />}
      >
        <Prism {...prismProps} />
      </Suspense>
      <div className="about-section">
        <div className="image-wrapper">
          <Logo mode={mode} />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.linkedin.com/company/eagleeye-tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1 className="">EagleEyeTech</h1>

          <p>
            <TextType
              as="span"
              text={["Where vision takes shape", ""]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />
          </p>

          <div className="mobile_social_icons ">
            <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
