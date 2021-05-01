import React, { useRef, useState, useEffect } from 'react';

import { Grid, IconButton } from '@material-ui/core';
import { useAutocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { IoMdArrowDropdown } from "react-icons/io";

import styles from "./style";

const useStyles = makeStyles(styles);
function ServicesSearch({ setService, service }) {
    const classes = useStyles();
    const services = ["All", "Ambulance", "Hospital and Clinics", "Medicine", "Oxygen"];
    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: services,
        getOptionLabel: (option) => option,
    });
    const autoCompleteRef = useRef();

    const showResources = (index, e) => {
        autoCompleteRef.current.children[0].children[0].blur();
        const event = {
            target: { value: services[index] }
        };
        getInputProps().onChange(event);
        setService(services[index]);
    };

    useEffect(() => {
        const event = {
            target: { value: service }
        };
        // return getInputProps().onChange(event);
    }, []);

    return (
        <Grid container>
            <div className={classes.autoComplete} ref={autoCompleteRef}>
                <div className={classes.autoCompleteInputBox} {...getRootProps()}>
                    <input value={service} className={classes.autoCompleteInput} placeholder="Search Services" {...getInputProps()} />
                    <IconButton color="primary" onMouseDown={getInputProps().onMouseDown}>
                        <IoMdArrowDropdown />
                    </IconButton>
                </div>
                {groupedOptions.length > 0 ? (
                    <ul className={classes.autoCompleteBox} {...getListboxProps()} >
                        {groupedOptions.map((option, index) => (
                            <li {...getOptionProps({ option, index })} onClick={(e) => showResources(index, e)}>{option}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </Grid>
    );
}

export default ServicesSearch;
