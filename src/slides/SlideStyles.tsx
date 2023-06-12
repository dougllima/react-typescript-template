import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  slide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center"
  },
  slideTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold"
  },
  slideContent: {
    marginBottom: theme.spacing(4)
  }
}));

export default useStyles;
