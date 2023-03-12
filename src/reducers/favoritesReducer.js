export const ADD_FAVORITE = "ADD_FAVORITE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";



const initialState = {
    favorites: [],
    displayFavorites: false
}

export const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state, 
                favorites: [...state.favorites, action.payload]
            }
            case TOGGLE_FAVORITES:
            return {
                ...state, 
                displayFavorites: !state.displayFavorites
            }

        default:
            return state;
    }
}