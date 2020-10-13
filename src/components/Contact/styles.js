import image from '../../img/Contact.jpg';

const styles = theme => ({
    contact: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        color: theme.palette.secondary.main,
    },
    contact__header: {
        color: theme.palette.primary.main,
        backgroundImage: `url('${image}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        minHeight: '400px',
    },
    contactHeader__title: {
        letterSpacing: theme.spacing(2),
    },
    contact__title: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(2),
        textAlign: 'center',
    },
    contact__subtitle: {
        paddingBottom: theme.spacing(5),
        textAlign: 'center',
    },
    contact__image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '5px',
    },
    contact__icon: {
        '&:hover': {
            color: 'black',
        },
    },
    contact__contacts: {
        paddingTop: theme.spacing(1),
    },
    contact__field: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    contact__button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(3),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
});

export default styles;