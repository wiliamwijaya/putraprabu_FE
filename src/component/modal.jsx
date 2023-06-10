import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmationModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm your order !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure to make this order ?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Go back</Button>
          <Button variant="primary" onClick={props.onExit}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ConfirmationModal