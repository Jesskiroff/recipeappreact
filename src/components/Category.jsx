import { MdOutlineFoodBank } from 'react-icons/md';
import { GiMeal, GiCakeSlice, GiFrenchFries } from 'react-icons/gi';
import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
//NavLink givess you a class of active

function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/American'}>
        <MdOutlineFoodBank />
        <h4>American</h4>
      </NavLink>
      <NavLink to={'/cuisine/French'}>
        <GiMeal />
        <h4>French</h4>
      </NavLink>
      <NavLink to={'/cuisine/Jewish'}>
        <GiFrenchFries />
        <h4>Jewish</h4>
      </NavLink>
      <NavLink to={'/cuisine/LatinAmerican'}>
        <GiFrenchFries />
        <h4>Latin American</h4>
      </NavLink>
      <NavLink to={'/cuisine/MiddleEastern'}>
        <GiCakeSlice />
        <h4>Middle Eastern</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 rem;
`;
export default Category;
