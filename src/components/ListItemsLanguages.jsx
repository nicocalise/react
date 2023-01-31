import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext';

const ListItemsLanguages = ({ props }) => {
    
    const { lang } = useContext(LanguageContext)

const apiBase = 'https://v2.jokeapi.dev/joke/Any?'    
const url = `${apiBase}lang=${lang}&amount=10`;

let [jokes, setJokes] = useState([]);

useEffect(() => {
  fetch(url)
    .then(response => response.json())
    .then(data => {setJokes(data.jokes)})
}, [lang]); 

return (
    <div>
        { 
            jokes.map((joke, key) => (
            <div key={ key }>
                <p>{ joke.setup }</p>
                <p>{ joke.delivery }</p>
            </div>
            ))
        }
    </div>
    );
}

export default ListItemsLanguages
