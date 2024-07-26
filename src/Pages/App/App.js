import api from "../../services/api";
import { useEffect, useState } from "react";
import './app.css'

function App() {

  const [pokemon,setPokemon] = useState({})

  useEffect(() => {
    async function loadPokemon(){
      await api.get(`/1`)
      .then((response) =>{
        setPokemon(response.data)
      })
      .catch(() =>{
        return "Erro"
      })
    }

    loadPokemon()
  },[])

  console.log(pokemon)
  const sprite = pokemon.sprites

  return (
    <main>
      <section>
      <div className="pokemon">
          {sprite && <img src={sprite.front_default}/>}
      </div>

      <div className="dados">
          {pokemon.name}
      </div>
      </section>
    </main>
  );
}

export default App;
