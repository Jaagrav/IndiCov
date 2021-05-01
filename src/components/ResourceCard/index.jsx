import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, Typography, Box, Divider, IconButton } from "@material-ui/core";

import styles from './style';

import { TiLocation } from "react-icons/ti";
import { MdPhone } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";

const useStyles = makeStyles(styles);

const ResourceCard = ({ index, style, data }) => {
    const classes = useStyles(), history = useHistory();
    const date = new Date(data[index]?.lastVerifiedOn).toString().split(' ');

    const share = () => {
        let shareTxt = `
        **Covid Relief Resources**

        ${(data[index]?.description) ? data[index]?.description : data[index]?.comment ? data[index]?.comment : "Unknown"} by ${(data[index]?.name) ? data[index]?.name : "Unknown"} 
        Located in: ${data[index]?.district}, ${data[index]?.state} 
        You can contact them by dialing ${data[index]?.phone1 ? data[index]?.phone1 : ""} ${data[index]?.phone2 ? data[index]?.phone2 : ""}
        
        Verification Status: ${data[index]?.verificationStatus}
        
        For more info,
        Please visit https://indicov.co${history.location.pathname}${history.location.search} for more COVID related resources`;
        let copyToClipboard = () => {
            const copyTxt = document.createElement("textarea");
            copyTxt.innerHTML = shareTxt;
            document.body.parentNode.appendChild(copyTxt);
            copyTxt.select();
            document.execCommand("copy");
            document.body.parentNode.removeChild(copyTxt);
            alert('Resources Data has been copied to clipboard!');
        };
        if (navigator.share) {
            navigator
                .share({
                    title: "Resources - IndiCov",
                    text: shareTxt,
                })
                .then(() => {
                    console.log("Thanks for sharing!");
                })
                .catch(() => {
                    copyToClipboard();
                });
        } else {
            copyToClipboard();
        }
    };

    return (
        <Grid item sm={12} md={6}>
            <Box style={style} className={classes.resourceCardHolder}>
                <Card className={classes.resourceCard}>
                    <div className={classes.resourceDesc}>
                        <Typography variant="h5" className={classes.description}>{(data[index]?.description) ? data[index]?.description : data[index]?.comment ? data[index]?.comment : "Unknown"}</Typography>
                        <IconButton className={classes.shareBtn} onClick={share}>
                            <FiShare2 />
                        </IconButton>
                    </div>
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
