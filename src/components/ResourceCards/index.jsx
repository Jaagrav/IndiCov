import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import faker from "faker";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ResourceCard } from "../";
import styles from './style';

const useStyles = makeStyles(styles);
const ListContainer = props => {
    const classes = useStyles();

    return <Grid container className={classes.container} {...props} />;
};


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ResourceCards = ({ resources }) => {
    const classes = useStyles(),
        query = useQuery(),
        state = query.get("state"),
        service = query.get("service");

    const [filteredResources, setFilteredResources] = useState([]);

    useEffect(() => {
        if (service === "All") {
            for (let i in resources) {
                for (let j in resources[i]) {
                    setFilteredResources(prevFilteredResources => [...resources[i][j], ...prevFilteredResources]);
                }
            }
        }
        else if (service === 'Ambulance') {

        }
        else if (service === 'Helpline') {

        }
        else if (service === 'Hospital and Clinics') {

        }
        else if (service === 'Medicine') {

        }
        else if (service === 'Oxygen') {
            for (let j in resources["Oxygen"]) {
                console.log(resources["Oxygen"]);
                setFilteredResources(prevFilteredResources => [...resources["Oxygen"][j], ...prevFilteredResources]);
            }
        }
    }, [resources]);

    return (
        <AutoSizer>
            {({ height, width }) => (
                <List
                    className="List"
                    height={height}
                    width={width}
                    itemCount={filteredResources.length}
                    itemSize={230}
                    itemData={filteredResources}
                    innerElementType={ListContainer}
                >
                    {ResourceCard}
                </List>
            )}
        </AutoSizer>
    );
};

export default ResourceCards;
