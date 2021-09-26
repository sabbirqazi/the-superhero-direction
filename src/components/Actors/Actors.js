import React from 'react';
import './Actors.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Actors = (props) => {
    
    const {name, img, age, sallary, role, country} =props.actor; /* destructuring */
    const element = <FontAwesomeIcon icon={faPlus} />
    return (
        <div className="actor-card">
          <img src={img} alt="" />
          <div className="card-upper">
          <h2>{name}</h2>
          <h3>{role}</h3>
          <button onClick={ () => props.handleAddArtist(props.actor)}> {element} Add</button>
          </div> 
          <div className="card-lower">
            <div>
              <h4>Sallary</h4>
              <h5>$ {sallary}</h5>
            </div>
            
            <div>
              <h4>Age</h4>
              <h5>{age}</h5>
            </div>
        
            <div>
              <h4>Country</h4>
              <h5>{country}</h5>
            </div>
          </div>
        </div>
    );
};

export default Actors;