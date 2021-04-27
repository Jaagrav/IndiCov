import React from 'react';

import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);
function Map({ mapArray, showMapData }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.map}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                className={classes.mapSvg}
                viewBox="0 70 650 740"
            >
                <g>
                    {mapArray.map((path, index) => <path
                        d={path.d}
                        title={path.title}
                        className={path.selected ? `${classes.land} ${classes.landSelected}` : classes.land}
                        onClick={(e) => showMapData(index, path.title)}
                    />)}
                </g>
            </svg>
        </Grid>
    );
}

export default Map;
