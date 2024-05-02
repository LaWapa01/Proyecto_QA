import React from "react";
import ReactDatetime from "react-datetime";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

class Datepicker extends React.Component {
  isValidDate = (current) => {
    const date = current.toDate();
    return date.getDate() === 1 || date.getDate() === 15;
  };

  render() {
    const { handleQuincenaChange } = this.props; // Obtener la función desde las props
    return (
      <>
        <Row>
          <Col md="4">
            <small className="d-block text-uppercase font-weight-bold mb-3">
              Fecha de inicio
            </small>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Seleccione aquí",
                  }}
                  timeFormat={false}
                  isValidDate={this.isValidDate}
                  onChange={handleQuincenaChange} // Llamar a la función cuando cambia la fecha
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Datepicker;