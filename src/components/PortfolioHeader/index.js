// Core
import React from 'react';
// MUI Component
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Styles
import styles from './styles';

const useStyles = makeStyles(theme => styles(theme));

export const PortfolioHeader = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box
                className={classes.portfolioHeader}
                display='flex'
                justifyContent='space-around'
            >
                <Box>
                    <Typography variant='h6'>
                        14+
                    </Typography>
                    <Typography variant='subtitle1'>
                        Partners
                    </Typography>
                </Box>

                <Box>
                    <Typography variant='h6'>
                        55+
                    </Typography>
                    <Typography variant='subtitle1'>
                        Projects Done
                    </Typography>
                </Box>

                <Box>
                    <Typography variant='h6'>
                        89+
                    </Typography>
                    <Typography variant='subtitle1'>
                        Happy Clients
                    </Typography>
                </Box>

                <Box>
                    <Typography variant='h6'>
                        150+
                    </Typography>
                    <Typography variant='subtitle1'>
                        Meetings
                    </Typography>
                </Box>
            </Box>

            <Box
                className={classes.portfolioHeader__image}
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Typography variant='h4' className={classes.portfolioHeader__title}>
                    PORTFOLIO
                </Typography>
            </Box>
        </Box>
    );
}