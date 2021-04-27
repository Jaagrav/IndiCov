import React from 'react';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';
function HomePage() {
    const classes = makeStyles(styles);

    return (
        <div>
            This is the HomePage
        </div>
    );
}

export default HomePage;
