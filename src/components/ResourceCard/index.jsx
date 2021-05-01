import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography, Box, Divider } from "@material-ui/core";

import styles from './style';

import { TiLocation } from "react-icons/ti";
import { MdPhone } from "react-icons/md";

const useStyles = makeStyles(styles);

const ResourceCard = ({ index, style, data }) => {
    const classes = useStyles();
    const date = new Date(data[index]?.lastVerifiedOn).toString().split(' ');

    return (
        <Grid item sm={12} md={6}>
            <Box style={style} className={classes.resourceCardHolder}>
                <Card className={classes.resourceCard}>
                    <Typography variant="h5" className={classes.description}>{(data[index]?.description) ? data[index]?.description : data[index]?.comment ? data[index]?.comment : "Unknown"}</Typography>
                    <Typography variant="h6" className={classes.description}>{(data[index]?.name) ? data[index]?.name : "Unknown"}</Typography>
                    <Typography variant="subtitle1" className={classes.district}><TiLocation /><span>{data[index]?.district}, {data[index]?.state}</span></Typography>
                    <Typography variant="subtitle1" className={classes.phoneNums}><MdPhone /><a href={`tel:${data[index]?.phone1}`}>{data[index]?.phone1}</a><a href={`tel:${data[index]?.phone2}`}>{data[index]?.phone2}</a></Typography>
                    <Divider className={classes.divider} light />
                    <Grid container item className={classes.cardFooter}>
                        <Grid item sm={6} className={classes.footer}>
                            <Typography variant="subtitle1">Status: {data[index]?.verificationStatus}</Typography>
                        </Grid>
                        <Grid item sm={6} className={classes.footer}>
                            <Typography variant="subtitle1" className={classes.checkedOn}>Checked on: {date[1]} {date[2]}, {date[3]}</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </Grid>
    );
};

export default ResourceCard;
