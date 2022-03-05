import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/material";
import { useTheme } from "@mui/material";
import { useScrollTrigger } from "@mui/material";
import { Typography } from "@mui/material";

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

const useStyles = makeStyles(theme => ({

}))

export default function NavBar() {

    return(
        <React.Fragment>

        </React.Fragment>
    )
}