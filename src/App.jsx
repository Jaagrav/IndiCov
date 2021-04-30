import React, { useState, useEffect } from 'react';

import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SideBar, BottomNavBar } from './components';

import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Routes from "./routes";

import styles from "./style";

import { Hidden } from "@material-ui/core";
import { theme, createMuiTheme, ThemeProvider } from "./theme";

const useStyles = makeStyles(styles);
function Content() {
  const classes = useStyles(), history = useHistory();
  let pathname = history.location.pathname;
  const [value, setValue] = useState(pathname === "/" ? 0 : (pathname === "/resources") ? 1 : (pathname === "/about") ? 2 : 0);

  useEffect(() => {
    return history.listen(e => {
      pathname = history.location.pathname;
      setValue(pathname === "/" ? 0 : (pathname === "/resources") ? 1 : (pathname === "/about") ? 2 : 0);
    });
  });

  return (
    <div className={classes.app}>
      <Hidden only={["sm", "xs"]}>
        <SideBar value={value} setValue={setValue} />
      </Hidden>
      <Container maxWidth="lg" className={classes.appContainer}>
        <Routes />
      </Container>
      <Hidden mdUp>
        <BottomNavBar value={value} setValue={setValue} />
      </Hidden>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Router>
        <Content />
      </Router>
    </ThemeProvider>
  );
}

export default App;
