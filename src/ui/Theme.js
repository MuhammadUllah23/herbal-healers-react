import { createMuiTheme } from "@mui/material/core";

const ufoGreen = "#3cd070"
const yellowOrange = "#ffae42"

export default createMuiTheme({
    palette: {
        common: {
            green: `${ufoGreen}`,
            orange: `${yellowOrange}`
        },
        primary: {
            main: `${ufoGreen}`
        },
        secondary: {
            main: `${yellowOrange}`
        }
    },
})