import React from 'react';

// import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';
import { Grid, Typography } from '@material-ui/core';
import Tip from '../../components/Tip';

import medicalMask from '../../assets/medical-mask 1.png'
import hands from '../../assets/washing-hands 1.png'
import liquidSoap from '../../assets/liquid-soap 1.png'
import socialDist from '../../assets/social-distancing 1.png'
import Member from '../../components/Member';

import image from '../../assets/devraj.png'

const useStyles = makeStyles(styles);

function AboutPage() {
    const classes = useStyles();

    return (
        <div>

            {/* Hero Section */}
            <div className={classes.about_main}>
                <Typography variant="h3" className={classes.title}>What is <Typography variant="h3" className={classes.title_underline}>IndiCov</Typography> ?</Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.info}><strong>IndiCov</strong> is a platform created by our team to help patients during this pandemic. The coronavirus scare in India has left a tremendous impact on its citizens. There is a shortage of resources. These resources include oxygen, beds, plasma, blood, ventilators, ambulances, vaccines, and other medications. </Typography>
                <Typography variant="subtitle1" className={classes.info}>With <strong>IndiCov</strong>, we plan to provide all the help possible to the patient by informing and constantly updating them of the available resources.</Typography>
            </div>

            {/* Prevention Section */}
            <Grid
                container  
            >
                <Grid
                container
                justify={'center'}
                >
                <Typography variant="h3" className={classes.prevention_title}>Basic Prevention Methods</Typography>
                <Grid container xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Tip
                    image={medicalMask}
                    title={"Face covers/masks"}
                    description={
                        "Wear a mask in public and ensure it covers your nose and mouth and is secure under the chin."
                    }
                    />
                    <Tip
                    image={hands}
                    title={"Wash Hands frequently"}
                    description={
                        "Wash hands with soap and water for at least 20 seconds and avoid touching your face."
                    }
                    />
                </Grid>
                <Grid container xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Tip
                    image={liquidSoap}
                    title={"Use of sanitizers"}
                    description={
                        "Use an alcohol-based sanitizer to prevent the spread of germs."
                    }
                    />
                    <Tip
                    image={socialDist}
                    title={"Physical distancing"}
                    description={
                        "Stay at least 6 feet apart from people who don't live with you, and avoid close contact with sick people."
                    }
                    />
                </Grid>
                </Grid>
            </Grid>

            {/* Team Section */}
            <div className={classes.about_main}>
                <Typography variant="h3" className={classes.title}>Our Team</Typography>
                <Typography variant="subtitle1" gutterBottom className={classes.info}>Meet the spirited team that worked behind the scenes to establish this platform.</Typography>
             
            <Grid
                container
            >
                <Grid
                container
                
                >
                <Grid container className={classes.member_grid} xs={12} md={4} sm={12} justify={'center'} >
                    <Member image={image} linkedIn="e" instagram="s" github="w" website="w"/>
                    <Member image={image} linkedIn="e" instagram="s"/>             
                </Grid>
                <Grid container className={classes.member_grid} xs={12} md={4} sm={12} justify={'center'} >
                    <Member image={image} linkedIn="e" instagram="s"/>
                    <Member image={image} linkedIn="e" instagram="s"/>
                </Grid>
                <Grid container className={classes.member_grid} xs={12} md={4} sm={12} justify={'center'} >
                    <Member image={image} youtube="w" website="w"/>
                    <Member image={image} linkedIn="e" instagram="s"/>
                </Grid>
                
                </Grid>
            </Grid>

            </div>

            {/* Sources Section */}
            <div className={classes.about_main}>
                <Typography variant="h3" className={classes.title}>Sources</Typography>
                <Typography variant="subtitle1" className={classes.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </div>
        </div>
    );
}

export default AboutPage;
