import React from 'react';
import './App.css';
import { useSelector, useDispatch} from 'react-redux'
import { RootStore } from './Store';
import { getPokemon } from './actions/PokemonActions';

function App() {
  const dispatch = useDispatch();
  const pokemonState = useSelector( (state: RootStore) => state.pokemonReducer );
  const [pokemonName, setPokemonName] = React.useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value)
  }
  const handleSubmit = () => {
    dispatch(
      getPokemon(
        pokemonName
      )
    );
  }

  console.log('pokemonState -> ',pokemonState);
  return (
    <div className="App">
      <input type='text' onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      
        {
          pokemonState.pokemon && (
            <div>
              <img src={pokemonState.pokemon.sprites.front_default} alt='' />
              {
                pokemonState.pokemon.abilities.map(
                  (abilityItem, index) => {
                    return <p key={index}>{abilityItem.ability.name}</p>
                  }
                )
              }
            </div>
          )
        }
      
    </div>
  );
}

export default App;
