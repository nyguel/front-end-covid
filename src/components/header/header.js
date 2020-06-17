import React from "react";

const Header = () => (
  <div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='/main'>
          Suporte Covid
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='/main'>
                Inicio
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
              >
                Pacientes
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' href='/cadastro_paciente '>
                  Novo
                </a>
                <a
                  className='dropdown-item'
                  href='/pacientes?token=<%= token %> '
                >
                  Listar
                </a>
                <a
                  className='dropdown-item'
                  href='/suspeitos?token=<%= token %> '
                >
                  Suspeitos
                </a>
                <a
                  className='dropdown-item'
                  href='/quarentena?token=<%= token %> '
                >
                  Quarentena
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/usuarios'>
                Usuários
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/login'>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
