import { Container, Typography, CssBaseline, Grid } from '@material-ui/core'
import Header from '../../Components/Header/Header'
import useStyles from '../../Assets/Styles/styles'
import ProductCard from '../../Components/Cards/ProductCard'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../Services/Redux/Actions'

const Home = () => {
    const styles = useStyles()
    // product state from reducer
    const allProducts = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()

    // fetching data
    const fetchData = async () => {
        const response = await axios
            .get(`${process.env.REACT_APP_BASE_URL}/products`)
            .catch((err) => {
                alert("Something went wrong", err)
            })
        dispatch(addProduct(response.data.products))
    }

    // calling data fetching function in useEffect
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <CssBaseline />
            {/* Header component*/}
            <Header />

            {/*home Body */}
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
                        <Grid container spacing={4} className={styles.grid}>
                            {
                                allProducts.map((product) => {
                                    return (
                                        <Grid item key={product.id} xs={10} sm={6} md={3}   >
                                            <ProductCard product={product} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Container>
                </div>
            </main>

            {/* Footer component */}
            <Footer />
        </>
    )
}

export default Home