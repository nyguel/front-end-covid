import React from "react";

const ModalBoletim = () => {
  return (
    <div>
      <div
        className='modal fade'
        id='boletimModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Edição de Boletim
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form id='formBoletim' action='/boletim' method='POST'>
                <div className='form-group row'>
                  <div className='col-sm-6 mb-3 mb-sm-0'>
                    <legend style='font-size: 15px;'>Confirmados:</legend>
                    <input
                      name='confirmados'
                      id='confirmados'
                      type='number'
                      min='0'
                      className='form-control form-control-user modal-nascimento'
                    />
                  </div>
                  <div className='col-sm-6 mb-3 mb-sm-0'>
                    <legend style='font-size: 15px;'>Suspeitos:</legend>
                    <input
                      name='suspeitos'
                      type='number'
                      id='suspeitos'
                      min='0'
                      className='form-control form-control-user'
                    />
                  </div>
                </div>

                <div className='form-group row'>
                  <div className='col-sm-6 mb-3 mb-sm-0'>
                    <legend style='font-size: 15px;'>
                      Aguardando Resultado:
                    </legend>
                    <input
                      name='resultado'
                      type='number'
                      id='resultado'
                      min='0'
                      className='form-control form-control-user'
                    />
                  </div>
                  <div className='col-sm-6 mb-3 mb-sm-0'>
                    <legend style='font-size: 15px;'>Curados:</legend>
                    <input
                      name='curados'
                      type='number'
                      id='curados'
                      min='0'
                      className='form-control form-control-user modal-fone'
                    />
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-dismiss='modal'
                  >
                    Cancelar
                  </button>
                  <button type='submit' className='btn btn-dark'>
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBoletim;
