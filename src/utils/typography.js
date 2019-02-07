import Typography from "typography";
import OceanBeach from "typography-theme-ocean-beach";

OceanBeach.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: "none"
    },
    a: {
      color: "#ff6441",
      "background-image":
        "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #ff6441 1px, #ff6441 2px, rgba(0, 0, 0, 0) 2px);"
    }
  };
};

delete OceanBeach.googleFonts;

const typography = new Typography(OceanBeach);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
