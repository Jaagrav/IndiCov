import React, { useState, useEffect, useRef } from 'react';

import { Grid, IconButton, IconField } from '@material-ui/core';
import { useAutocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { RiSearch2Line } from "react-icons/ri";

import styles from "./style";

import paths from "../../pages/HomePage/paths";

const useStyles = makeStyles(styles);
function ResourcesStateSearch() {
    const classes = useStyles();
    const [states, setStates] = useState([]);
    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: states,
        getOptionLabel: (option) => option.title,
    });
    const autoCompleteRef = useRef();


    useEffect(() => {
        setStates([]);
        for (let i in paths())
            setStates(prevStates => [...prevStates, paths()[i]]);
    }, []);

    const showResources = (index, e) => {
        autoCompleteRef.current.children[0].children[0].blur();
    };

    return (
        <Grid container>
            <div className={classes.autoComplete} ref={autoCompleteRef}>
                <div className={classes.autoCompleteInputBox} {...getRootProps()}>
                    <input className={classes.autoCompleteInput} placeholder="Search States" {...getInputProps()} />
                    <IconButton color="primary">
                        <RiSearch2Line />
                    </IconButton>
                </div>
                {groupedOptions.length > 0 ? (
                    <ul className={classes.autoCompleteBox} {...getListboxProps()} >
                        {groupedOptions.map((option, index) => (
                            <li {...getOptionProps({ option, index })} onClick={(e) => showResources(option.index, e)}>{option.title}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </Grid>
    );
}

export default ResourcesStateSearch;
