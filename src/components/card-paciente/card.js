import React from "react";

const Card = () => (
  <div className='container' style={{ marginTop: "20px" }}>
    <div className='row'>
      <div className='col-lg-4 mb-4'>
        <div className='card h-100'>
          <h6 className='card-header text-white bg-dark'>
            José dos Santos Silva
          </h6>
          <div className='card-body'>
            <div className='row'>
              <div className='col-4'>
                <img
                  alt='foto'
                  style={{ width: "90px", height: "120px" }}
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                />
              </div>
              <div className='col-8'>
                <p className='card-text'>
                  <legend style={{ fontSize: "12px" }}>
                    CPF: 019.445.275-16
                  </legend>
                  <legend style={{ fontSize: "12px" }}>
                    Endereço: Rua Eduardo Gomes, 97, Centro
                  </legend>
                  <legend style={{ fontSize: "12px" }}>
                    Nascimento: 05/04/1986
                  </legend>
                  <legend style={{ fontSize: "12px" }}>
                    Telefone: (73) 98816-7705
                  </legend>
                </p>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <div className='row h-auto'>
              <div className='col-1 align-items-center'>
                <a
                  data-nome='<%= paciente.nome %>'
                  data-cpf='<%= paciente.cpf %>'
                  data-endereco='<%= paciente.endereco %>'
                  data-nascimento='<%= paciente.nascimento %>'
                  data-fone='<%= paciente.telefone %>'
                  className='material-icons md-30 text-dark'
                  href='#'
                  data-toggle='modal'
                  data-target='#dadosPacienteModal'
                >
                  list_alt
                </a>
              </div>

              <div className='col-1'>
                <a
                  data-nome='<%= paciente.nome %>'
                  data-cpf='<%= paciente.cpf %>'
                  data-endereco='<%= paciente.endereco %>'
                  data-nascimento='<%= paciente.nascimento %>'
                  data-fone='<%= paciente.telefone %>'
                  data-whatever='@<%= paciente.nome %>'
                  className='material-icons md-30 text-dark'
                  data-toggle='modal'
                  data-target='#editPacienteModal'
                  href='#'
                >
                  edit
                </a>
              </div>
              <div className='col-1'>
                <a
                  className='material-icons md-30 text-dark'
                  href='/viagens/?id=<%=paciente._id %> '
                >
                  commute
                </a>
              </div>
              <div className='col-1'>
                <a
                  className='material-icons md-30 text-dark'
                  href='#'
                  data-toggle='modal'
                  data-target='#suspeitoModal'
                  data-id='<%= paciente._id %>'
                  data-suspeito='true'
                  data-token='<%= token %>'
                >
                  group_add
                </a>
              </div>
              <div className='col-1'>
                <a
                  className='material-icons md-30 text-dark'
                  data-id='<%= paciente._id %>'
                  data-target='#quarentenaModal'
                  data-toggle='modal'
                  data-quarentena='true'
                  data-token='<%= token %>'
                  href='#'
                >
                  add_business
                </a>
              </div>
              <div className='col-1'>
                <a
                  class='material-icons md-24 text-dark'
                  data-id='<%= paciente._id %>'
                  data-target='#excluirPacienteModal'
                  data-toggle='modal'
                  data-token='<%= token %>'
                  href=''
                >
                  delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4 mb-4'>
        <div className='card h-100'>
          <h6 className='card-header text-white bg-dark'>
            Luana Moreira Alves
          </h6>
          <div className='card-body'>
            <div className='row'>
              <div className='col-4'>
                <img
                  alt='foto'
                  style={{ width: "90px", height: "120px" }}
                  src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                />
              </div>
              <div className='col-8'>
                <p className='card-text'>
                  <legend style={{ fontSize: "12px" }}>
                    CPF: 796.544.525-01
                  </legend>
                  <legend style={{ fontSize: "12px" }}>
                    Endereço: Rua Central, 61, Elias David
                  </legend>
                  <legend style={{ fontSize: "12px" }}>
                    Nascimento: 05/04/1984
                  </legend>
                  <legend style={{ fontSize: "12px" }}>
                    Telefone: (73) 98165-0568
                  </legend>
                </p>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <div className='row h-auto'>
              <div className='col-1 align-items-center'>
                <a
                  data-nome='<%= paciente.nome %>'
                  data-cpf='<%= paciente.cpf %>'
                  data-endereco='<%= paciente.endereco %>'
                  data-nascimento='<%= paciente.nascimento %>'
                  data-fone='<%= paciente.telefone %>'
                  className='material-icons md-30 text-dark'
                  href='#'
                  data-toggle='modal'
                  data-target='#dadosPacienteModal'
                >
                  list_alt
                </a>
              </div>

              <div className='col-1'>
                <a
                  data-nome='<%= paciente.nome %>'
                  data-cpf='<%= paciente.cpf %>'
                  data-endereco='<%= paciente.endereco %>'
                  data-nascimento='<%= paciente.nascimento %>'
                  data-fone='<%= paciente.telefone %>'
                  data-whatever='@<%= paciente.nome %>'
                  className='material-icons md-30 text-dark'
                  data-toggle='modal'
                  data-target='#editPacienteModal'
                  href='#'
                >
                  edit
                </a>
              </div>
              <div className='col-1'>
                <a
                  className='material-icons md-30 text-dark'
                  href='/viagens/?id=<%=paciente._id %> '
                >
                  commute
                </a>
              </div>
              <div className='col-1'>
                <a
                  className='material-icons md-30 text-dark'
                  href='#'
                  data-toggle='modal'
                  data-target='#suspeitoModal'
                  data-id='<%= paciente._id %>'
                  data-suspeito='true'
                  data-token='<%= token %>'
                >
                  group_add
                </a>
              </div>
              <div className='col-1'>
                <a
                  className='material-icons md-30 text-dark'
                  data-id='<%= paciente._id %>'
                  data-target='#quarentenaModal'
                  data-toggle='modal'
                  data-quarentena='true'
                  data-token='<%= token %>'
                  href='#'
                >
                  add_business
                </a>
              </div>
              <div className='col-1'>
                <a
                  class='material-icons md-24 text-dark'
                  data-id='<%= paciente._id %>'
                  data-target='#excluirPacienteModal'
                  data-toggle='modal'
                  data-token='<%= token %>'
                  href=''
                >
                  delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4 mb-4'>
        <div className='card h-100'>
          <h6 className='card-header text-white bg-dark'>
            Everton Lima Andrade
          </h6>
          <div className='card-body'>
            <div className='row'>
              <div className='col-4'>
                <img
                  alt='foto'
                  style={{ width: "90px", height: "120px" }}
                  src='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80'
                />
              </div>
              <div className='col-8'>
                <p className='card-text'>
                  <legend style={{ fontSize: "12px" }}>
                    CPF: 652.431.759-16
                  </legend>
                  <legend style={{ fontSize: "12px" }}>
                    Endereço: Rua Alto da Colina, 97, Alto da Colina
                  </legend>
                  <legend style={{ fontSize: "12px" }}>
                    Nascimento: 07/05/1990
                  </legend>
                  <legend style={{ fontSize: "12px" }}>
                    Telefone: (73) 99516-2510
                  </legend>
                </p>
              </div>
            </div>
          </div>
          <div className='card-footer'>
            <div className='row h-auto'>
              <div className='col-1 align-items-center'>
                <a
                  data-nome='<%= paciente.nome %>'
                  data-cpf='<%= paciente.cpf %>'
                  data-endereco='<%= paciente.endereco %>'
                  data-nascimento='<%= paciente.nascimento %>'
                  data-fone='<%= paciente.telefone %>'
                  className='material-icons md-30 text-dark'
                  href='#'
                  data-toggle='modal'
                  data-target='#dadosPacienteModal'
                >
                  list_alt
                </a>
              </div>

              <div className='col-1'>
                <a
                  data-nome='<%= paciente.nome %>'
                  data-cpf='<%= paciente.cpf %>'
                  data-endereco='<%= paciente.endereco %>'
                  data-nascimento='<%= paciente.nascimento %>'
                  data-fone='<%= paciente.telefone %>'
                  data-whatever='@<%= paciente.nome %>'
                  className='material-icons md-30 text-dark'
                  data-toggle='modal'
                  data-target='#editPacienteModal'
                  href='#'
                >
                  edit
                </a>
              </div>
              <div className='col-1'>
                <a
                  className='material-icons md-30 text-dark'
                  href='/viagens/?id=<%=paciente._id %> '
                >
                  commute
                </a>
              </div>
              <div className='col-1'>
                <a
                  className='material-icons md-30 text-dark'
                  href='#'
                  data-toggle='modal'
                  data-target='#suspeitoModal'
                  data-id='<%= paciente._id %>'
                  data-suspeito='true'
                  data-token='<%= token %>'
                >
                  group_add
                </a>
              </div>
              <div className='col-1'>
                <a
                  className='material-icons md-30 text-dark'
                  data-id='<%= paciente._id %>'
                  data-target='#quarentenaModal'
                  data-toggle='modal'
                  data-quarentena='true'
                  data-token='<%= token %>'
                  href='#'
                >
                  add_business
                </a>
              </div>
              <div className='col-1'>
                <a
                  class='material-icons md-24 text-dark'
                  data-id='<%= paciente._id %>'
                  data-target='#excluirPacienteModal'
                  data-toggle='modal'
                  data-token='<%= token %>'
                  href=''
                >
                  delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
