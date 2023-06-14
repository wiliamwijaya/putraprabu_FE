import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
          Konfirmasi Orderan !
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Apakah Anda yakin untuk melakukan pemesanan ini ?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Kembali
        </Button>
        <Button variant="primary" onClick={props.onConfirm}>
          Konfirmasi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
