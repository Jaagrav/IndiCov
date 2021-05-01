import React from 'react';

// import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';
import { Grid, Typography, Hidden, Container } from '@material-ui/core';
import Tip from '../../components/Tip';

import medicalMask from '../../assets/medical-mask 1.png';
import hands from '../../assets/washing-hands 1.png';
import liquidSoap from '../../assets/liquid-soap 1.png';
import socialDist from '../../assets/social-distancing 1.png';
import Member from '../../components/Member';

import Ankita from "./assets/Ankita.png";
import Devraj from "./assets/Devraj 1.png";
import Jaagrav from "./assets/Jaagrav.png";
import Shrutika from "./assets/Shrutika 1.png";
import Trusha from "./assets/Trusha.png";
import Shridhar from "./assets/Shridhar.png";

const useStyles = makeStyles(styles);

function AboutPage() {
    const classes = useStyles();

    return (
        <Grid container className={classes.aboutPage} >
            <Hidden mdUp>
                <Grid xs={12}>
                    <Typography variant="h5" className={classes.brandingName}>
                        Indi<Typography variant="h5" className={classes.secondaryColorBrandingName}>Cov</Typography>
                    </Typography>
                </Grid>
            </Hidden>

            {/* Hero Section */}
            <div className={classes.about_main}>
                <Typography variant="h4" className={classes.title}>What is <Typography variant="h4" className={classes.title_underline}>IndiCov</Typography> ?</Typography>
                <Typography variant="caption" gutterBottom className={classes.info}><strong>IndiCov</strong> is a platform created by our team to help patients during this pandemic. The coronavirus scare in India has left a tremendous impact on its citizens. There is a shortage of resources. These resources include oxygen, beds, plasma, blood, ventilators, ambulances, vaccines, and other medications. </Typography>
                <Typography variant="caption" className={classes.info}>With <strong>IndiCov</strong>, we plan to provide all the help possible to the patient by informing and constantly updating them of the available resources.</Typography>
            </div>

            {/* Prevention Section */}
            <Grid
                container
            >
                <Grid item sm={12}><Typography variant="h4" className={classes.title}>Basic Prevention Methods</Typography></Grid>
                <Grid container sm={12} md={6}>
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

            {/* Team Section */}
            <Typography variant="h4" className={classes.title}>Our Team</Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.info}>Meet the spirited team that worked behind the scenes to establish this platform.</Typography>

            <Member image={Devraj} name="Devraj Chatribin" occ1="Founder & Design Lead" occ2="Web Developer | UI/UX Designer" linkedIn="https://www.linkedin.com/in/devraj-chatribin/" instagram="https://www.instagram.com/cuppycake_001/" github="https://github.com/DevrajDC" website="https://devraj-chatribin.netlify.app/" />
            <Member image={Ankita} name="Ankita Sahu" occ1="Events & Graphics Lead" occ2="Web Developer | Content Writer" linkedIn="https://www.linkedin.com/in/ankita-sahu-540920201/" github="https://github.com/SAHU-01" />
            <Member image={Jaagrav} name="Jaagrav Seal" occ1="Development Lead" occ2="Creative Web Developer" linkedIn="https://www.linkedin.com/in/jaagrav/" github="https://github.com/Jaagrav/" website="https://xjaagrav.netlify.app/stories" />
            <Member image={Shrutika} name="Shrutika Gawas" occ1="Social Media Administrator" occ2="Web Developer" linkedIn="https://www.linkedin.com/in/shrutika-g-40829910b/" instagram="https://www.instagram.com/shrutikagawas/" />
            <Member image={Trusha} name="Trusha Neogi" occ1="Graphic & Content Lead" occ2="Graphic Designer" linkedIn="https://www.linkedin.com/in/trusha-neogi-6a69bb191/" instagram="https://www.instagram.com/tuuushaa/" />
            <Member image={Shridhar} name="Shridhar Kamat" occ1="Development Team" occ2="Web Developer" linkedIn="https://www.linkedin.com/in/shridhar-kamat-1015a41bb" github="https://github.com/Shridhar-dev" website="https://thehardwaronzone.com/" />

            {/* Sources Section */}
            <div className={classes.sources}>
                <Typography variant="h3" className={classes.title}>Sources</Typography>
                <Typography variant="subtitle1" className={classes.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </div>
        </Grid>
    );
}

export default AboutPage;
