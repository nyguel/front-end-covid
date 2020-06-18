import React from "react";
import "./NovoPaciente.css";

const NovoPaciente = () => {
  return (
    <div className='div-container'>
      <div className='d-flex justify-content-center'>
        <div className='card shadow col-sm-6 mb-3 mb-sm-0'>
          <div className='card-header py-3 bg-white'>
            <h5 className='m-0 font-weight-bold text-dark'>
              Cadastro de Paciente
            </h5>
          </div>
          <div className='card-body p-0'></div>
          <div className='p-5'>
            <form
              className='user'
              name='formulario'
              id='formulario'
              action='/pacientes'
              method='POST'
            >
              <div className='form-group row'>
                <div className='col-sm-6 mb-3 mb-sm-0'>
                  <legend>CPF:</legend>
                  <input
                    name='cpf'
                    required
                    type='text'
                    className='form-control form-control-user'
                    id='exampleInputPassword'
                    placeholder='000.000.000-00'
                    data-mask='000.000.000-00'
                  />
                </div>
              </div>

              <div className='form-group'>
                <legend>Nome:</legend>
                <input
                  name='nome'
                  type='text'
                  id='pacienteNome'
                  required
                  className='form-control form-control-user'
                  id='input_name'
                  placeholder='Digite aqui o nome'
                />
              </div>
              <div className='form-group'>
                <legend>Endereço:</legend>
                <input
                  required
                  id='pacienteEndereco'
                  name='endereco'
                  type='text'
                  className='form-control form-control-user'
                  id='exampleInputEmail'
                  placeholder='Digite aqui o endereço'
                />
              </div>
              <div className='form-group row'>
                <div className='col-sm-6 mb-3 mb-sm-0'>
                  <legend>Bairro:</legend>
                  <select name='bairro' className='custom-select' required>
                    <option selected>Selecione o bairro</option>
                    <option value='centro'>Centro</option>
                    <option value='texaco'>Texaco</option>
                    <option value='tancredo neves'>Tancredo Neves</option>
                    <option value='alto da colina'>Alto da Colina</option>
                    <option value='elias david'>Elias David</option>
                  </select>
                </div>
              </div>
              <div className='form-group row'>
                <div className='col-sm-6 mb-3 mb-sm-0'>
                  <legend>Data de nascimento:</legend>
                  <input
                    name='nascimento'
                    type='text'
                    required
                    className='form-control form-control-user'
                    id='exampleInputPassword'
                    placeholder='00/00/0000'
                    data-mask='00/00/0000'
                  />
                </div>
                <div className='col-sm-6 mb-3 mb-sm-0'>
                  <legend>Telefone:</legend>
                  <input
                    name='telefone'
                    required
                    type='text'
                    className='form-control form-control-user'
                    id='exampleInputPassword'
                    placeholder='(00) 00000-0000'
                    data-mask='(00) 00000-0000'
                  />
                </div>
              </div>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck'
                  name='attsuspeito'
                />
                <label className='custom-control-label' for='customCheck'>
                  Declarar suspeito para ser visitado pela equipe de enfermagem
                </label>
              </div>
              <br />
              <button type='submit' className='btn btn-dark btn-user btn-block'>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovoPaciente;
