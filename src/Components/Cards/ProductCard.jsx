import dummy from '../../Assets/images/dummy.jpg'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'
import useStyles from '../../Assets/Styles/styles'

const ProductCard = () => {
    const styles = useStyles()

    return (
        <Grid item>
            <Card className={styles.card} >
                <CardMedia
                    image={dummy}
                    className={styles.cardMedia}
                    title="image"
                />
                <CardContent className={styles.cardContent}>
                    <Typography variant='h6'>Card Title</Typography>
                </CardContent>
                <CardActions className={styles.CardActions}>
                    <Button size='small' variant="contained" color='primary'>View</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProductCard