import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {useGlobalState} from '../context/global';
import {CHANGE_FAVORITE_CHARACTER} from '../context/global/actionTypes';

const HeaderStyled = styled.header`
  height: 72px;

  display: flex;
  align-items: center;

  background-color: #9a835e;
  padding: 16px;
`;

const SelectStyled = styled.select`
  margin-left: auto;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: #72442b;
  margin-right: 16px;
`;

export const Header = () => {
  const {
    state: {characterList, favoriteCharacter},
    dispatch,
  } = useGlobalState();

  return (
    <HeaderStyled>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/movies">Movies</LinkStyled>
      <SelectStyled
        id="characterSelect"
        value={favoriteCharacter || ''}
        onChange={(e) => {
          dispatch({
            type: CHANGE_FAVORITE_CHARACTER,
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

