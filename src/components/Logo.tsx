import React from "react";

type LogoProps = {
  mode?: "light" | "dark";
  className?: string;
  alt?: string;
};

function detectModeFromDocument(): "light" | "dark" {
  if (typeof document === "undefined") return "dark";
  const doc = document.documentElement || document.body;
  if (!doc) return "dark";
  if (doc.classList.contains("light-mode")) return "light";
  if (doc.classList.contains("dark-mode")) return "dark";
  // fallback: prefer dark
  return "dark";
}

const Logo: React.FC<LogoProps> = ({
  mode,
  className = "site-logo",
  alt = "EagleEyeTech logo",
}) => {
  const resolvedMode = mode ? mode : detectModeFromDocument();

  const src =
    resolvedMode === "light"
      ? `${process.env.PUBLIC_URL}/eagleeyetechlogocolored.png`
      : `${process.env.PUBLIC_URL}/eagleeyetechlogowhite.png`;

  return <img src={src} alt={alt} className={className} />;
};

export default Logo;
