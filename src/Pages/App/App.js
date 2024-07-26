import api from "../../services/api";
import { useEffect, useState } from "react";
import './app.css'

function App() {

  const [pokemon,setPokemon] = useState({})

  async function loadPokemon(pokemon){
    await api.get(`/${pokemon}`)
    .then((response) =>{
      setPokemon(response.data)
    })
    .catch(() =>{
      return "Erro"
    })
  }

  useEffect(() => {
    loadPokemon('slowpoke')
  },[])

  console.log(pokemon)
  const sprite = pokemon.sprites
  const types = pokemon.types || []
  return (
    <main>

      <header>
        <h1>Pokedéx</h1>
      </header>


      <section>
      <div className="pokemon">
          {sprite && <img src={sprite.front_default}/>}
      </div>

      <div className="dados">
          <h2>Nome:{pokemon.name} - Número: {pokemon.id}</h2>
          <ul>
            {types.map((typeInfo, index) => (
                <li key={index}>{typeInfo.type.name}</li>
              ))}
          </ul>
          <div className="caracteristicas">
            <p>Peso: {pokemon.weight / 10} Kg</p>
            <p>Altura: {pokemon.height / 10} Metros</p>
          </div>
          

      </div>
      </section>
    </main>
  );
}

export default App;
