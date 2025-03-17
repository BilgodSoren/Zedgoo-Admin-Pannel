import { createTheme } from "@mui/material";
import Fontfamily from "./fontfamilyTheme";

const theme = createTheme({
  typography: {
    fontFamily: Fontfamily.fontPrimary.fontFamily,
    color:'rgba(42, 42, 43, 1)'
  },

});

export default theme;