import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useTheme } from "@mui/material";
import { useScrollTrigger } from "@mui/material";
import { Typography } from "@mui/material";
import { Tabs, Tab } from "@mui/material";


function ElevationScroll(props) {
     
    const { children } = props;
    // useScrollTrigger is an event listener
    const trigger = useScrollTrigger({
      disableHysteresis: true,   
      threshold: 0
    //   how far a user needs to scroll to trigger event listener. Default is 100.
    });
    
    // returns new version of component that is being wrapped by ElevationScroll. Clones the children and returns a new copy of the elevation when triggered
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme) => ({
    appbar: {
        zIndex: theme.zIndex.modal +  1
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    }
}))

export default function NavBar() {
    const [value, setValue] = useState()
    const classes = useStyles()

    const tabOptions = [
        {name: "Illnesses", link: "/illnesse"},
        {name: "Remedies", link: "/remedies"}
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const tabs = (
            <React.Fragment>
                <Tabs value={value} onChange={handleChange}>
                {tabOptions.map((tab, index) => (
                        <Tab 
                         key={`${tab}${index}`}
                         component={Link} 
                         to={tab.link} 
                         label={tab.name} 
                         />
                    ))}
                </Tabs>
            </React.Fragment>
    )

    return(
        <React.Fragment>
        
            <AppBar className={classes.appbar} position="static" >
                <Toolbar className={classes.toolbarMargin} disableGutters>
                   
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}