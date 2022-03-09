import React from 'react';
import logo from '../assets/img/logo-DH.png'

const Encabezado = () => {
  return (

    <header className="encabezado">
    <nav id="logo">
        <a href="#s"><img src={logo} alt="Logo Digital House"/></a>
    </nav>
    <nav id="opciones">
        <ul>
            <li><a href="#a">Inicio</a></li>
            <li><a href="#as">Nosotros</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
</header>
  )
}
export default Encabezado

/* rafc o rfc */