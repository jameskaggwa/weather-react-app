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
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState(null)
  const [place, setPlace] = useState('kampala')
  const [showCard, setShowCard] = useState(false);

  //  fetching data

  useEffect(() => {
    // setisLoading(true)
    // loadData(place);
    // setisLoading(false)
    console.log('am geting data ...')

  }, [isLoading]);


  const loadData = async (place) => {
    const key = "7bbb36f27712361729c5a0cd6eb0046d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
  }


  return (
    <Grid container>

      <Grid item xs={12}>
        <NavBar bgOn={bgOn} isLoading={isLoading} setisLoading={setisLoading} setBgOn={setBgOn} />
      </Grid>

      <Grid item xs={12} md={6}  >
        <WeatherForm isLoading={isLoading} place={place} setPlace={setPlace} setisLoading={setisLoading} />
      </Grid>

      <Grid item xs={12} md={6} className={classes.container} >
        {isLoading ? <WeatherCard logo={logo} /> : <span></span>}
      </Grid>

      {/* <Grid item xs={12} md={6} className={classes.container} >
        {isLoading ? : <span></span>}
      </Grid> */}

      {bgOn ? <ParticlesBg type="circle" bg={true} /> : <span></span>}


    </Grid>
  );
}
export default App;
