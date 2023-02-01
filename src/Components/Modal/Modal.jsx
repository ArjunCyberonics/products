import { Modal, Box, Typography } from "@material-ui/core"
import useStyles from "../../Assets/Styles/styles"

const ModalPage = ({ open, handler }) => {
    const styles = useStyles()

    return (
        <Modal
            open={open}
            onClose={handler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box className={styles.modal} >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
}

export default ModalPage