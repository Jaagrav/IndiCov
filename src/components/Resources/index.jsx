import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Typography, Card, IconButton, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

import { Oxygen } from './assets';
import styles from "./style";

import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaAmbulance, FaBed, FaSyringe } from 'react-icons/fa';
import { MdPhoneInTalk } from 'react-icons/md';

const useStyles = makeStyles(styles);

function Resources({ mapArray, index }) {
    const classes = useStyles(), history = useHistory();
    const [resources, setResources] = useState({});

    const openResources = (service) => {
        // console.log(mapArray[index].title, index);
        history.push(`/resources?state=${mapArray[index].title}&service=${service}`);
    };

    useEffect(() => {
        var configIndiaData = {
            method: 'get',
            url: 'https://life-api.coronasafe.network/data/active_district_data.json',
            headers: {}
        };

        axios(configIndiaData)
            .then(function (response) {
                console.log(response.data);
                setResources(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <Grid xs={12}>
            <Typography gutterBottom variant="h5">Resources</Typography>
            <ButtonBase className={classes.buttonBase} onClick={() => openResources("Oxygen")}>
                <Card className={classes.card} button>
                    <Oxygen className={classes.oxygenIconButton} />
                    <Typography className={classes.oxygenIconButton} variant="subtitle1">Oxygen</Typography>
                    <IconButton className={classes.oxygenIconButton}>
                        <AiOutlineArrowRight />
                    </IconButton>
                </Card>
            </ButtonBase>

            <ButtonBase className={classes.buttonBase} onClick={() => openResources("Ambulance")}>
                <Card className={classes.card} button>
                    <FaAmbulance className={classes.ambulanceIconButton} />
                    <Typography className={classes.ambulanceIconButton} variant="subtitle1">Ambulance</Typography>
                    <IconButton className={classes.ambulanceIconButton}>
                        <AiOutlineArrowRight />
                    </IconButton>
                </Card>
            </ButtonBase>

            <ButtonBase className={classes.buttonBase} onClick={() => openResources("Hospital and Clinics")}>
                <Card className={classes.card} button>
                    <FaBed className={classes.bedsIconButton} />
                    <Typography className={classes.bedsIconButton} variant="subtitle1">Beds</Typography>
                    <IconButton className={classes.bedsIconButton}>
                        <AiOutlineArrowRight />
                    </IconButton>
                </Card>
            </ButtonBase>

            {/* <ButtonBase className={classes.buttonBase}>
                <Card className={classes.card} button>
                    <MdPhoneInTalk className={classes.helplineIconButton} />
                    <Typography className={classes.helplineIconButton} variant="subtitle1">Helpline</Typography>
                    <IconButton className={classes.helplineIconButton}>
                        <AiOutlineArrowRight />
                    </IconButton>
                </Card>
            </ButtonBase> */}

            <ButtonBase className={classes.buttonBase} onClick={() => openResources("Medicine")}>
                <Card className={classes.card} button>
                    <FaSyringe className={classes.medicineIconButton} />
                    <Typography className={classes.medicineIconButton} variant="subtitle1">Medicine</Typography>
                    <IconButton className={classes.medicineIconButton}>
                        <AiOutlineArrowRight />
                    </IconButton>
                </Card>
            </ButtonBase>
        </Grid>
    );
}

export default Resources;
