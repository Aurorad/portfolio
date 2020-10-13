// Core
import React from 'react';
// MUI Components
import {
    Container,
    Typography,
    Grid,
    LinearProgress,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// MUI Icons
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import LaptopRoundedIcon from '@material-ui/icons/LaptopRounded';
import PhotoSizeSelectActualRoundedIcon from '@material-ui/icons/PhotoSizeSelectActualRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
// Components
import avatar from '../../img/avatar_hat.jpg';
// Styles
import styles from './styles';

const useStyles = makeStyles(theme => styles(theme));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 30,
        borderRadius: 0,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 0,
        backgroundColor: theme.palette.secondary.main,
    },
}))(LinearProgress);

export const About = () => {
    const classes = useStyles();
    return (
        <Container id='about' maxWidth='md' className={classes.about}>
            <Typography variant='h6' className={classes.about__title}>
                ABOUT ME
            </Typography>
            <Typography variant='subtitle1' className={classes.about__title}>
                <em>I love photography</em>
            </Typography>
            <Typography variant='body1' className={classes.about__paragraph}>
                We have created a fictional "personal" website/blog, and our fictional character is a hobby
                photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Grid container spacing={4} className={classes.about__paragraph}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                >
                    <Typography variant="h6" className={classes.about__title}>
                        <PersonRoundedIcon /> My Name
                    </Typography>
                    <img
                        src={avatar}
                        alt='Avatar Hat'
                        className={classes.about__image}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                >
                    <Typography variant='body1'>
                        Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant='h6' className={classes.about__title}>
                Im really good at:
            </Typography>

            <Typography variant='body1' className={classes.about__progress}>
                <CameraAltRoundedIcon />  Photography
            </Typography>
            <BorderLinearProgress
                variant="determinate"
                value={90} title={'90%'}
                className={classes.about__paragraph}
            />

            <Typography variant='body1' className={classes.about__progress}>
                <LaptopRoundedIcon />  Web Design
            </Typography>
            <BorderLinearProgress
                variant="determinate"
                value={85}
                title={'85%'}
                className={classes.about__paragraph}
            />

            <Typography variant='body1' className={classes.about__progress}>
                <PhotoSizeSelectActualRoundedIcon />  Photoshop
            </Typography>
            <BorderLinearProgress
                variant="determinate"
                value={75}
                title={'75%'}
                className={classes.about__paragraph}
            />
        </Container>
    );
};