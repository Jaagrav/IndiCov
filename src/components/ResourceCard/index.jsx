import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";

import styles from './style';

const useStyles = makeStyles(styles);

const ResourceCard = ({ index, style, data }) => {
    const classes = useStyles();
    useEffect(() => {
        console.log(data[index]);
    }, []);

    return (
        <Grid item sm={12} md={6}>
            <Card style={style} className={classes.resourceCard}>
                Peepee Poopoo
            </Card>
        </Grid>
    );
};

export default ResourceCard;
