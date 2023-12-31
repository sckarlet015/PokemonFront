import { GET_ALL_POKEMON, GET_ALL_TYPES, GET_SEARCH_POKEMON } from "../actions/actions";

const initialState = {
    allPokemons: [],
    allTypes: [],
    searchPokemon: {}
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POKEMON:
            return {
                ...state,
                allPokemons: payload,
            };
        case GET_ALL_TYPES:
            return {
                ...state,
                allTypes: payload
            }
        case GET_SEARCH_POKEMON:
            return {
                ...state,
                searchPokemon: payload
            }
        default:
            return state;
    }
};

export default rootReducer;
