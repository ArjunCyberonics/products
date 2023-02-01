import { Card, CardMedia, CardContent, Typography, CardActions, Button, Container } from '@material-ui/core'
import { useState } from 'react'
import useStyles from '../../Assets/Styles/styles'
import ModalPage from '../Modal/Modal'
import { Rating } from '@mui/material';

const ProductCard = ({ product }) => {
    // modal state
    const [modalOpen, setModalOpen] = useState(false)
    //   state with selected item Id
    const [selectedItemId, setSelectedItemId] = useState('')
    const styles = useStyles()

    const modalHandler = (id) => {
        setSelectedItemId(id)
        setModalOpen((prev) => !prev)
    }


    return (
        <>
            {/* Discount section */}
            <div className={styles.discountDiv}>
                <Typography variant='subtitle2'>{product.discountPercentage} %</Typography>
            </div>

            {/* Card section */}
            <Card className={styles.card} >
                {/* Card image section */}
                <CardMedia
                    image={product.thumbnail}
                    className={styles.cardMedia}
                    title="image"
                />

                {/* Card content section */}
                <CardContent className={styles.cardContent}>
                    <Container maxWidth="lg" className={styles.cardTitleContainer}>
                        <Typography variant='h6'>{product.title}</Typography>
                        <Typography variant='subtitle1' gutterBottom>{product.brand}</Typography>
                    </Container>
                    <Typography variant='subtitle2' gutterBottom>{product.category}</Typography>
                    <Typography variant='body1' gutterBottom>{product.description}</Typography>
                    <Rating
                        name="simple-controlled"
                        value={product.rating}
                        className={styles.rating}
                    />
                    <Typography variant='subtitle1' color='textSecondary'>Stock : {product.stock}</Typography>
                </CardContent>
                <CardActions className={styles.CardActions}>
                    <Typography variant='h6'>{product.price} $</Typography>
                    <Button size='small'
                        variant="contained"
                        color='primary'
                        onClick={() => modalHandler(product.id)}>View</Button>
                </CardActions>
            </Card>

            {/* Modal component */}
            <ModalPage modalOpen={modalOpen} handler={modalHandler} selectedId={selectedItemId} />
        </>

    )
}

export default ProductCard