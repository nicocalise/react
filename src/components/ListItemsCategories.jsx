import React, { useEffect, useState } from 'react'

const ListItemsCategories = (props) => {
    const apiBase = 'https://v2.jokeapi.dev/joke/'    
    const url = `${apiBase}/${props.name}?amount=10`;
    
    let [jokes, setJokes] = useState([]);
    
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => {setJokes(data.jokes)})
    }, [props]); 
    
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
