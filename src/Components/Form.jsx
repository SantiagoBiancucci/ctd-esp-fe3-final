import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length <= 5 || !email.includes('@')) {
      setError('Por favor verifique su información. El nombre debe superar los 5 caracteres y el correo debe ser válido');
    } else {
      console.log('Datos enviados:', name, email);
      setError('');
      setEnviado(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input type="text" placeholder="Ingresá tu nombre" onBlur={(e) => setName(e.target.value)}/>
        </label>
        <br />
        <label>
          Email:
          <br/>
          <input type="email" placeholder="Ingresá tu email" onBlur={(e) => setEmail(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {!error && enviado && <p>Gracias {name}, nos estaremos contactando en las proximas 24hs habiles vía email</p>}
    </div>
  );
};

export default Form;