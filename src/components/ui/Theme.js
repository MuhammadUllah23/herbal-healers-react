import { createTheme } from "@mui/material"

const forestGreen = "#228b22"
const yellowOrange = "#ffae42"

export default createTheme({
    palette: {
        common: {
            green: `${forestGreen}`,
            orange: `${yellowOrange}`
        },
        primary: {
            main: `${forestGreen}`
        },
        secondary: {
            main: `${yellowOrange}`
        }
    },
})