import React from 'react';
import { useHistory } from 'react-router-dom';

import { Tabs, Tab, Button } from '@material-ui/core';
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

function BottomNavBar({ value, setValue }) {
    const classes = useStyles();
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <div className={classes.bottomNavBar}>
            <Tabs
                orientation="horizontal"
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
            <div className={classes.otherBtns}>
                <Button className={classes.otherBtn}><HiSun /></Button>
                <Button className={classes.otherBtn}><FiShare2 /></Button>
            </div>
        </div>
    );
}

export default BottomNavBar;
