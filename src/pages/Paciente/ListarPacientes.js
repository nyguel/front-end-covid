import React from "react";

const ListarPacientes = () => {
  return (
    <div>
      <div className='card shadow mb-8'>
        <div className='card-header py-3 bg-white'>
          <h5 className='m-0 font-weight-bold text-dark'>Lista de Pacientes</h5>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table
              className='table table-bordered'
              id='dataTable'
              width='100%'
              cellspacing='0'
            >
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nyguel Vinicius Sales Menezes</td>
                  <td>
                    <a
                      data-nome='<%= paciente.nome %>'
                      data-bairro='<%= paciente.bairro %>'
                      data-cpf='<%= paciente.cpf %>'
                      data-endereco='<%= paciente.endereco %>'
                      data-nascimento='<%= paciente.nascimento %>'
                      data-fone='<%= paciente.telefone %>'
                      className='material-icons md-24 text-dark'
                      href='#'
                      data-toggle='modal'
                      href=''
                      data-target='#dadosPacienteModal'
                    >
                      list_alt
                    </a>

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
                      href=''
                    >
                      edit
                    </a>
                    <a
                      className='material-icons md-24 text-dark'
                      href='/viagens/?id=<%=paciente._id %> '
                    >
                      commute
                    </a>
                    <a
                      className='material-icons md-24 text-dark'
                      href=''
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
                      href=''
                    >
                      add_business
                    </a>
                    <a
                      className='material-icons md-24 text-dark'
                      data-id='<%= paciente._id %>'
                      data-target='#excluirPacienteModal'
                      data-toggle='modal'
                      data-token='<%= token %>'
                      href=''
                    >
                      delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListarPacientes;
