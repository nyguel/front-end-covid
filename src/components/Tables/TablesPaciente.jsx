import React from "react";
import { Link } from "react-router-dom";
const TablesPaciente = ({ pacientes }) => {
  return (
    <>
      <div className='table-responsive'>
        <table className='table table-bordered' id='dataTable' width='100%'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr key={paciente._id}>
                <td>{paciente.nome}</td>
                <td>
                  <Link
                    data-nome='<%= paciente.nome %>'
                    data-bairro='<%= paciente.bairro %>'
                    data-cpf='<%= paciente.cpf %>'
                    data-endereco='<%= paciente.endereco %>'
                    data-nascimento='<%= paciente.nascimento %>'
                    data-fone='<%= paciente.telefone %>'
                    className='material-icons md-24 text-dark'
                    to='/home'
                    data-toggle='modal'
                    data-target='#dadosPacienteModal'
                  >
                    list_alt
                  </Link>

                  <a
                    data-nome='<%= paciente.nome %>'
                    data-id='<%= paciente._id %>'
                    data-cpf='<%= paciente.cpf %>'
                    data-endereco='<%= paciente.endereco %>'
                    data-nascimento='<%= paciente.nascimento %>'
                    data-fone='<%= paciente.telefone %>'
                    data-bairro='<%= paciente.bairro %>'
                    className='material-icons md-24 text-dark'
                    data-toggle='modal'
                    data-target='#editPacienteModal'
                    href='/home'
                  >
                    edit
                  </a>
                  <a className='material-icons md-24 text-dark' href='/viagens'>
                    commute
                  </a>
                  <a
                    className='material-icons md-24 text-dark'
                    href='/#'
                    data-toggle='modal'
                    data-target='#suspeitoModal'
                    data-id='<%= paciente._id %>'
                    data-suspeito='true'
                    data-token='<%= token %>'
                  >
                    group_add
                  </a>
                  <a
                    className='material-icons md-24 text-dark'
                    data-id='<%= paciente._id %>'
                    data-target='#quarentenaModal'
                    data-toggle='modal'
                    data-quarentena='true'
                    data-token='<%= token %>'
                    href='/quarentena'
                  >
                    add_business
                  </a>
                  <a
                    className='material-icons md-24 text-dark'
                    data-id='<%= paciente._id %>'
                    data-target='#excluirPacienteModal'
                    data-toggle='modal'
                    data-token='<%= token %>'
                    href='/excluirpaciente'
                  >
                    delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablesPaciente;
