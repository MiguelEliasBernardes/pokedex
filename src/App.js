import api from "./services/api";
import { useEffect, useState } from "react";

function App() {

  const [pokemon,setPokemon] = useState('')

  useEffect(() => {
    async function loadPokemon(){
      await api.get(`/pokemon/`)
      .then((response) =>{
        setPokemon(response.data)
      })
      .catch(() =>{
        return "Erro"
      })
    }

    loadPokemon()
      
    return
  },[])

  console.log(pokemon)

  return (
    <div className="App">
      <p>{pokemon.count}</p>
    </div>
  );
}

export default App;
