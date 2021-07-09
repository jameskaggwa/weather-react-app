import logo from './logo.svg';
// import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ParticlesBg from 'particles-bg'
import WeatherForm from './components/Form';
import WeatherCard from './components/WeatherCard';
import { Grid, makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

  container: {
    marginTop: theme.spacing(2)
  }

}));

function App() {
  const classes = useStyles();
  const [bgOn, setBgOn] = useState(false);
  const [data, setData] = useState(null);
  const [place, setPlace] = useState('');
  const [submit, setSubmit] = useState(false);
  const [showCard, setShowCard] = useState(false);

  //  fetching data

  useEffect(() => {
    if (submit) {
      console.log(place);
      loadData();



    }


  }, [submit]);


  const loadData = async () => {
    const key = "7bbb36f27712361729c5a0cd6eb0046d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    setData(data)
    console.log(data);
    setShowCard(true)
    setPlace('')
    setSubmit(false)
  }


  return (
    <Grid container>

      <Grid item xs={12}>
        <NavBar bgOn={bgOn} submit={submit} setSubmit={setSubmit} setBgOn={setBgOn} />
      </Grid>

      <Grid item xs={12} md={6}  >
        <WeatherForm submit={submit} setSubmit={setSubmit} place={place} setPlace={setPlace} />
      </Grid>

      <Grid item xs={12} md={6} className={classes.container} >
        {showCard ? <WeatherCard data={data} logo={logo} /> : <span></span>}
      </Grid>

      {/* <Grid item xs={12} md={6} className={classes.container} >
        {submit ? : <span></span>}
      </Grid> */}

      {bgOn ? <ParticlesBg type="circle" bg={true} /> : <span></span>}


    </Grid>
  );
}
export default App;
