import React, { useState, useEffect } from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';

import { Line } from 'react-chartjs-2';

import styles from './style';

const useStyles = makeStyles(styles);

function Graph({ covidData, mapArray, value, index }) {
    const theme = useTheme();
    const classes = useStyles();

    const [data, setData] = useState({
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    });

    const options = {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0
                }
            }],
        },
        responsive: true,
        maintainAspectRatio: false
    };

    const updateChartStyle = (color) => {
        const tempChartData = data;
        tempChartData.datasets[0].backgroundColor = `${color}4a`;
        tempChartData.datasets[0].borderColor = color;
        setData({ ...tempChartData });
    };

    const generateChart = (dailyCases, dates) => {
        let tempData = data;
        tempData.datasets[0].data = dailyCases;
        tempData.labels = dates;

        setData({ ...tempData });
    };

    const updateChartData = (value) => {
        let array = [];
        array = mapArray[index]?.short ? covidData[mapArray[index].short] : covidData["TT"];

        let dates = [],
            confirmedDailyCases = [],
            recoveredDailyCases = [],
            activeDailyCases = [],
            deathsDailyCases = [],
            dailyData = [],
            j = 0;

        for (let i in array.dates) {
            const length = Object.keys(array.dates).length;
            if (j++ <= length - 60) continue;

            if (j > length - 31)
                if ((j === length - 30 || j === length - 20 || j === length - 10 || j === length))
                    dates.push(i);
                else
                    dates.push("");

            dailyData.push(array.dates[i]);
        }

        for (let i = dailyData.length - 32; i < dailyData.length - 1; i++) {
            confirmedDailyCases.push(Math.abs(dailyData[i].total.confirmed - dailyData[i - 1].total.confirmed));
            recoveredDailyCases.push(Math.abs(dailyData[i].total.recovered - dailyData[i - 1].total.recovered));
            activeDailyCases.push(Math.abs(dailyData[i].total.tested - dailyData[i - 1].total.tested));
            deathsDailyCases.push(Math.abs(dailyData[i].total.deceased - dailyData[i - 1].total.deceased));
        }

        switch (value) {
            case 0:
                generateChart(confirmedDailyCases, dates);
                break;
            case 1:
                generateChart(recoveredDailyCases, dates);
                break;
            case 2:
                generateChart(activeDailyCases, dates);
                break;
            case 3:
                generateChart(deathsDailyCases, dates);
                break;
            default:
        }
    };

    useEffect(() => {
        updateChartData(value);

        switch (value) {
            case 0:
                updateChartStyle(theme.palette.highlight.blue);
                break;
            case 1:
                updateChartStyle(theme.palette.highlight.green);
                break;
            case 2:
                updateChartStyle(theme.palette.highlight.yellow);
                break;
            case 3:
                updateChartStyle(theme.palette.highlight.red);
                break;
            default:
        }


    }, [covidData, value, index]);

    return (
        <Line data={data} options={options} className={classes.graph} />
    );
}

export default Graph;
