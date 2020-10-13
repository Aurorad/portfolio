const styles = theme => ({
    portfolio: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        color: theme.palette.secondary.main,
    },
    portfolio__title: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    portfolio__imagesBox: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
    portfolio__image: {
        width: '100%',
        height: 'auto',
        '&:hover': {
            opacity: 0.6,
        }
    },
});

export default styles;