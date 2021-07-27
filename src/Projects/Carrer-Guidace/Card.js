import React from "react";

const Card = ({ data }) => {
  
  return(
    <div className="main-card-box">
        {
            data.map( (card , indx) => {
                    const { id, language, image, describe, category } = card;
                    return (
                    <div key={id} className="card-container">
                      <div className="card-count-box" key={id}>
                        <span className="card-count">{indx + 1}</span>
                        <hr className="card-count-hr" />
                      </div>
            
                      <div className="card-head">{language}</div>
            
                      <div className="card-image">
                        <img src={image} alt={language} />
                      </div>
            
                      <div className="card-body">
                        <span>{describe}</span>
                      </div>
                    </div>
                    );
            })
        }      
    </div>
  );
};

export default Card;
