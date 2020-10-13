import image from '../../img/HeaderBack.jpg';
const styles = theme => ({
    header: {
        minHeight: '400px',
        backgroundColor: theme.palette.inherit.light,
        backgroundImage: `url('${image}')`,
        opacity: 0.8,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        backgroundPosition: 'center',
    },
    header__title: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        padding: theme.spacing(2),
        letterSpacing: theme.spacing(1),
    },
});
export default styles;