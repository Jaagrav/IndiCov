import React from 'react';

import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SideBar } from './components';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";

import styles from "./style";

import { theme, createMuiTheme, ThemeProvider } from "./theme";

const useStyles = makeStyles(styles);
function Content() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Router>
        <SideBar />
        <Container maxWidth="lg" className={classes.appContainer}>
          <Routes />
        </Container>
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
