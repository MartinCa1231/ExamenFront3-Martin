import { useState } from 'react'
import Card from './Card';

import './App.css'

function App() {
  

 

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form>{function Formulario(){
    const[name , setName] = useState('');
    const[description , setDescription] = useState('');
    const[error, setError] = useState('');
    
    const handleSubmit = (event) =>{
      event.preventDefault();
      if( name.trim().length < 3 || name.trim.startsWith('')){
        setError('El nombre escrito debe tener como minimo 3 caracteres y no comenzar con espacios')
        return;
      }
      if (description.length < 6) {
        setError('Este campo debe tener como minimo 6 caracteres');
        return;
      }
      const cambiarnombre = (event)=>{
        setName(event.target.value);
      };
      const cambiardescripcion = (event) => {
        setDescription(event.target.value);
      }
      return (
        <><><div>
          <form onSubmit={handleSubmit}></form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text"
              id="nombre"
              value={name}
              onChange={cambiarnombre} />
          </div>
        </div><div>
            <label htmlFor="description">Descripcion</label>
            <input type="text" id="descripcion" value={description} onChange={cambiardescripcion} />
          </div></><button type="submit">Enviar</button></>

      )


    }
  }
  
  
}</form>
      
    </div>
  );
}

export default App;
