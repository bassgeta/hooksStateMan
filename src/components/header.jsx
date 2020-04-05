import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {useGlobalState} from '../context/global';

const HeaderStyled = styled.header`
  height: 72px;

  display: flex;
  align-items: center;

  background-color: #9a835e;
  padding: 8px;
`;

const SelectStyled = styled.select`
  margin-left: auto;
`;

export const Header = () => {
  const {
    state: {characterList, favoriteCharacter},
    dispatch,
  } = useGlobalState();

  return (
    <HeaderStyled>
      <Link to="/">Home</Link>
      <SelectStyled
        id="characterSelect"
        value={favoriteCharacter || ''}
        onChange={(e) => {
          dispatch({
            type: 'changeFavoriteCharacter',
            payload: e.target.value,
          });
        }}
      >
        <option value="">Choose your favorite</option>
        {
          characterList.map((char) => (
            <option
              value={char}
              key={char}
            >
              {char}
            </option>
          ))
        }
      </SelectStyled>
    </HeaderStyled>
  );
};

