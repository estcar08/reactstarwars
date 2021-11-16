import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material//Typography";
import BasicModal from "./BasicModal";
import { useState } from "react";
import { useContext } from 'react';
import { Context } from "../App";
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

OutlinedCard.propTypes = {
  title: PropTypes.string, 
  director:PropTypes.string, 
  release_date:PropTypes.string, 
  episode_id:PropTypes.number, 
  opening_crawl:PropTypes.string
}

export default function OutlinedCard(props) {
  let { images } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const classes = useStyles();
  const { title, director, release_date, episode_id, opening_crawl } = props;
  return (
    <Card key={episode_id} className={classes.root} variant="outlined">
      <CardContent>
        <CardMedia
          component="img"
          height="194"
          image={ images.find((x) => x.id === episode_id).img  }
          alt={title}
        />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {release_date}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {director}
        </Typography>
        <Typography variant="body2" component="p">
          {opening_crawl.substring(0, 100).concat("...")}
        </Typography>
      </CardContent>
      <CardActions>
        <BasicModal
          isDialogOpened={isOpen}
          handleCloseDialog={handleClose}
          title={title}
          opening_crawl={opening_crawl}
        />
        <Button onClick={() => handleOpen()} size="small">
          See opening
        </Button>
      </CardActions>
    </Card>
  );
}
