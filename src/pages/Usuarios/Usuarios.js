import React from "react";

const Usuarios = () => {
  return (
    <div>
      <div className='card shadow mb-8'>
        <div className='card-header py-3 bg-white'>
          <h5 className='m-0 font-weight-bold text-dark'>
            Usuários Cadastrados
          </h5>
          <div className='navbar-right'>
            <button
              type='button'
              className='btn btn-dark float-right'
              data-id='<%= users._id%>'
              data-toggle='modal'
              data-target='#inserirUsuarioModal'
            >
              Cadastrar Usuário
            </button>
          </div>
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
                  <th>Usuário</th>
                  <th>Privilégio</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nyguel Vinicius Sales Menezes</td>
                  <td>nyguel</td>
                  <td>admin</td>
                  <td>
                    <a
                      className='material-icons md-24 text-dark'
                      data-toggle='modal'
                      data-id='<%= usuario._id%>'
                      data-nome='<%= usuario.nome%>'
                      data-privilegio='<%= usuario.privilegio%>'
                      data-target='#EditUsuarioModal'
                      href=''
                    >
                      edit
                    </a>
                    <a
                      className='material-icons md-24 text-dark'
                      href='/usuarios/<%=usuario._id %>'
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

export default Usuarios;
