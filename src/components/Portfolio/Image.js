// Core
import React, { useState } from 'react';
// MUI Components
import { Box, Grid, Dialog, Link } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
// Components
import { photos } from "./props";
// Styles
import styles from './styles';

const useStyles = makeStyles(theme => styles(theme));

export const Image = () => {
    const classes = useStyles();

    const [openMedia, setOpenMedia] = useState(false);
    const [index, setIndex] = useState('');
    const [path, setPath] = useState('');

    const Open = () => {
        setOpenMedia(true);
    };
    const Close = () => {
        setOpenMedia(false);
    };

    const Picture = ({path, id}) => (
        <img
            src={path}
            alt={id}
            className={classes.portfolio__image}
        />
    );

    const Images = photos.map( ({ id, path }) => (
        <Grid item xs={12} md={3} key={id}>
            <Link onClick={() => {
                setIndex(id);
                setPath(path);
                Open();
            }}>
                <Picture path={path} id={id}/>
            </Link>
        </Grid>
    ));

    return (
        <Box>
            <Grid
                container
                spacing={2}
                className={classes.portfolio__imagesBox}
            >
                {Images}
            </Grid>
            <Dialog open={openMedia} onClose={Close}>
                <img src={path} alt={index} />
            </Dialog>
        </Box>
    );
};