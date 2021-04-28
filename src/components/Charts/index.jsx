import React from 'react';

import PropTypes from 'prop-types';

import { Icon, Tabs, Tab, Typography, Box, Hidden } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { FaFileMedicalAlt, FaSyringe } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { GiTombstone } from "react-icons/gi";

import styles from './style';
import { Graph } from '../';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(styles);

export default function Charts({ covidData, mapArray, index }) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>

            <Hidden mdDown>
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
            </Hidden>

            <Box className={classes.chart}>
                <Typography variant="h5" className={classes.stateName}>{mapArray[index]?.title ? mapArray[index].title : 'India'}</Typography>
                <Typography variant="subtitle1" className={classes.typeName}>
                    {value === 0 ? <span className={classes.confirmedColor}>Confirmed</span> : null}
                    {value === 1 ? <span className={classes.recoveredColor}>Recovered</span> : null}
                    {value === 2 ? <span className={classes.testedColor}>Tested</span> : null}
                    {value === 3 ? <span className={classes.deathsColor}>Deaths</span> : null}
                </Typography>
                <Graph covidData={covidData} mapArray={mapArray} value={value} index={index} />
            </Box>

            <Hidden mdUp>
                <Tabs
                    orientation="horizontal"
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
            </Hidden>
        </div>
    );
}

