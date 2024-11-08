import {useEffect} from 'react'

function Popular() {
    useEffect(() =>{
    getPopular();
  }, []);

    const getPopular = async () => {
        const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        console.log(data);
        //adding aaync here bc it's data that we n\eed 
        //to wait for and we4 wanna make sure we have it before 
        //
    }


  return (<div> </div>);
}

export default Popular
