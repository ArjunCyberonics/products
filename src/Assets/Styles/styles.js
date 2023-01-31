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

    },
    cardContent: {
        flexGrow: 1
    },
    CardActions: {
        display: "flex",
        justifyContent: 'center'
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

    }
}))

export default useStyles