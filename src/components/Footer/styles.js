const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        '&:hover': {
            backgroundColor: theme.palette.dark.main,
        },
    },
    footer__icons: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
});

export default styles;