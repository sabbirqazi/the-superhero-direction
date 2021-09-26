/* This is my parent component , it has two child components which are Actor and AddedArtist */
import React, { useEffect, useState } from 'react';
import  './Bollywood.css';
import Actors from '../Actors/Actors'
import AddedArtist from '../AddedArtist/AddedArtist';

const Bollywood = () => {
    const [actors, setActors] = useState([]);
    const [artist, setArtist] = useState([]);
     useEffect(() =>{
       fetch('./superheroes.JSON')
       .then(res => res.json())
       .then(data => setActors(data))
    },[]);
    const handleAddArtist = (actor)=>{
        const newArtist = [...artist, actor];
        setArtist(newArtist);
    }
    return (
        <div className="bollywood-container">
            <div className="actors-container">
             {
               actors.map(actor => <Actors 
                key = {actor.key}
                actor = {actor}
                handleAddArtist ={handleAddArtist}
                ></Actors>)
             }
            </div>
            <div className="added-container">
            <AddedArtist artist={artist}></AddedArtist>
            </div>
        </div>
    );
};

export default Bollywood;