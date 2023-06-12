import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Presentation from "./components/Presentation";
import "./styles.css";

const darkTheme = createTheme({
  palette: {
    type: "dark"
  }
});

ReactDOM.render(
  <Router>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Presentation />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
