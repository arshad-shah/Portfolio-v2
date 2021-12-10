import React, { lazy, Suspense } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ScrollToTop, { ScrollToFade } from "./App.util";
import useStyles from "./App.styles";
import Loading from "./components/Loading";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

const Footer = lazy(() => import("./components/Footer"));
const Aboutme = lazy(() => import("./pages/Aboutme"));
const Projects = lazy(() => import("./pages/Projects"));
let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fdff95",
    },
    secondary: {
      main: "#ffbf0d",
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

const renderLoader = () => <Loading />;

export default function App(props) {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header isMobile={isMobile} />
        <ScrollToFade {...props}>
          <LandingPage />
        </ScrollToFade>
        <Suspense fallback={renderLoader()}>
          <Aboutme />

          <Projects data-testid="projectsSection" />

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
