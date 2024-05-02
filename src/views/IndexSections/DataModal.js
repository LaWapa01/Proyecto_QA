import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

class DataModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.logMessages || "Aquí se mostrarán los datos obtenidos de la base de datos.",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.logMessages !== this.props.logMessages) {
      this.setState({ message: this.props.logMessages });
    }
  }

  render() {
    const { isOpen, toggleModal } = this.props;
    const { message } = this.state;
    return (
      <Modal isOpen={isOpen}>
        <ModalHeader>Datos de la base de datos</ModalHeader>
        <ModalBody>
          <p>{message}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default DataModal;
