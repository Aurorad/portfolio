// Core
import React from 'react';
// MUI Components
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// MUI Icons
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import EmojiFoodBeverageRoundedIcon from '@material-ui/icons/EmojiFoodBeverageRounded';
import SendIcon from '@material-ui/icons/Send';
// Components
import map from '../../img/map.jpg';
// Styles
import styles from './styles';

const useStyles = makeStyles(theme => styles(theme));

export const Contact = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box
                className={classes.contact__header}
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Typography variant='h3' className={classes.contactHeader__title}>
                    CONTACT
                </Typography>
            </Box>
            <Container
                maxWidth='md'
                className={classes.contact}
                id='contact'
            >
                <Typography variant='h6' className={classes.contact__title}>
                    WHERE I WORK
                </Typography>
                <Typography variant='subtitle1' className={classes.contact__subtitle}>
                    <em>I'd love your feedback!</em>
                </Typography>
                <Grid container spacing={4}>
                    <Grid
                        item
                        sm={12}
                        md={4}
                    >
                        <img
                            src={map}
                            alt='Index image'
                            className={classes.contact__image}
                        />
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        xs={12}
                        md={8}
                    >
                        <Typography variant='body1' className={classes.contact__contacts}>
                            <LocationOnRoundedIcon className={classes.contact__icon}/> Chicago, US
                        </Typography>
                        <Typography variant='body1' className={classes.contact__contacts}>
                            <PhoneRoundedIcon className={classes.contact__icon}/> Phone: +00 151515
                        </Typography>
                        <Typography variant='body1' className={classes.contact__contacts}>
                            <EmailRoundedIcon className={classes.contact__icon}/> Email: mail@mail.com
                        </Typography>
                        <Typography variant='body1' className={classes.contact__contacts}>
                            Swing by for a cup of <EmojiFoodBeverageRoundedIcon /> , or leave me a note:
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                            >
                                <TextField
                                    label='Name'
                                    variant='outlined'
                                    color='secondary'
                                    name='name'
                                    type='text'
                                    size='small'
                                    className={classes.contact__field}
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={6}
                            >
                                <TextField
                                    label='Email'
                                    variant='outlined'
                                    color='secondary'
                                    name='email'
                                    type='email'
                                    size='small'
                                    className={classes.contact__field}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            label='Message'
                            variant='outlined'
                            color='secondary'
                            name='message'
                            type='text'
                            size='small'
                            className={classes.contact__field}
                            fullWidth
                        />
                        <Box display='flex' justifyContent='flex-end' >
                            <Button
                                color='secondary'
                                variant='contained'
                                type='submit'
                                className={classes.contact__button}
                            >
                                <SendIcon />  SEND MESSAGE
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};