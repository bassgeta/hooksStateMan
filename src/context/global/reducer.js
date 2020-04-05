export const initialState = {
  favoriteCharacter: null,
}

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'changeFavoriteCharacter':
      return {...state, favoriteCharacter: payload}
    default:
      return state
  }
}

