import React from 'react';
import './AddedArtist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

const AddedArtist = (props) => {
    const element = <FontAwesomeIcon icon={faUserAlt} />
    const {artist} = props;
    let total = 0;

    for (const listedArtist of artist){
        total = total + listedArtist.sallary;
    }

    return (
        <div className="AddedArtist">
          <h1>Added Artists</h1> 
          <h2> {element} Total Artist: {artist.length}</h2> 
          <h3>Total Sallary : $ {total}</h3>
          <h3>List Of Artist</h3>
          <hr />
          <ol>
              {
                  artist.map(artst => <li>{artst.name}</li>)
              }
          </ol>
        </div>
    );
};

export default AddedArtist;