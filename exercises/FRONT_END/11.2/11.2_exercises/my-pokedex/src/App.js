import './App.css';
import data from './data';
import Pokedex from './Pokedex';
function App() {
  return (
    <div className="App">
      <header className="App-header">My Pokedex</header>
      <Pokedex pokemons={ data }/>
    </div>
  );
}

export default App;
  