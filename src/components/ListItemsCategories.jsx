import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext';

const ListItemsCategories = (props) => {

    const { lang } = useContext(LanguageContext)
    const apiBase = 'https://v2.jokeapi.dev/joke'    
    const url = `${apiBase}/${props.name}?lang=${lang}&amount=10`;
    
    let [jokes, setJokes] = useState([]);
    
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error){
                console.log(`no hay chistes para el lenguaje ${lang}`)
                return;
            } else{
                setJokes(data.jokes)
            }
            })
    }, [props, lang]); 
    
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

export default ListItemsCategories
