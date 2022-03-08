import React, { useState } from 'react';
import '../App.css';
import Pelicula from './pelicula';
import PeliculasJson from '../peliculas.json';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';

function ListadoPeliculas() {

  const [paginaActual, setPaginaActual] = useState(1);
  //const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 5;

  let peliculas = PeliculasJson;

  const buscarPelicula = async () =>{
    let url = "https://lucasmoy.dev/data/react/peliculas.json";

    let respuesta = await fetch(url,{
      "method": 'GET',
      "mode":'no-cors',
      "headers":{
        "Accept":'application/json',
        "Content-Type":'application/json',
      }
    });
    let json = await respuesta.json;
    //console.log(json);
  }

  buscarPelicula();

  const cargarPeliculas = () =>{
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  }



  const getTotalPaginas = () => {
    let cantidadTotalPeliculas = PeliculasJson.length;
    return Math.ceil(cantidadTotalPeliculas/ TOTAL_POR_PAGINA);
  }

  cargarPeliculas();

  return (
    <PageWrapper>


      {peliculas.map(pelicula => {
        return <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      })}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
        setPaginaActual(pagina);
      }}/>

    </PageWrapper>
  );
}

export default ListadoPeliculas;
