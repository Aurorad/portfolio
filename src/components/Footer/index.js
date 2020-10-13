// Core
import React from 'react';
// MUI Components
import {
    Box,
    Button,
    Link,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// MUI Icons
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
// Styles
import styles from './styles';

const useStyles = makeStyles(theme => styles(theme));

export const Footer = () => {
    const classes = useStyles();
    return (
        <Box
            className={classes.footer}
            display='flex'
            flexDirection='column'
            alignItems='center'
        >
            <Button
                color='primary'
                variant='contained'
                href='#header'
            >
                <ArrowUpwardIcon /> TO THE TOP
            </Button>

            <Box className={classes.footer__icons}>
                <Link href=''><FacebookIcon /></Link>
                <Link href=''><InstagramIcon /></Link>
                <Link href=''><LinkedInIcon /></Link>
                <Link href=''><PinterestIcon /></Link>
                <Link href=''><TwitterIcon /></Link>
            </Box>

            <Typography variant='subtitle1'>
                Made by Daryna Dulia
            </Typography>
        </Box>
    );
}