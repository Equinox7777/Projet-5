import React, { useState, useEffect } from 'react';
import { getOutPokemon } from '../api/pokedelete';
import { editPokemon } from '../api/pokeedit';
import { getAll } from '../api/pokemons';
import "../App.css"


function PokeUpdate() {
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
                    <h2 className='name'>Stats :</h2>
                    <div className='flex'>
                        <h3>{pokemon.desc}</h3>
                        <h3>{pokemon.type.join(", ")}</h3>
                        <h3>{pokemon.weakness.join(", ")}</h3>
                        <h3>{pokemon.height}m</h3>
                        <h3>{pokemon.weight}kg</h3>
                        <h3>{pokemon.gender.join(", ")}</h3>
                        <h3>{pokemon.category}</h3>
                        <h3>{pokemon.abilities}</h3>
                    </div>
                    <button className='button-85' onClick={async ()=>{
                            await getOutPokemon(pokemon)
                            setCount(count+1)
                        }}>Suprimer !</button>
                    <button className='button-85 edit' onClick={async ()=>{
                        await editPokemon(pokemon)
                        setCount(count+1)
                    }}>Modifier !</button>
            </div>
        })
    }
    </div>
</div>;
}

export default PokeUpdate ;