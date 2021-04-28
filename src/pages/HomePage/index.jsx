import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';
import paths from './paths';

import axios from 'axios';

import { CovidGridData, Map, SearchBar, Charts } from "../../components";

const useStyles = makeStyles(styles);

function HomePage() {
    const classes = useStyles();
    const [covidData, setCovidData] = useState(null);
    const [mapArray, setMapArray] = useState(paths());

    const showMapData = (e, index, stateName) => {
        if (e)
            e.stopPropagation();
        const tempMapArray = mapArray;
        for (let i in tempMapArray)
            tempMapArray[i].selected = false;
        if (index)
            tempMapArray[index].selected = true;
        setMapArray([...tempMapArray]);
    };

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://api.covid19india.org/data.json',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                setCovidData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    return (
        <Grid container className={classes.homePage}>
            <Grid item xs={12} sm={6} className={classes.section}>
                {covidData && <Map mapArray={mapArray} showMapData={showMapData} />}
                {covidData && <CovidGridData mapArray={mapArray} covidData={covidData} />}
            </Grid>
            <Grid item xs={12} sm={6} className={classes.section}>
                {covidData && <SearchBar mapArray={mapArray} showMapData={showMapData} />}
                {covidData && <Charts />}
            </Grid>
        </Grid>
    );
}

export default HomePage;
