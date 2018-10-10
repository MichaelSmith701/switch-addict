import React from 'react';

const CSGame = ({key, name, cover, date, website}) => {
  return (
    <div key={key} className="comingSoon">
      <div className="gameThumb">
        <a href={website} target="_blank"><img src={cover} alt={name} /></a>
      </div>
      <div className="CSInfo">
        <h4>{name}</h4>
        <p>{date}</p>
      </div>
    </div>
    );
};

export default CSGame;