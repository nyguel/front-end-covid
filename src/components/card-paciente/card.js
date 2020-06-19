import React from "react";

const Card = ({ paciente }) => (
  <div className='container' style={{ marginTop: "20px" }}>
    <div className='col-lg-4 mb-4'>
      <div className='card h-100'>
        <h6 className='card-header text-white bg-dark'>{paciente.nome}</h6>
        <div className='card-body'>
          <div className='row'>
            <div className='col-4'>
              <img
                alt='foto'
                style={{ width: "90px", height: "120px" }}
                src='data:image/png;base64,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'
              />
            </div>
            <div className='col-8'>
              <p className='card-text'>
                <legend style={{ fontSize: "12px" }}>{paciente.cpf}</legend>
                <legend style={{ fontSize: "12px" }}>
                  Endereço: {paciente.endereco}
                </legend>
                <legend style={{ fontSize: "12px" }}>
                  Nascimento: {paciente.nascimento}
                </legend>
                <legend style={{ fontSize: "12px" }}>
                  Telefone: {paciente.telefone}
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
                className='material-icons md-24 text-dark'
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
);

export default Card;
