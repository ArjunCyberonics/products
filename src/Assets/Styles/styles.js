import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    toolBar: {
        background: '#61a5c2'
    },
    container: {
        padding: theme.spacing(4, 6, 2),
        backgroundColor: theme.palette.background.paper
    },
    logo: {
        marginRight: "10px",
        '&:hover': {
            cursor: "pointer",
        }
    },
    icon: {
        marginRight: "10px",
        '&:hover': {
            color: "#3f51b5",
            cursor: "pointer"
        }
    },
    gridContainer: {
        padding: theme.spacing(4, 2, 6),
        backgroundColor: "#def3fa",
        borderRadius: "20px",

    },
    grid: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'

    },
    cardMedia: {
        paddingTop: "56.25%",
        backgroundSize: "contain"

    },
    cardContent: {
        flexGrow: 1,
        display: "flex",
        flexDirection: 'column',
        alignItems: "flex-start",
        paddingBottom: "5px"
    },
    discountDiv: {
        position: 'absolute',
        zIndex: 100,
        backgroundColor: "#3f51b5",
        width: 'auto',
        height: 'auto',
        padding: "2px",
        borderBottomRightRadius: '5px'
    },
    cardTitleContainer: {
        background: '#def3fa',
        borderRadius: '10px'
    },
    CardActions: {
        display: "flex",
        justifyContent: 'space-evenly'
    },
    rating: {
        marginTop: "10px",
        marginBottom: 0
    },
    footer: {
        width: '100%',
        backgroundColor: '#61a5c2',
        padding: theme.spacing(4, 4, 2),
    },
    footerContainer: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center'
    },
    iconDiv: {
        display: 'flex',
        justifyContent: 'center',

    },
    modalBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        width: "60%",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 4, 4),
        borderRadius: '15px',
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
    },
    imgList: {
        height: "100%",
        objectFit: 'contain'
    }
}))

export default useStyles