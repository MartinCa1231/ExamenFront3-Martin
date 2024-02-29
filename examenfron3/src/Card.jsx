//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ nombre, descripcion }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

export default Card;
