import { combineReducers } from "redux";

// Reducers
import pokemonReducer from "./PokemonReducer";



const RootReducer = combineReducers({
  pokemonReducer
})

export default RootReducer;