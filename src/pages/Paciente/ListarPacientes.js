import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import TablesPaciente from "../../components/Tables/TablesPaciente";
import { listPacientes } from "../../api/requestPacientes";
class ListarPacientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    listPacientes().then((data) => {
      console.log(data);
      this.setState({ data });
    });
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <div className='container'>
          <div className='card shadow mb-8'>
            <div className='card-header py-3 bg-white'>
              <h5 className='m-0 font-weight-bold text-dark'>
                Lista de Pacientes
              </h5>
            </div>
            <div className='card-body'>
              {<TablesPaciente pacientes={data} />}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ListarPacientes;
