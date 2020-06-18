import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import "./Login.css";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const handleSubmit = (values) => {
    axios.post("http://localhost:3333/login", values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("token", data.token);
        history.push("/home");
      }
    });
  };
  const validations = yup.object().shape({
    usuario: yup.string().required("Informe o nome do usuário"),
    senha: yup
      .string()
      .required("Informe a senha")
      .min(4, "Senha de no minimo 4 caracteres"),
  });
  return (
    <div className=' d-flex justify-content-center container-login'>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className='login-form text-center'>
          <div className='form-group'>
            <Field
              name='usuario'
              className='form-control rounded-pill form-control-lg'
            />
            <ErrorMessage
              component='span'
              name='usuario'
              className='text-danger'
            />
          </div>
          <div>
            <Field
              name='senha'
              className='form-control rounded-pill form-control-lg'
            />
            <ErrorMessage
              component='span'
              name='senha'
              className='text-danger'
            />
          </div>
          <button
            type='submit'
            className='btn mt-5 rounded-pill btn-lg btn-custom bg-dark btn-block text-uppercase text-white'
          >
            Entrar
          </button>
        </Form>
      </Formik>
      <Link to='/home'>Ir para a página Home \o/</Link>
      <form className='login-form text-center' action='/login' method='POST'>
        <h1 className='mb-5 font-weight-light text-uppercase'>Login</h1>
        <div className='form-group'>
          <input
            required
            name='usuario'
            type='text'
            className='form-control rounded-pill form-control-lg'
            placeholder='usuário'
          />
        </div>
        <div className='form-group'>
          <input
            required
            name='senha'
            type='password'
            className='form-control rounded-pill form-control-lg'
            placeholder='senha'
          />
        </div>

        <button
          type='submit'
          className='btn mt-5 rounded-pill btn-lg btn-custom bg-dark btn-block text-uppercase text-white'
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
