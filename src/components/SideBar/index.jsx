import React from 'react';
import { useHistory } from 'react-router-dom';

import { Drawer, Tabs, Tab, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

import routesData from "../../routes/routesData";

import { HiSun } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";

const useStyles = makeStyles(styles);

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function SideBar({ value, setValue }) {
    const classes = useStyles();
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    const share = () => {
        let shareTxt = `
        Get COVID related relief resources at https://indicov.co/${history.location.pathname}`;
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
                    title: "IndiCov",
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
        <Drawer
            variant="permanent"
            classes={{
                root: classes.drawerRoot,
                paper: classes.drawerPaper
            }}
        >
            <Typography variant="h6" className={classes.brandingName}>
                Indi<Typography variant="h6" className={classes.secondaryColorBrandingName}>Cov</Typography>
            </Typography>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                TabIndicatorProps={{ className: classes.tabIndicator }}
            >
                {routesData.map((data, index) => {
                    if (data.showOnHeader)
                        return <Tab
                            key={`link-index-${index}`}
                            onClick={() => history.push(data.pageURL)}
                            className={classes.tab}
                            icon={data.icon}
                            aria-label={data.pageName}
                            {...a11yProps(index)}
                        />;
                    else return null;
                })}
            </Tabs>
            <Button className={classes.tab}><HiSun /></Button>
            <Button className={`${classes.tab} ${classes.shareBtn}`} onClick={share}><FiShare2 /></Button>
        </Drawer>
    );
}

export default SideBar;
