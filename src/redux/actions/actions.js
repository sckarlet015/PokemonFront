export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_ALL_TYPES = "GET_ALL_TYPES"
export const GET_SEARCH_POKEMON = "GET_SEARCH_POKEMON"

export function get_all_pokemon(payload){
    return{
        type: GET_ALL_POKEMON,
        payload: payload
    }
};

export function get_all_types(payload){
    return{
        type: GET_ALL_TYPES,
        payload: payload
    }
}

export function get_search_pokemon(payload){
    return{
        type: GET_SEARCH_POKEMON,
        payload: payload
    }
}

