import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import faker from "faker";
import { FixedSizeList as List } from "react-window";
import { WindowScroller } from "react-virtualized";
// import AutoSizer from "react-virtualized-auto-sizer";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import { ResourceCard } from "../";
import styles from './style';

const useStyles = makeStyles(styles);
const ListContainer = props => {
    const classes = useStyles();

    return <Grid container className={classes.listContainer} {...props} />;
};


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ResourceCards = ({ resources }) => {
    const classes = useStyles(),
        query = useQuery(),
        state = query.get("state"),
        service = query.get("service");

    const [allResources, setAllResources] = useState([]);
    const [filteredResources, setFilteredResources] = useState([]);

    useEffect(() => {
        if (resources?.ambulance?.data
            && resources?.helpline?.data
            && resources?.hospitalsAndBeds?.data
            && resources?.medicine?.data
            && resources?.oxygen?.data) {
            if (service === "All") {
                setFilteredResources([
                    ...resources.ambulance.data.filter(resource => resource.verificationStatus === 'Available and verified'),
                    ...resources.helpline.data.filter(resource => resource.verificationStatus === 'Available and verified'),
                    ...resources.hospitalsAndBeds.data.filter(resource => resource.verificationStatus === 'Available and verified'),
                    ...resources.medicine.data.filter(resource => resource.verificationStatus === 'Available and verified'),
                    ...resources.oxygen.data.filter(resource => resource.verificationStatus === 'Available and verified')]);
                console.log([...resources.oxygen.data.filter(resource => resource.verificationStatus === 'Available and verified')]);
                console.log('All');
            }
            else if (service === 'Ambulance') {
                setFilteredResources([...resources.ambulance.data]);
                console.log('Ambulance');
            }
            else if (service === 'Helpline') {
                setFilteredResources([...resources.helpline.data]);
                console.log('Helpline');
            }
            else if (service === 'Hospital and Clinics') {
                setFilteredResources([...resources.hospitalsAndBeds.data]);
                console.log('Hospital and Clinics');
            }
            else if (service === 'Medicine') {
                setFilteredResources([...resources.medicine.data]);
                console.log('Medicine');
            }
            else if (service === 'Oxygen') {
                setFilteredResources([...resources.oxygen.data.filter(resource => resource.verificationStatus === 'Available and verified')]);
                console.log('Oxygen');
            }
        }
    }, [resources]);

    return (
        <WindowScroller>
            {({ height, width }) => (
                <List
                    className="List"
                    height={height - 130}
                    width={width}
                    itemCount={filteredResources.length}
                    itemSize={260}
                    itemData={filteredResources}
                    innerElementType={ListContainer}
                >
                    {ResourceCard}
                </List>
            )}
        </WindowScroller>
    );
};

export default ResourceCards;
