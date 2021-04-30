import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);
function ResourcesPage() {
    const classes = useStyles();
    return (
        <div>
            This is the resources page
        </div>
    );
}

export default ResourcesPage;
