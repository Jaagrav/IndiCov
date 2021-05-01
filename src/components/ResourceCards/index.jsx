import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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
    let classes = useStyles(),
        history = useHistory(),
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
                    ...resources.hospitalsAndBeds.data,
                    ...resources.oxygen.data,
                    ...resources.medicine.data,
                    ...resources.ambulance.data,
                ]);
            }
            else if (service === 'Ambulance') {
                setFilteredResources([...resources.ambulance.data]);
            }
            else if (service === 'Hospital and Clinics') {
                setFilteredResources([...resources.hospitalsAndBeds.data]);
            }
            else if (service === 'Medicine') {
                setFilteredResources([...resources.medicine.data]);
            }
            else if (service === 'Oxygen') {
                setFilteredResources([...resources.oxygen.data]);
            }
        }

        //Sort Statewise
        // setFilteredResources(prevResources => { console.log(prevResources.filter(p => p.state.includes(state)), state, resources); return prevResources; });
    }, [window.location.href, resources]);

    useEffect(() => {
        setAllResources([]);
        for (let i in filteredResources) {
            if (filteredResources[i].state.includes(state) || state === 'India') {
                setAllResources(prev => [...prev, filteredResources[i]]);
            }
        }
    }, [resources, filteredResources]);

    return (
        <WindowScroller>
            {({ height, width }) => (
                <List
                    className={classes.list}
                    height={window.innerWidth < 600 ? height - 266 : height - 130}
                    width={width}
                    itemCount={allResources.length}
                    itemSize={260}
                    itemData={allResources}
                    innerElementType={ListContainer}
                >
                    {ResourceCard}
                </List>
            )}
        </WindowScroller>
    );
};

export default ResourceCards;
