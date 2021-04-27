import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SideBar } from './components';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";

import styles from "./style";

import { theme, createMuiTheme, ThemeProvider } from "./theme";

function Content() {
  const classes = makeStyles(styles);

  return (
    <div className={classes.app}>
      <SideBar />
      <Container maxWidth="lg" className={classes.app}>
        <Router>
          <Routes />
        </Router>
      </Container>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <Content />
    </ThemeProvider>
  );
}

export default App;
