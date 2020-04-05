export const initialState = {
  favoriteCharacter: null,
  characterList: [
    'Frodo',
    'Sam',
    'Merry',
    'Pippin',
    'Aragorn',
    'Gandalf',
    'Legolas',
    'Gimli',
  ],
};

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'changeFavoriteCharacter':
      return {...state, favoriteCharacter: payload};
    default:
      return state;
  }
};

