import axios from "axios";
import { get_search_pokemon } from "./actions";

export function getSearchPokemon(search) {
    if(/^[a-zA-Z]+$/.test(search)){
        return dispatch => {
            axios.get(`http://localhost:3001/pokemon/name?name=${search.toLowerCase()}`)
            .then(response => {
                const poke =   response.data[0]
                dispatch(get_search_pokemon(poke))
            })
            .catch(error => {
                alert(error.message)
            });
        }
    }
}