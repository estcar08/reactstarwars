import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});

export default function GridCont() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/films/")
      .then(function (response) {
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justifyContent="center"
    >
      {data.map((row, index) => (
        <Grid key={row.episode_id} item xs={12} sm={6} md={4}>
          <Card
            key={row.episode_id}
            episode_id={row.episode_id}
            title={row.title}
            director={row.director}
            release_date={row.release_date}
            opening_crawl={row.opening_crawl}
          />
        </Grid>
      ))}
    </Grid>
  );
}
