// Core
import React from 'react';
// MUI Components
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Styles
import styles from './styles';

const useStyles = makeStyles(theme => styles(theme));

export const Header = () => {
    const classes = useStyles();
    return (
        <Box
            id='header'
            className={classes.header}
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Typography variant='h6' className={classes.header__title}>
                MY WEBSITE LOGO
            </Typography>

        </Box>
    );
};