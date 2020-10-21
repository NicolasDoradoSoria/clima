import React, {useState} from "react";
import Error from "./Error";

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {


  const [error, setError] = useState(false)

  const {ciudad, pais} = busqueda
  const handleChange = e =>{
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e =>{
    e.preventDefault();
    if(ciudad.trim()=== '' || pais.trim()=== ''){
      setError(true)
      return
    }

    setError(false)
    setConsultar(true)
    
  }
  return (
    <form onSubmit={handleSubmit}>

      {error ? <Error mensaje="todos los campos son obligatorios" /> : null}
      <div className="input-field col s12">
        <input type="text" name="ciudad" id="ciudad" value={ciudad} onChange={handleChange} />
        <label htmlFor="ciudad">ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange} >
          <option value="" defaultValue>
            -- elije un pais --
          </option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">costa Rica</option>
          <option value="ES">España</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">Mexico</option>
          <option value="PE">Peru</option>
        </select>
        <label htmlFor="ciudad">Pais:</label>
      </div>
      <div className=" input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
          value="buscar..."
        />
      </div>
    </form>
  );
  
};

export default Formulario;
