import * as React from 'react';
import { useRef } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@mui/material/Grid";
import { useContext } from 'react';
import { Context } from "../App";
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from "react";
import axios from "axios";
import {text} from '../resources/text-gen/index';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import  CustomizedSnackbars  from './Alert';

function arrayPlanets(planets){
  const arr = [];

  planets.forEach((row) => {
      arr.push({label: row.name});
  });

  return arr;
}

function validations(titleValue,prodValue,relDateValue,dirValue,planetValue,imgField){
  if(titleValue.trim() === "" || 
    prodValue.trim() === "" ||
    relDateValue.trim() === "" ||
    dirValue.trim() === "" ||
    planetValue.trim() === "" ||
    imgField.trim() === ""){
      
      return false
  }else{
    return true;
  }
}
export default function FormDialog() {
    const [msg, setMsg] = useState("Movie Saved!");
    const [imgField, setImgField] = useState("");
    let { data,setData, images, setImg,open,handleClickOpenClose,handleAlert } = useContext(Context);
    const [label, setLabel] = useState("No image selected yet");
    const [status, setStatus] = useState("");
    const [p, setP] = useState([]);
    useEffect(() => {
      axios
        .get("https://swapi.dev/api/planets/")
        .then(function (response) {
          setP(arrayPlanets(response.data.results));
        })
        .catch(function (error) {
          console.log(error);
        });
      // eslint-disable-next-line
    }, []);
    const idField = useRef(''); 
    const titleField = useRef(''); 
    const prodField = useRef(''); 
    const relDateField = useRef(''); 
    const dirField = useRef(''); 
    const planetField = useRef(''); 

    const handleOnSumit = () =>{
        const idValue = idField.current.value;
        const titleValue = titleField.current.value;
        const prodValue = prodField.current.value;
        const relDateValue = relDateField.current.value;
        const dirValue = dirField.current.value;
        const planetValue = planetField.current.value;
        const v1 = validations(titleValue,prodValue,relDateValue,dirValue,planetValue,imgField);
        const v2 = idValidation(Number(idValue));
        if(v1){
          if(!v2){
            setStatus("success");
            onAdd({
              episode_id:Number(idValue),
              title:titleValue,
              director:dirValue,
              release_date:relDateValue,
              opening_crawl:text
            },{
              id:Number(idValue),
              img:imgField
            });
            setMsg("Movie Saved!");
            handleCleanAndClose();
          }else{setMsg("Movie Id already exist!"); setStatus("warning");}
        }else { setMsg("Complete all fields!"); setStatus("warning");}
        setImgField("");
        setLabel("No image selected yet");
        handleAlert();
    }

    const handleCleanAndClose = ()=>{
      handleClickOpenClose();
      idField.current.value = "";
      titleField.current.value = "";
      prodField.current.value = "";
      relDateField.current.value = "";
      dirField.current.value = "";
      planetField.current.value = "";
      setImgField("");
      setLabel("No image selected yet");
    }

    const onAdd = (contact, newImage)=>{
      console.log(newImage);
      setData([...data,contact]);
      setImg([...images,newImage])
    }
    const handleChange = (e) => {
      setImgField(URL.createObjectURL(e.target.files[0]));
      setLabel(e.target.files[0].name);
    }

    const idValidation = (idMovie)=>{
      return data.some(item => idMovie === item.episode_id);
    }

    return (
      <div>
        <Dialog open={open} onClose={handleClickOpenClose} maxWidth="sm" fullWidth>
          <DialogTitle>Movie Form</DialogTitle>
          <DialogContent>
            <Grid container direction="row" spacing={1}>
              <Grid item xs={10}>
                  <TextField   type="number" required inputRef={idField} fullWidth id="idField"  label="Movie Id" variant="standard" />
              </Grid>
              <Grid item xs={12}>
                  <TextField required inputRef={titleField} fullWidth id="titleField"  label="Title" variant="standard" />
              </Grid>
              <Grid item xs={12}>
                  <TextField required inputRef={prodField} fullWidth id="prodField"  label="Producer" variant="standard" />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  required
                  inputRef={relDateField}
                  id="relDateField"
                  label="Release Date"
                  type="date"
                  defaultValue="2017-05-24"
                  sx={{ width: 220 }}
                />
              </Grid>
              <Grid item xs={12}>
                  <TextField required inputRef={dirField} fullWidth id="dirField" label="Director" variant="standard" />
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel control={ <Button
                  variant="contained"
                  component="label"
                  >
                      Upload File
                    <input
                      accept="image/*"
                      onChange= {handleChange}
                      type="file"
                      hidden
                    />
                  </Button> } label={label} />
                </FormGroup>
  
              </Grid>
              <Grid item xs={10}>
                <Autocomplete
                  required
                  disablePortal
                  id="planetField"
                  options={p}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField inputRef={planetField} {...params} label="Select Planet" />}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCleanAndClose}>Cancel</Button>
            <Button onClick={handleOnSumit}>Save</Button>
          </DialogActions>
        </Dialog>
        <CustomizedSnackbars type={status} text={msg}/>
      </div>
    );
}