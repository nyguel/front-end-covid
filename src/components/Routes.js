import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Nav from "../components/header/header";
import NovoPaciente from "../pages/Paciente/NovoPaciente";
import ListarPacientes from "../pages/Paciente/ListarPacientes";
import Suspeitos from "../pages/Suspeitos/Suspeitos";
import Usuarios from "../pages/Usuarios/Usuarios";
import Quarentena from "../pages/Quarentena/Quarentena";

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route component={Login} exact path='/login' />
      <Route component={Register} exact path='/register' />
      <PrivateRoute component={Home} exact path='/home' />
      <PrivateRoute component={NovoPaciente} exact path='/cadastro_paciente' />
      <PrivateRoute component={ListarPacientes} exact path='/pacientes' />
      <PrivateRoute component={Suspeitos} exact path='/suspeitos' />
      <PrivateRoute component={Usuarios} exact path='/usuarios' />
      <PrivateRoute component={Quarentena} exact path='/quarentena' />
      <PrivateRoute component={NotFound} path='*' />
    </Switch>
  </BrowserRouter>
);

export default Routes;
