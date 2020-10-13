// Core
import React, { useState } from 'react';
// MUI Components
import {
    AppBar,
    Toolbar,
    Link,
    Typography,
    Hidden,
    IconButton,
    Drawer,
    List,
    ListItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// MUI Icons
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// Styles
import styles from './styles';

const useStyles = makeStyles(theme => styles(theme));

export const Menu = () => {
    const [phoneOpen, setPhoneOpen] = useState(false);
    const [colored, setColored] = useState(false);
    const classes = useStyles();

    window.addEventListener("scroll", () => {
        const scroll = window.pageYOffset;
        if (scroll > 300) {
            setColored(true);
        }
        else {
            setColored(false);
        }
    });

    let mainClass;
    if (colored) {
        mainClass = classes.menu_white;
    }
    else {
        mainClass = classes.menu;
    }

    const handleClick = () => {
        setPhoneOpen(!phoneOpen);
    };

    return (
        <div>
            <AppBar className={mainClass}>
                <Toolbar >
                    <Link
                        href='#'
                        color='secondary'
                        className={classes.menu__home}
                    >
                        <Typography variant='subtitle1'>
                            HOME
                        </Typography>
                    </Link>
                    <Hidden xsDown>
                        <Link
                            href='#about'
                            color='secondary'
                            className={classes.menu__link}
                        >
                            <Typography variant='subtitle1'>
                                <PersonRoundedIcon /> ABOUT
                            </Typography>
                        </Link>
                        <Link
                            href='#portfolio'
                            color='secondary'
                            className={classes.menu__link}
                        >
                            <Typography variant='subtitle1'>
                                <AppsRoundedIcon />  PORTFOLIO
                            </Typography>
                        </Link>
                        <Link
                            href='#contact'
                            color='secondary'
                            className={classes.menu__link}
                        >
                            <Typography variant='subtitle1'>
                                <MailRoundedIcon />  CONTACTS
                            </Typography>
                        </Link>
                    </Hidden>

                    <Hidden smUp>
                        <IconButton onClick={handleClick} >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={phoneOpen}
                onClose={handleClick}
            >
                <IconButton onClick={handleClick}>
                    <ExitToAppIcon />
                </IconButton>
                <List>
                    <ListItem>
                        <Link
                            href='#about'
                            color='secondary'
                            className={classes.menu__link
                            }>
                            <Typography variant='h6'>
                                <PersonRoundedIcon /> ABOUT
                            </Typography>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href='#portfolio'
                            color='secondary'
                            className={classes.menu__link}
                        >
                            <Typography variant='h6'>
                                <AppsRoundedIcon />  PORTFOLIO
                            </Typography>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href='#contact'
                            color='secondary'
                            className={classes.menu__link}
                        >
                            <Typography variant='h6'>
                                <MailRoundedIcon />  CONTACTS
                            </Typography>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};