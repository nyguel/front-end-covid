import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className='container-home'>
      <section id='counts' className='counts'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
              <h1>Juntos vamos derrotar o Coronavirus</h1>
              <h2>Todos unidos pela informação e pela responsabilidade</h2>
              <div className=''>
                <button
                  type='button'
                  id='button2'
                  className='btn btn-dark btn-boletim'
                  data-toggle='modal'
                  data-target='#boletimModal'
                >
                  Atualizar Boletim
                </button>
              </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 hero-img'>
              <img src='assets/img/hero-img.png' className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
