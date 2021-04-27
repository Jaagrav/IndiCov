import React, { useState, useEffect } from 'react';

import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';
import paths from './paths';

import axios from 'axios';

const useStyles = makeStyles(styles);

function HomePage() {
    const classes = useStyles();
    const [covidData, setCovidData] = useState({
        statewise: [
            {
                confirmed: null,
                recovered: null,
                active: null,
                deaths: null,
            }
        ]
    });
    const [covidGridData, setCovidGridData] = useState({
        stateName: null,
        confirmed: null,
        recovered: null,
        active: null,
        deaths: null,
    });
    const [mapArray, setMapArray] = useState(paths());

    const showMapData = (index, stateName) => {
        const tempMapArray = mapArray;
        for (let i in tempMapArray)
            tempMapArray[i].selected = false;
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
                setCovidGridData({
                    stateName: "India",
                    confirmed: response.data.statewise[0].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    recovered: response.data.statewise[0].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    active: response.data.statewise[0].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    deaths: response.data.statewise[0].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    useEffect(() => {
        let countrySelected = "";
        for (let i in mapArray) {
            if (mapArray[i].selected)
                countrySelected = mapArray[i].title;

        }

        for (let i in covidData.statewise) {
            if (covidData.statewise[i].state === countrySelected)
                setCovidGridData({
                    stateName: countrySelected,
                    confirmed: covidData.statewise[i].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    recovered: covidData.statewise[i].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    active: covidData.statewise[i].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                    deaths: covidData.statewise[i].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                });
        }

    }, [mapArray]);

    return (
        <Grid container className={classes.homePage}>
            <Grid item xs={12} sm={6}>
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
                <Grid container>
                    <Typography gutterBottom variant="h5">Cases in <Typography variant="h5" className={classes.blueText}>{covidGridData.stateName}</Typography></Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.cardType} variant="caption">Confirmed</Typography>
                                    <Typography className={classes.cardConfirmedFigures} variant="h6">{covidGridData.confirmed}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.cardType} variant="caption">Recovered</Typography>
                                    <Typography className={classes.cardRecoveredFigures} variant="h6">{covidGridData.recovered}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.cardType} variant="caption">Active</Typography>
                                    <Typography className={classes.cardActiveFigures} variant="h6">{covidGridData.active}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.cardType} variant="caption">Deaths</Typography>
                                    <Typography className={classes.cardDeathsFigures} variant="h6">{covidGridData.deaths}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>

            </Grid>
        </Grid>
    );
}

export default HomePage;
