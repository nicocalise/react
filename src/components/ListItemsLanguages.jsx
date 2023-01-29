import React, { useEffect, useState } from 'react'

const ListItems = (props) => {
const apiBase = 'https://v2.jokeapi.dev/joke/Any?'    
const url = `${apiBase}lang=${props.value}&amount=10`;

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

export default ListItems
