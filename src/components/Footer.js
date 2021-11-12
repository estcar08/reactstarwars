import { AppBar, Toolbar, Typography, Container } from "@mui/material/";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  typo: {
    flexGrow: 1,
    textAlign: "center",
  },
  offset: theme.mixins.toolbar,
  container: {
    display: "flex",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.offset}></div>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Container className={classes.container}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Star Wars Movies
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
