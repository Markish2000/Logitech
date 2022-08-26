import './App.css';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App() {

  const mensaje = 'Bienvenido a mi app';
  const estilos = {
    backgroundColor: '#888',
    padding: '20px'
  }

  return ( 
    <div className = 'container'>
      <NavBar/>
      <h1>¡Hola Mundo!</h1>
      <strong>Otro mensaje</strong>
      <h3 style={estilos}>{mensaje}</h3>
      <Saludo name='Juan' lastname='Perez'>
        <p>Este es un mensaje 1</p>
        <p>Este es un mensaje 2</p>
        <p>Este es un mensaje 3</p>
      </Saludo>
      <Saludo name='Ana' lastname='Lopez'>
        <li>Un elemento de lista</li>
      </Saludo>
      <Saludo name='Miguel' lastname='Gonzales'/>
    </div>
  );
}

export default App;