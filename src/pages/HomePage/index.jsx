import React, { useState, useEffect } from 'react';

import { Grid, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';
import paths from './paths';

import axios from 'axios';

import { CovidGridData, Map, SearchBar, Charts, Resources } from "../../components";

const useStyles = makeStyles(styles);

function HomePage() {
    const classes = useStyles();
    const [covidData, setCovidData] = useState(null);
    const [covidDailyData, setCovidDailyData] = useState(null);
    const [mapArray, setMapArray] = useState(paths());
    const [index, setIndex] = useState(0);

    const showMapData = (e, index, stateName) => {
        if (e)
            e.stopPropagation();
        const tempMapArray = mapArray;
        for (let i in tempMapArray)
            tempMapArray[i].selected = false;
        if (index)
            tempMapArray[index].selected = true;
        setIndex(index);
        setMapArray([...tempMapArray]);
    };

    useEffect(() => {
        var configIndiaData = {
            method: 'get',
            url: 'https://api.covid19india.org/data.json',
            headers: {}
        };

        axios(configIndiaData)
            .then(function (response) {
                console.log(response.data);
                setCovidData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        var configTimeData = {
            method: 'get',
            url: 'https://api.covid19india.org/v4/min/timeseries.min.json',
            headers: {}
        };

        axios(configTimeData)
            .then(function (response) {
                console.log(response.data);
                setCovidDailyData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    return (
        <Grid container className={classes.homePage} spacing={10}>
            <Hidden mdUp>
                <Grid xs={12}>
                    <Typography variant="h5" className={classes.brandingName}>
                        Indi<Typography variant="h5" className={classes.secondaryColorBrandingName}>Cov</Typography>
                    </Typography>
                </Grid>
            </Hidden>
            <Grid item sm={12} md={6} className={classes.section}>
                {covidData && <SearchBar mapArray={mapArray} showMapData={showMapData} />}
                {covidData && <Map mapArray={mapArray} showMapData={showMapData} />}
                {covidData && <CovidGridData mapArray={mapArray} covidData={covidData} />}
            </Grid>
            <Grid item sm={12} md={6} className={classes.section}>
                {covidDailyData && <Charts covidData={covidDailyData} mapArray={mapArray} index={index} />}
                {covidData && <Resources mapArray={mapArray} index={index} />}
            </Grid>
        </Grid>
    );
}

export default HomePage;
