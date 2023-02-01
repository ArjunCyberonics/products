import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Category } from '@material-ui/icons'
import useStyles from '../../Assets/Styles/styles'

const Header = () => {
    const styles = useStyles()
    console.log(process.env.REACT_APP_TITLE)
    return (
        <>
            <AppBar position='relative' >
                <Toolbar className={styles.toolBar}>
                    <Category className={styles.logo} />
                    <Typography variant='h5'>Products</Typography>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Header