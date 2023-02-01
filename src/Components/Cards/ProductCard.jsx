import dummy from '../../Assets/images/dummy.jpg'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'
import useStyles from '../../Assets/Styles/styles'

const ProductCard = ({ product }) => {
    // console.log("product in card", product)
    const styles = useStyles()

    return (
        <Grid item key={product.id} xs={10} sm={6} md={3}   >
            <Card className={styles.card} >
                <CardMedia
                    image={product?.images?.length != 0 && product.images[0]}
                    className={styles.cardMedia}
                    title="image"
                />
                <CardContent className={styles.cardContent}>
                    <Typography variant='h6'>{product.title}</Typography>
                </CardContent>
                <CardActions className={styles.CardActions}>
                    <Button size='small' variant="contained" color='primary'>View</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductCard