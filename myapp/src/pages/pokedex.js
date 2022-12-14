import React, { useState, useEffect } from 'react';
import { getOutPokedex } from '../api/pokedexdelete';
import { getAll } from '../api/pokecatch';
import "../App.css"

function Pokedex() {
    const [ pokemons, setPokemons ] = useState([]);
    const [ count, setCount ] = useState(0);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const pokemonsFetched = getAll();
            pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);
    
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
                        <h3> Description : {pokemon.desc}</h3>
                        <h3>Types : {pokemon.type.join(", ")}</h3>
                        <h3>Faiblesses : {pokemon.weakness.join(", ")}</h3>
                        <h3>Taille : {pokemon.height}m</h3>
                        <h3>Poids : {pokemon.weight}kg</h3>
                        <h3>Genre : {pokemon.gender.join(", ")}</h3>
                        <h3>Catégorie : {pokemon.category}</h3>
                        <h3>Talent : {pokemon.abilities}</h3>
                    </div>
                </div>
                <button className='button-85' onClick={async ()=>{
                    await getOutPokedex(pokemon)
                    setCount(count+1)
                }}>Suprimer !</button>
            </div>
            })
        }
        </div>
    </div>;
}

export default Pokedex ;