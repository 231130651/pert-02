import {
    AppBar,
    CssBaseline,
    GlobalStyles,
    ThemeProvider,
    createTheme,
} from "@mui/material"
import { AppBarCustom } from "./components/AppBarCustom"
import { BannerCustom } from "./components/BannerCustom"
import { PricingPlan } from "./components/PricingPlan";

const defaultTheme = createTheme();
function M07App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles>
                styles={{ ul: { margin: 0, padding: 0, listStyle: "none"}}}
            </GlobalStyles>
            <CssBaseline />

            <AppBarCustom />
            <BannerCustom />
            <PricingPlan />
        </ThemeProvider>
    )
}

export default M07App;