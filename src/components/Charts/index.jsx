import React from 'react';

import PropTypes from 'prop-types';

import { Icon, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FaFileMedicalAlt, FaSyringe } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { GiTombstone } from "react-icons/gi";

import styles from './style';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(styles);

export default function Charts() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                TabIndicatorProps={{ className: `${classes.tabIndicator} ${value === 0 ? classes.cardConfirmedFigures : ""} ${value === 1 ? classes.cardRecoveredFigures : ""} ${value === 2 ? classes.cardActiveFigures : ""} ${value === 3 ? classes.cardDeathsFigures : ""}` }}
            >
                <Tab className={classes.tab} data-type="confirmed" icon={<FaFileMedicalAlt />} {...a11yProps(0)} />
                <Tab className={classes.tab} data-type="recovered" icon={<FaSyringe />} {...a11yProps(1)} />
                <Tab className={classes.tab} data-type="active" icon={<MdLocalHospital />} {...a11yProps(2)} />
                <Tab className={classes.tab} data-type="deaths" icon={<GiTombstone />} {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                Confirmed
            </TabPanel>
            <TabPanel value={value} index={1}>
                Recovered
            </TabPanel>
            <TabPanel value={value} index={2}>
                Active
            </TabPanel>
            <TabPanel value={value} index={3}>
                Deaths
            </TabPanel>
        </div>
    );
}

