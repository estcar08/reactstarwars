import { Toolbar, Typography} from "@mui/material/";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  typo: {
    flexGrow: 1,
    textAlign: "center"
  },
  offset: theme.mixins.toolbar,
  container: {
    display: "flex"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.offset}></div>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          2021 ITK Practice
        </Typography>
      </Toolbar>
    </div>
  );
}

