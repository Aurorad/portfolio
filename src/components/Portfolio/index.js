// Core
import React from 'react';
// MUI Components
import {
    Container,
    Box,
    Typography,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Components
import { Image } from './Image';
// Styles
import styles from './styles';

const useStyles = makeStyles(theme => styles(theme));

export const Portfolio = () => {
    const classes = useStyles();

    return (
        <Container
            maxWidth='md'
            id='portfolio'
            className={classes.portfolio}
        >
            <Typography variant='h6' className={classes.portfolio__title}>
                MY WORK
            </Typography>
            <Typography variant='subtitle1' className={classes.portfolio__title}>
                <em>Here are some of my latest lorem work ipsum tipsum. <br/>
                    Click on the images to make them bigger
                </em>
            </Typography>
            <Image />

            <Box display='flex' justifyContent='center'>
                <Button
                    color='secondary'
                    variant='outlined'
                    size="large"
                >
                    Lead more
                </Button>
            </Box>
        </Container>
    );
};
