import { Modal, Box, Typography, ImageList, ImageListItem } from "@material-ui/core"
import useStyles from "../../Assets/Styles/styles"
import axios from 'axios'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectedProduct, removeOldProduct } from "../../Services/Redux/Actions"
import Loader from "../Loader/Loader"

const ModalPage = ({ modalOpen, handler, selectedId }) => {
    const styles = useStyles()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    // selected product state from redux
    const product = useSelector(state => state.selectedProduct)

    // fetching product details with id
    const fetchProductDetail = async () => {
        try {
            setLoading(true)
            const response = await axios
                .get(`${process.env.REACT_APP_BASE_URL}/products/${selectedId}`)
            dispatch(selectedProduct(response.data))
            setLoading(false)
        } catch (error) {
            alert("Somethin is happened", error)
        }
    }

    // calling data fetching function in useEffect
    useEffect(() => {
        if (selectedId) {
            fetchProductDetail()
        }
        return () => {
            dispatch(removeOldProduct())
        }
    }, [selectedId])


    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={() => handler()}
            >
                <Box className={styles.modalBox}  >
                    <Typography id="modal-modal-title" align="center" variant="h6" gutterBottom component="h2">
                        {product.title}
                    </Typography>
                    <Typography id="modal-modal-description" align="center" gutterBottom paragraph sx={{ mt: 2 }}>
                        {product.description}
                    </Typography>
                    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {
                            loading ? (
                                <div>
                                    <Loader />
                                </div>
                            )
                                :
                                product?.images?.map((item) => (
                                    <ImageListItem key={item}>
                                        <img
                                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                            // srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt="product"
                                            loading="lazy"
                                            className={styles.imgList}
                                        />
                                    </ImageListItem>
                                ))
                        }
                    </ImageList>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalPage