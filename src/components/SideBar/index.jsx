import React from 'react';
import { useHistory } from 'react-router-dom';

import { Drawer, Tabs, Tab, Icon, Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import styles from './style';

import routesData from "../../routes/routesData";

import { HiSun } from "react-icons/hi";

const useStyles = makeStyles(styles);

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function SideBar() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <Drawer
            variant="permanent"
            classes={{
                root: classes.drawerRoot,
                paper: classes.drawerPaper
            }}
        >
            <Typography variant="h6" className={classes.brandingName}>
                Indi<Typography variant="h6" className={classes.secondaryColorBrandingName}>Cov</Typography>
            </Typography>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                TabIndicatorProps={{ className: classes.tabIndicator }}
            >
                {routesData.map((data, index) => {
                    if (data.showOnHeader)
                        return <Tab
                            key={`link-index-${index}`}
                            onClick={() => history.push(data.pageURL)}
                            className={classes.tab}
                            icon={data.icon}
                            aria-label={data.pageName}
                            {...a11yProps(index)}
                        />;
                    else return null;
                })}
            </Tabs>
            <Button className={classes.tab}><HiSun /></Button>
        </Drawer>
    );
}

export default SideBar;
