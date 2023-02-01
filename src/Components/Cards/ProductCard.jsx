import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'
import { useState } from 'react'
import useStyles from '../../Assets/Styles/styles'
import ModalPage from '../Modal/Modal'
import { Rating } from '@mui/material';

const ProductCard = ({ product }) => {
    // modal state
    const [modalOpen, setModalOpen] = useState(false)
    const styles = useStyles()

    console.log(product)

    const modalHandler = () => {
        setModalOpen((prev) => !prev)
    }

    return (
        <>
            <Card className={styles.card} >
                <CardMedia
                    image={product.thumbnail}
                    className={styles.cardMedia}
                    title="image"
                />
                <CardContent className={styles.cardContent}>
                    <Typography variant='h6'>{product.title}</Typography>
                    <Typography variant='subtitle1'>{product.brand}</Typography>
                    <Typography variant='subtitle2'>{product.category}</Typography>
                    <Typography variant='body1'>{product.description}</Typography>
                    <Rating
                        name="simple-controlled"
                        value={product.rating}
                        className={styles.rating}
                    />
                </CardContent>
                <CardActions className={styles.CardActions}>
                    <Typography variant='h6'>{product.price}$</Typography>
                    <Button size='small'
                        variant="contained"
                        color='primary'
                        onClick={modalHandler}>View</Button>
                </CardActions>
            </Card>

            {/* Modal component */}
            <ModalPage modalOpen={modalOpen} handler={modalHandler} />
        </>

    )
}

export default ProductCard