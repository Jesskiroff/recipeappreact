import { useEffect } from 'react';

function Popular() {
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
    //
  };

  return <div> </div>;
}

export default Popular;