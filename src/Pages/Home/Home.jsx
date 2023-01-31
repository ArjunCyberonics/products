import { Container, Typography, CssBaseline, Grid } from '@material-ui/core'
import Header from '../../Components/Header/Header'
import useStyles from '../../Assets/Styles/styles'
import ProductCard from '../../Components/Cards/ProductCard'
import Footer from '../../Components/Footer/Footer'

const Home = () => {

    const styles = useStyles()

    return (
        <>
            <CssBaseline />
            <Header />
            <main >
                <div className={styles.container}>
                    <Container maxWidth="lg" >
                        <Typography variant='h4' align='center' color='textPrimary' gutterBottom >Product List</Typography>
                        <Typography variant='h6' align='center' color='textSecondary' gutterBottom paragraph >
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially unchanged.
                        </Typography>
                    </Container>
                </div>
                <div className={styles.container}>
                    <Container maxWidth="lg" className={styles.gridContainer}>
                        <Grid container spacing={4}>

                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />

                        </Grid>
                    </Container>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home