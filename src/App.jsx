import { useState } from "react";
import adivinarCiudad from "./pr1";
import "./App.css";
import styled from "styled-components";

const Conteiner = styled.div`
margin-top: 10px;
  display: flex;
  width: 100vw;
  height: 800px;
  padding: 0%;
  justify-content: center;
  font-family: 'Chakra Petch', sans-serif;
`;

const StyledInput = styled.input`
  background: #e07a5f;
  border: none;
  width: 500px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  border: 2px solid #ccc;
  box-shadow: 0 0 0 2px #007bff20;
  font-size: 15px;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Chakra Petch', sans-serif;
`;

const Respuesta = styled.div`
  text-align: center;
  background: #f2cc8f;
  height: 270px;
  width: 420px;
  margin-left: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
/* Estilos base del botón */
height: 50px;
width: 500px;
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #3D405B;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`;

const App = () => {
  const [respuesta, setRespuesta] = useState();

  const [caracteristicas, setCaracteristicas] = useState({
    clima: "",
    ubicacion: "",
    poblacion: "",
    tamano: "",
    gastronimia:"",
    idioma:"",

  });
  const handleChange = (e) => {
    setCaracteristicas({
      ...caracteristicas,
      [e.target.name]: e.target.value.toLowerCase().trim(),
    });
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    console.log(caracteristicas);
    setRespuesta(adivinarCiudad(caracteristicas));
    
  };

  return (
    <Conteiner>
      <form onSubmit={handlSubmit}>
        <div>
          <StyledInput
            placeholder="¿Cómo es el clima en la ciudad que estás pensando?"
            type="text"
            name="clima"
            onChange={handleChange}
          />
        </div>

        <div>
          <StyledInput
            placeholder="¿En qué parte del mundo se encuentra la ciudad que estás pensando?"
            type="text"
            name="ubicacion"
            onChange={handleChange}
          />
        </div>
        <div>
          <StyledInput
            placeholder="¿La ciudad que estás pensando tiene una población grande o pequeña?"
            type="text"
            name="poblacion"
            onChange={handleChange}
          />
        </div>
        <div>
          <StyledInput
            placeholder="¿Es una ciudad grande o pequeña?"
            type="text"
            name="tamano"
            onChange={handleChange}
          />
        </div>

        <div>
        <StyledInput
          placeholder="¿Que tipo de gastronomia tiene?"
          type="text"
          name="gastronimia"
          onChange={handleChange}
        />
      </div>

      <div>
          <StyledInput
            placeholder="¿Que idioman hablan?"
            type="text"
            name="idioma"
            onChange={handleChange}
          />
        </div>

        <Button>VALIDAR</Button>
        </form>
        <Respuesta>
        {respuesta !==
          "Lo siento, no pude adivinar la ciudad que estás pensando." ? (
            <div>
            <p>LA CIUDAD QUE ESTAS PENSANDO ES...</p>
            {respuesta}
            </div>
            ) : (
              <p>{respuesta}</p>
              )}
              </Respuesta>
    </Conteiner>
  );
};

export default App;
