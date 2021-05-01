import React,{useState, useEffect} from "react";

import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";
import Links from '../Links/index'
const useStyles = makeStyles(style);

function Member({ name, occ1, occ2, image, linkedIn, instagram, github, website}) {
  const classes = useStyles();
  const [IsDesktop, setIsDesktop] = useState(window.innerWidth > 900)
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
      <Grid item sm={12} md={4} className={classes.container}>
        <Box className={ IsDesktop ? classes.infoHolder : classes.infoHolder2}>
          <div className={classes.imageWrapper}>
            <img className={IsDesktop ? classes.image : classes.image2 } src={image} alt="Member" />
          </div>
          <div className={classes.infoBox}>
            <Typography variant="h5" className={classes.title}>{name}</Typography>
            <Typography variant="h6" className={classes.role}>{occ1}</Typography>
            <Typography variant="subtitle2" className={classes.description}>{occ2}</Typography>
            <div style={{display:'flex'}}>
                <Links linkedIn={linkedIn} instagram={instagram} github={github} website={website} />
            </div>
          </div>
        </Box>
      </Grid>
  );
}

export default Member;
