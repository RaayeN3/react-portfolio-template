// Allow importing CSS/SCSS files in TypeScript without module typings
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// For CSS modules (optional) — keeps default export typed as record of strings
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
