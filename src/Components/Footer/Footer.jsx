import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from '../../Assets/Styles/styles'
import { Instagram, Facebook, WhatsApp, LinkedIn } from '@material-ui/icons'

const Footer = () => {
    const styles = useStyles()
    return (
        <footer className={styles.footer}>
            <Container maxWidth="lg" className={styles.footerContainer}>
                <Typography variant='h6' color='primary'>Footer</Typography>
                <Typography variant='subtitle1' color='textPrimary'>Product List with Material UI and Redux</Typography>
            </Container>
            <Toolbar className={styles.iconDiv}>
                <Instagram className={styles.icon} />
                <Facebook className={styles.icon} />
                <WhatsApp className={styles.icon} />
                <LinkedIn className={styles.icon} />
            </Toolbar>
        </footer>
    )
}

export default Footer