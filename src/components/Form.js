import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3)
    }
}));

export default function WeatherForm({ dataOn, setDataOn, place, setPlace }) {
    const classes = useStyles();
    const handleChange = () => {

        setInterval(setDataOn(!dataOn), 10000)
    }
    const handlePlace = (e) => {
        setPlace(e.target.value)
    }

    return (
        <Container className={classes.container}>
            <div className={classes.root}>
                <div>

                    <TextField
                        onChange={handlePlace}
                        id="standard-full-width"
                        label="City or Country"
                        style={{ margin: 8 }}
                        placeholder="Write here"
                        helperText="city name or country!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <span>

                        <Button onClick={handleChange} variant="contained" color="primary" href="#contained-buttons">
                            Get Weather
                        </Button>

                    </span>


                </div>
            </div>
        </Container>
    );
}
