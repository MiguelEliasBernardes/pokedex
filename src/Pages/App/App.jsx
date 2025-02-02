import api from "../../services/api";
import { useEffect, useState } from "react";
import './app.css'

function App() {

  const [pokemon,setPokemon] = useState({})
  const [valor, setvalor] = useState("");

  async function loadPokemon(pokemon){
    await api.get(`/${pokemon}/`)
    .then((response) =>{
      setPokemon(response.data)
    })
    .catch(() =>{
      return "Erro"
    })
  }

  useEffect(() => {
    loadPokemon('1')
  },[])

  const change = (event) => {
    setvalor(event.target.value);
  };

  const click = () => {
    loadPokemon(valor);
  };

  const sprite = pokemon.sprites
  const types = pokemon.types || []

  return (
    <main>
      <header>
        <h1>Pokedéx</h1>
      </header>


      <section>
        <div className="center">
          <div className="pokemon">
              {sprite && <img src={sprite.front_default}/>}
          </div>

          <div className="dados">
              <h2>{pokemon.id} - {pokemon.name}</h2>
              <ul>
                {types.map((typeInfo, index) => (
                  <li key={index} className={typeInfo.type.name}>{typeInfo.type.name}</li>
                    
                  ))}
              </ul>
              <div className="caracteristicas">
                <p>Peso: {pokemon.weight / 10} Kg</p>
                <p>Altura: {pokemon.height / 10} Metros</p>
                
              </div>
              <hr/>
              <div className="recolher">
                  <h3>Pesquise o pokemon(Digite o nome ou número)</h3>
                  <div className="recebe-dados">
                    <input type="text" placeholder="pesquisar pokemon" value={valor} onChange={change}/>
                    <button type="button" onClick={click}>Buscar</button>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
