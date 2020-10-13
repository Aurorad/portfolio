const styles = theme => ({
    about: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        color: theme.palette.secondary.main,
    },
    about__title: {
        textAlign: 'center',
        padding: theme.spacing(3),
    },
    about__paragraph: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
    },
    about__image: {
        opacity: 0.6,
        maxWidth: '100%',
        height: 'auto',
        verticalAlign: 'middle',
        '&:hover': {
            opacity: 1,
        }
    },
    about__progress: {
        letterSpacing: theme.spacing(3),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
});

export default styles;