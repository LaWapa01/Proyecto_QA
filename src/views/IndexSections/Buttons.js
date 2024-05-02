import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

class BasicElements extends React.Component {
  render() {

    const { scrollToSection } = this.props; // Obtener la función scrollToSection de las props
    return (
      <>
        <section
          className="section section-components pb-0"
          id="section-components"
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="12" style={{ borderBottom: '3px solid #6976e7', paddingBottom: '20px' }}>
                <h2 className="mb-5">
                  <span>Consultas Disponibles</span>
                </h2>
                
                {/* Botones */}
                <div>
                <Button color="primary" type="button" onClick={() => scrollToSection("departamento")}>
                    Departamento
                  </Button>
                  <Button color="primary" type="button" onClick={() => scrollToSection("cedula")}>
                    Cédula
                  </Button>
                  <Button color="primary" type="button" onClick={() => scrollToSection("planilla")}>
                    Planilla
                  </Button>
                  <Button color="primary" type="button" onClick={() => scrollToSection("quincena")}>
                    Quincena
                  </Button>
                </div>
                
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default BasicElements;
