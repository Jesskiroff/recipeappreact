import { useEffect, useState } from 'react';
import styled from 'styled-components'; 

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  // this is to run the function as soon as possible.The empty array essentially tells the comp to only run the func when the component gets mointed

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
    //adding aaync here bc it's data that we n\eed
    //to wait for and we4 wanna make sure we have it before
    setPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
                return(
                    <Card> 
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title}/>
                    </Card>
                
                );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    `;

export default Popular;
