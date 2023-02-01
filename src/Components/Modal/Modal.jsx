import { Modal, Box, Typography, Fade, Button, Backdrop } from "@material-ui/core"
import useStyles from "../../Assets/Styles/styles"


const ModalPage = ({ modalOpen, handler }) => {
    const styles = useStyles()

    //modal state from reducer 


    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={() => handler()}
            >
                <Box className={styles.modalBox}  >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalPage