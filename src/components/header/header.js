import React from "react";
import { useHistory, Link } from "react-router-dom";

const Header = () => (
  <div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/home'>
          Suporte Covid
        </Link>
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
              <Link className='nav-link' to='/home'>
                Inicio
              </Link>
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
                <Link className='dropdown-item' to='/cadastro_paciente'>
                  Novo
                </Link>
                <Link className='dropdown-item' to='/pacientes'>
                  Listar
                </Link>
                <Link className='dropdown-item' to='/suspeitos'>
                  Suspeitos
                </Link>
                <Link className='dropdown-item' to='/quarentena'>
                  Quarentena
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/usuarios'>
                Usuários
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
