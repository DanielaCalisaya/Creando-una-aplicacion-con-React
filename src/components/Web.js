import React from 'react'; 
/* Cada vez que creamos un nuevo componente,
debemos importarlo en nuestro componente Web. Ej: */
import Encabezado from './Encabezado';
import Banner from './Banner';
import Producto from './Producto';
import Footer from './Footer';

function Web() {

  return (
    <div className="container">
      <Encabezado />
      <Banner />
      <Producto />
      <Footer />
    </div>
  )
}

export default Web; 

/* Componente Web que renderiza todo nuestro sitio web */