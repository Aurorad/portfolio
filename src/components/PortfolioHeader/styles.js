import image from '../../img/PortfolioHeader.jpg';

const styles = theme => ({
    portfolioHeader: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        textAlign: 'center',
    },
    portfolioHeader__image: {
        minHeight: '400px',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.inherit.light,
        backgroundImage: `url('${image}')`,
        opacity: 0.8,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
    },
    portfolioHeader__title: {
        letterSpacing: theme.spacing(2),
    },
});

export default styles;