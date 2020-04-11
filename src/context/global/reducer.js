import {CHANGE_FAVORITE_CHARACTER} from './actionTypes';

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
    'Sauron',
  ],
};

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case CHANGE_FAVORITE_CHARACTER:
      return {...state, favoriteCharacter: payload};
    default:
      return state;
  }
};

