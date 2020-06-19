import React from "react";

const Suspeitos = () => {
  return (
    <div>
      <div className='card shadow mb-8'>
        <div className='card-header py-3 bg-white'>
          <h5 className='m-0 font-weight-bold text-dark'>
            Pacientes Suspeitos
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
                      data-endereco='<%= paciente.endereco %>'
                      data-cpf='<%= paciente.cpf %>'
                      data-nascimento='<%= paciente.nascimento %>'
                      data-fone='<%= paciente.telefone %>'
                      className='material-icons md-24 text-dark'
                      href='/dados'
                      data-toggle='modal'
                      data-target='#dadosPacienteModal'
                    >
                      list_alt
                    </a>

                    <a
                      className='material-icons md-24 text-dark'
                      href='/supeitos'
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

export default Suspeitos;
