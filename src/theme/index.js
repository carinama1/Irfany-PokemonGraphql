import { createMuiTheme, colors, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

let theme = createMuiTheme({
  palette: {
    background: {
      dark: "#F4F6F8",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: colors.common.white,
    },
    secondary: {
      main: colors.indigo[500],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  btn: {
    primary: "#ffcb05",
  },
  typography,
});

theme = responsiveFontSizes(theme);

export default theme;
