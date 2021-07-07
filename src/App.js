import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ParticlesBg from 'particles-bg'
import WeatherForm from './components/Form';
import WeatherCard from './components/WeatherCard';
import { Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({

  container: {
    marginTop: theme.spacing(2)
  }

}));

function App() {
  const classes = useStyles();
  const [bgOn, setBgOn] = useState(false);
  const [dataOn, setDataOn] = useState(false);
  const [place, setPlace] = useState('kampala')

  //  fetching data
  useEffect(() => {
    loadData();

  }, []);


  const key = "7bbb36f27712361729c5a0cd6eb0046d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`;

  const loadData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
  }


  return (
    <Grid container>

      <Grid item xs={12}>
        <NavBar bgOn={bgOn} dataOn={dataOn} setDataOn={setDataOn} setBgOn={setBgOn} />
      </Grid>

      <Grid item xs={12} md={6}  >
        <WeatherForm dataOn={dataOn} place={place} setPlace={setPlace} setDataOn={setDataOn} />
      </Grid>

      <Grid item xs={12} md={6} className={classes.container} >
        {dataOn ? <WeatherCard logo={logo} /> : <span></span>}
      </Grid>

      {/* <Grid item xs={12} md={6} className={classes.container} >
        {dataOn ? : <span></span>}
      </Grid> */}

      {bgOn ? <ParticlesBg type="circle" bg={true} /> : <span></span>}


    </Grid>
  );
}
export default App;
