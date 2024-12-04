import { MdOutlineFastfood } from 'react-icons/md';
import { GiMeal, GiHotSpices } from 'react-icons/gi';
import { FaPepperHot, FaWineBottle } from 'react-icons/fa';
import styled from 'styled-components';
import React from 'react';
import { NavLink} from 'react-router-dom';
//NavLink givess you a class of active

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/American'}>
        <MdOutlineFastfood />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/French'}>
        <GiMeal />
        <h4>French</h4>
      </SLink>
      <SLink to={'/cuisine/Jewish'}>
        <FaWineBottle/>
        <h4>Jewish</h4>
      </SLink>
      <SLink to={'/cuisine/Latin American'}>
        <FaPepperHot />
        <h4>Latin American</h4>
      </SLink>
      <SLink to={'/cuisine/Middle Eastern'}>
        <GiHotSpices />
        <h4>Middle Eastern</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 rem;
`;
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%
margin-right: 2rem;
text-decoration:none;
background: k=linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
`
export default Category;

