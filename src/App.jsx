import React, { useState } from 'react';

import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SideBar, BottomNavBar } from './components';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";

import styles from "./style";

import { Hidden } from "@material-ui/core";
import { theme, createMuiTheme, ThemeProvider } from "./theme";

const useStyles = makeStyles(styles);
function Content() {
  const classes = useStyles();
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname === "/" ? 0 : (pathname === "/resources") ? 1 : (pathname === "/about") ? 2 : 0);

  return (
    <div className={classes.app}>
      <Router>
        <Hidden only={["sm", "xs"]}>
          <SideBar value={value} setValue={setValue} />
        </Hidden>
        <Container maxWidth="lg" className={classes.appContainer}>
          <Routes />
        </Container>
        <Hidden mdUp>
          <BottomNavBar value={value} setValue={setValue} />
        </Hidden>
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Content />
    </ThemeProvider>
  );
}

export default App;
