const styles = theme => ({
    menu: {
        position: 'fixed',
        overflow: 'hidden',
        width: '100%',
        backgroundColor: 'transparent !important',
        boxShadow: 'none',
    },
    menu_white: {
        width: '100%',
        position: 'fixed',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.main,
    },
    menu__home: {
        textDecoration: 'none',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: theme.palette.inherit.main,
        },
        [theme.breakpoints.down('xs')]:{
            flexGrow: '1',
        },
    },
    menu__link: {
        textDecoration: 'none',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: theme.palette.inherit.main,
        },
    },
});

export default styles;