import React from 'react';

// import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);

function AboutPage() {
    const classes = useStyles();

    return (
        <div>
            This is the Aboutpage
        </div>
    );
}

export default AboutPage;
