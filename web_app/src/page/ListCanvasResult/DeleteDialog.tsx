import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface DeleteDialogProps{
    open:boolean;
    deleteAction:Function;
    closeDialog:Function;
}

export default function DeleteDialog(props:DeleteDialogProps){
    const {open, deleteAction, closeDialog} = props;

    return <Modal show={open} onHide={() => closeDialog()}>
        <Modal.Header>
            <Modal.Title>Delete Result?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to delete this canvas result?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => closeDialog()}>
                Cancel
            </Button>
            <Button variant="danger" onClick={() => deleteAction()}>
                Delete
            </Button>
        </Modal.Footer>
    </Modal>
}