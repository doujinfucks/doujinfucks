import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export default createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3c3c3c",
      secondary: "#323232",
      dark: "#3c3c3c",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#FFF",
    },
    background: {
      paper: "#1e1e1e",
      default: "#3c3c3c",
    },
  },
  typography: {
    fontFamily: ["Open Sans", '"Helvetica Neue"', "sans-serif"],
  },
});
