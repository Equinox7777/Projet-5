import React, { useState, useEffect } from 'react';
import { getInPokedex } from '../api/pokemonadd';
import { getAll } from '../api/pokemons';
import "../App.css"

function Home() {
    const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const pokemonsFetched = getAll();
            pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    
    return <div className="pokemon-list pokeCountainer">
        <div className='flex'>
        {
            pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon pokemon number">
                <img className="avatar" src={pokemon.img} alt="pokemon"/>
                <div className='name'>
                    <h2>{pokemon.name}</h2>
                </div>
                <h2 className='number'>#{pokemon.numero}</h2>
                <div className='stat'>
                    <h2 className='name'>Stats :</h2>
                    <div className='flex'>
                        <h3>{pokemon.desc}</h3>
                        <h3>{pokemon.type}</h3>
                        <h3>{pokemon.weakness}</h3>
                        <h3>{pokemon.height}m</h3>
                        <h3>{pokemon.weight}kg</h3>
                        <h3>{pokemon.gender}</h3>
                        <h3>{pokemon.category}</h3>
                        <h3>{pokemon.abilities}</h3>
                    </div>
                </div>
                <button className='button-85' onClick={()=>getInPokedex(pokemon)}>Capturer !</button>
            </div>
            })
        }
        </div>
    </div>;
}

export default Home ;