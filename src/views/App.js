import React from "react";
// reactstrap components
import {Button, Container, Row, Col, Input, Label } from "reactstrap";

// core components
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Buttons from "./IndexSections/Buttons.js";
import Datepicker from "./IndexSections/Datepicker.js";
import DataModal from "./IndexSections/DataModal.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cedula: "", // Inicializa el estado cedula como una cadena vacía
      quincena: "",
      planilla: "",
      logMessages: [], // Agrega un estado para almacenar los mensajes del console.log
      isModalOpen: false,
      data1 : [],
      data2 : [],
      data3 : [],
      data4 : []
    };
  }

  
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    console.log = this.addToLog;
    this.refs.main.scrollTop = 0;
  }

  handleCedulaChange = (event) => {
    //Valida formato correcto de la cédula ingresada
    const value = event.target.value;
    if (/^\d{0,9}$/.test(value)) {
      this.setState({ cedula: value });
    }
  };

  handleQuincenaChange = (value) => {
    //Revisa fecha del datepicker
    this.setState({ quincena: value });
  };
  

  scrollToSection = (sectionId) => {
    //Función para navegar a las secciones de la pantalla
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleLimpiarDepartamento = () => {
    // Borra los datos en el estado data1 (departamento)
    this.setState({ data1: [] });
  };
  handleLimpiarCedula = () => {
    // Borra los datos en el estado data2 (cedula)
    this.setState({ data2: [] });
  };
  handleLimpiarPlanilla = () => {
    // Borra los datos en el estado data3 (planilla)
    this.setState({ data3: [] });
  };
  handleLimpiarQuincena = () => {
    // Borra los datos en el estado data4 (quincena)
    this.setState({ data4: [] });
  };

  handleConsultarDepartamento = async () => {
    const departamentoSeleccionado = document.getElementById("exampleSelect").value;
    if (departamentoSeleccionado === "") {
      alert("Por favor, seleccione un departamento.");
    } else {
      try {
        const response = await fetch(`http://127.0.0.1:7791/empleados/departamento`);
        const data = await response.json(); // Convertir la respuesta a JSON
        data.forEach((obj, index) => {
          console.log(`Objeto ${index + 1}:`);
          console.log(obj);
        });
        // Almacenar los datos en el estado del componente
        this.setState({ data1:data });
        // Actualizar el mensaje en el estado del componente
        const message = `Consulta por departamento: ${departamentoSeleccionado}`;
        this.setState({ logMessages: message });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      this.toggleModal();
    }
  };
  
  handleConsultarCedula = async () => {
    const { cedula } = this.state;
    if (cedula.trim().length !== 9) {
      alert("Por favor, ingrese la cédula completa (9 dígitos).");
    } else {
      try {
        const response = await fetch(`http://127.0.0.1:7791/empleados/cedula`);
        const data = await response.json(); // Convertir la respuesta a JSON
        data.forEach((obj, index) => {
          console.log(`Objeto ${index + 1}:`);
          console.log(obj);
        });
        // Almacenar los datos en el estado del componente
        this.setState({ data2:data });
        // Actualizar el mensaje en el estado del componente
        const message = `Consulta por cedula: ${cedula}`;
        this.setState({ logMessages: message });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      this.toggleModal();

    }
  };
  
  handleConsultarPlanilla = async () => {
    console.log('planilla');
    try {
      const response = await fetch(`http://127.0.0.1:7791/empleados/planilla`);
      const data = await response.json(); // Convertir la respuesta a JSON
      data.forEach((obj, index) => {
        console.log(`Objeto ${index + 1}:`);
        console.log(obj);
      });
      // Almacenar los datos en el estado del componente
      this.setState({ data3:data });
      // Actualizar el mensaje en el estado del componente
      const message = `Consulta de planilla completa`;
      this.setState({ logMessages: message });
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    this.toggleModal();
  };
  
  
  
  handleConsultarQuincena = async () => {
    const { quincena } = this.state;
    if (!quincena) {
      alert("Por favor, seleccione la quincena.");
    } else {
      try {
        const response = await fetch(`http://127.0.0.1:7791/empleados/quincena`);
        const data = await response.json(); // Convertir la respuesta a JSON
        data.forEach((obj, index) => {
          console.log(`Objeto ${index + 1}:`);
          console.log(obj);
        });
        // Almacenar los datos en el estado del componente
        this.setState({ data4:data });
        // Actualizar el mensaje en el estado del componente
        const message = `Consulta por quincena: ${quincena.format("YYYY-MM-DD")}`;
        this.setState({ logMessages: message });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      this.toggleModal();
    }
  };
  

  addToLog = (message) => {
    // Agrega nuevos mensajes al estado de logMessages
    this.setState((prevState) => ({
      logMessages: [...prevState.logMessages, message]
    }));
  };

  toggleModal = () => {
    // Función para abrir/cerrar el modal
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  };


  render() {
   
    const { cedula, quincena, logMessages, isModalOpen } = this.state;
    const isInvalidCedula = cedula.length !== 9;
    const { handleQuincenaChange } = this.props;
    return (
      <>
        <main ref="main">
          {/* Hero es la sección visual de arriba, que contiene el logo */}
          <Hero />
          {/* Botones de opciones de consultas */}
          <Buttons scrollToSection={this.scrollToSection} />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12" style={{ borderBottom: '3px solid #6976e7', paddingBottom: '20px' }}>
              <section className="section section-components" id="departamento">
                {/* Departamento */}
                <h3 className="mb-5">
                  <span>Consulta por Departamento</span>
                </h3>
                <h6 className="mb-5">
                  <span>Seleccione en el espacio de abajo, el de partamento por el cuál desea consultar.</span>
                </h6>
                <Label for="exampleSelect">Seleccionar departamento:</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Recursos Humanos</option>
                    <option>Desarrollo de Frontend</option>
                    <option>Desarrollo de Backend</option>
                    <option>Aseguramiento de la Calidad</option>
                  </Input>
                  <Button id="consultarDepartamento" color="primary" onClick={this.handleConsultarDepartamento}>Consultar</Button>
                  <Button id="limpiarDepartamento" color="primary" onClick={this.handleLimpiarDepartamento}>Limpiar</Button>
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Departamento</th>
                          <th>Cédula</th>
                          <th>Nombre</th>
                          <th>Apellido 1</th>
                          <th>Apellido 2</th>
                          <th>Salario Bruto</th>
                          <th>Salario Neto</th>
                          <th>Deducción Patronal</th>
                          <th>Deducción Obrero</th>
                          <th>Deducción Impuesto de Renta</th>
                          <th>Deducción de ASE</th>
                          {/* Agregar más encabezados de acuerdo a los datos */}
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.data1.map((empleado, index) => (
                          <tr key={index}>
                            <td>{empleado.nombreDepartamento}</td>
                            <td>{empleado.cedula}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido1}</td>
                            <td>{empleado.apellido2}</td>
                            <td>{empleado.salarioBruto}</td>
                            <td>{empleado.salarioNeto}</td>
                            <td>{empleado.deduccionPatronal}</td>
                            <td>{empleado.deduccionObrero}</td>
                            <td>{empleado.deduccionRenta}</td>
                            <td>{empleado.deduccionASO}</td>
                            {/* Agregar más campos de acuerdo a los datos */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

              </section>
              </Col>
              <Col lg="12" style={{ borderBottom: '3px solid #6976e7', paddingBottom: '20px' }}>
              <section className="section section-components" id="cedula">
                {/* Cedula */}
                <h3 className="mb-5">
                  <span>Consulta por Cédula</span>
                </h3>
                <h6 className="mb-5">
                  <span>Ingrese la cédula del colaborador por el que desea consultar. Por favor, recuerde ingresar la cédula sin guiones ni espacios. Ejemplo: 117930656.</span>
                </h6>
                <Label for="cedulaInput">Cédula:</Label>
                <Input
                    type="text"
                    name="cedula"
                    id="cedulaInput"
                    placeholder="Ingrese la cédula"
                    value={cedula}
                    onChange={this.handleCedulaChange}
                    className={isInvalidCedula ? "border-danger" : ""}
                  />
                  <Button id="consultarCedula" color="primary" onClick={this.handleConsultarCedula}>Consultar</Button>
                  <Button id="limpiarCedula" color="primary" onClick={this.handleLimpiarCedula}>Limpiar</Button>
                  <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Departamento</th>
                          <th>Cédula</th>
                          <th>Nombre</th>
                          <th>Apellido 1</th>
                          <th>Apellido 2</th>
                          <th>Salario Bruto</th>
                          <th>Salario Neto</th>
                          <th>Deducción Patronal</th>
                          <th>Deducción Obrero</th>
                          <th>Deducción Impuesto de Renta</th>
                          <th>Deducción de ASE</th>
                          {/* Agregar más encabezados de acuerdo a los datos */}
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.data2.map((empleado, index) => (
                          <tr key={index}>
                            <td>{empleado.nombreDepartamento}</td>
                            <td>{empleado.cedula}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido1}</td>
                            <td>{empleado.apellido2}</td>
                            <td>{empleado.salarioBruto}</td>
                            <td>{empleado.salarioNeto}</td>
                            <td>{empleado.deduccionPatronal}</td>
                            <td>{empleado.deduccionObrero}</td>
                            <td>{empleado.deduccionRenta}</td>
                            <td>{empleado.deduccionASO}</td>
                            {/* Agregar más campos de acuerdo a los datos */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </section>
              </Col>
              <Col lg="12" style={{ borderBottom: '3px solid #6976e7', paddingBottom: '20px' }}>
              <section className="section section-components" id="planilla">
                {/* Planilla */}
                <h3 className="mb-5">
                  <span>Consulta de Planilla Completa</span>
                </h3>
                <h6 className="mb-5">
                  <span>A continuación, puede consultar los datos monetarios de la planilla completa con todas sus respectivas deducciones.</span>
                </h6>
                <Button id="consultarPlanilla" color="primary" onClick={this.handleConsultarPlanilla}>Consultar</Button>
                <Button id="limpiarPlanilla" color="primary" onClick={this.handleLimpiarPlanilla}>Limpiar</Button>
                <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Departamento</th>
                          <th>Cédula</th>
                          <th>Nombre</th>
                          <th>Apellido 1</th>
                          <th>Apellido 2</th>
                          <th>Salario Bruto</th>
                          <th>Salario Neto</th>
                          <th>Deducción Patronal</th>
                          <th>Deducción Obrero</th>
                          <th>Deducción Impuesto de Renta</th>
                          <th>Deducción de ASE</th>
                          {/* Agregar más encabezados de acuerdo a los datos */}
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.data3.map((empleado, index) => (
                          <tr key={index}>
                            <td>{empleado.nombreDepartamento}</td>
                            <td>{empleado.cedula}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido1}</td>
                            <td>{empleado.apellido2}</td>
                            <td>{empleado.salarioBruto}</td>
                            <td>{empleado.salarioNeto}</td>
                            <td>{empleado.deduccionPatronal}</td>
                            <td>{empleado.deduccionObrero}</td>
                            <td>{empleado.deduccionRenta}</td>
                            <td>{empleado.deduccionASO}</td>
                            {/* Agregar más campos de acuerdo a los datos */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </section>
              </Col>
              <Col lg="12" style={{ borderBottom: '3px solid #6976e7', paddingBottom: '20px' }}>
              <section className="section section-components" id="quincena">
                {/* Quincena */}
                <h3 className="mb-5">
                  <span>Consulta por Quincena</span>
                </h3>
                <h6 className="mb-5">
                  <span>Ingrese la fecha de inicio de la quincena por la que desea consultar en el espacio indicado.</span>
                </h6>
                <Datepicker handleQuincenaChange={this.handleQuincenaChange} />
                <Button id="consultarQuincena" color="primary" onClick={this.handleConsultarQuincena}>Consultar</Button>
                <Button id="limpiarQuincena" color="primary" onClick={this.handleLimpiarQuincena}>Limpiar</Button>
                <div>
                    <table>
                      <thead>
                        <tr>
                          <th>Departamento</th>
                          <th>Cédula</th>
                          <th>Nombre</th>
                          <th>Apellido 1</th>
                          <th>Apellido 2</th>
                          <th>Salario Bruto</th>
                          <th>Salario Neto</th>
                          <th>Deducción Patronal</th>
                          <th>Deducción Obrero</th>
                          <th>Deducción Impuesto de Renta</th>
                          <th>Deducción de ASE</th>
                          {/* Agregar más encabezados de acuerdo a los datos */}
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.data4.map((empleado, index) => (
                          <tr key={index}>
                            <td>{empleado.nombreDepartamento}</td>
                            <td>{empleado.cedula}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellido1}</td>
                            <td>{empleado.apellido2}</td>
                            <td>{empleado.salarioBruto}</td>
                            <td>{empleado.salarioNeto}</td>
                            <td>{empleado.deduccionPatronal}</td>
                            <td>{empleado.deduccionObrero}</td>
                            <td>{empleado.deduccionRenta}</td>
                            <td>{empleado.deduccionASO}</td>
                            {/* Agregar más campos de acuerdo a los datos */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </section>
              </Col>
            </Row>
          </Container>
          {/* Agrega el espacio en blanco al final de la pantalla*/}
          <div style={{ height: '200px' }}></div>
          
        </main>
        
        <CardsFooter />
        
        <DataModal
          isOpen={isModalOpen}
          toggleModal={this.toggleModal}
          logMessages={logMessages}
        />
      </>
    );
  }
}

export default App;