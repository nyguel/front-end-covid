import React from "react";

const Quarentena = () => {
  return (
    <div>
      <div className='card shadow mb-8'>
        <div className='card-header py-3 bg-white'>
          <h5 className='m-0 font-weight-bold text-dark'>
            Pacientes em Quarentena
          </h5>
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
                  <th>Inicio</th>
                  <th>Término</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nyguel Vinicius Sales Menezes</td>
                  <td>05/05/2020</td>
                  <td>20/05/2020</td>

                  <td>
                    <a
                      data-nome='<%= paciente.nome %>'
                      data-bairro='<%= paciente.bairro %>'
                      data-endereco='<%= paciente.endereco %>'
                      data-cpf='<%= paciente.cpf %>'
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
                      className='material-icons md-24 text-dark'
                      href='/quarentena'
                    >
                      person_remove
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

export default Quarentena;
