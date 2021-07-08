import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core';
import { Cloud } from '@material-ui/icons';
import BackgroundSwitch from './BackgroundSwitch';
import Spinner from './Spinner';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
    },
}));

export default function NavBar({ bgOn, setBgOn, isLoading, setisLoading }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {isLoading ? <Spinner /> : <Cloud />}

                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Weather App.Js
                    </Typography>

                    <BackgroundSwitch bgOn={bgOn} setBgOn={setBgOn} />
                </Toolbar>
            </AppBar>
        </div>
    );
}
