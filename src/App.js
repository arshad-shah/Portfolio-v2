import React, { lazy, Suspense } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ScrollToTop, { ScrollToFade } from "./App.util";
import useStyles from "./App.styles";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const Aboutme = lazy(() => import("./pages/Aboutme"));
const Projects = lazy(() => import("./pages/Projects"));

let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fdff95",
      light: "#ffffc7",
      dark: "#c8cc65",
    },
    secondary: {
      main: "#ffbf0d",
      light: "#fff152",
      dark: "#c78f00",
    },
    action: {
      hoverOpacity: 0.09,
    },
  },
  typography: {
    fontFamily: "Nunito",
    fontSize: 16,
  },
});

theme = responsiveFontSizes(theme);

const renderLoader = () => <p>Loading...</p>;

export default function App(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Suspense fallback={renderLoader()}>
          <Header />

          <ScrollToFade {...props}>
            <LandingPage />
          </ScrollToFade>

          <Aboutme />

          <Projects />

          <ScrollToTop {...props}>
            <Fab
              data-block="backtotopbutton"
              color="secondary"
              size="large"
              aria-label="scroll back to top"
            >
              <ArrowUpwardRoundedIcon fontSize="large" />
            </Fab>
          </ScrollToTop>

          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}
