import React from "react";
import '../stylesheets/styles.css';

const Card=({id,name,imageF,type,type1,stat1,stat2,stat3,stat4,exp,weight,click})=>{
    const style=`card-complete card-${type1}`
    
    return(
        <div className="div-search" id="modal">
            <div className={style}>
                <button className="btn-close" onClick={click}>X</button>
                <div className="info">
                    <div className="info-text">
                        <img src={imageF} alt={name} className="card-img"/>
                        <p className="card-text">#0{id}</p>
                        <p className="card-text card-text-title">{name}</p>
                    </div>
                    <div className="info-stats">
                        <p className="stats">HP: {stat1}</p>
                        <p className="stats">Attack: {stat2}</p>
                        <p className="stats">Defense: {stat3}</p>
                        <p className="stats">Speed: {stat4}</p>
                        <p className="stats">Base Experience: {exp}</p>
                        <p className="stats">Weight: {weight}</p>
                    </div>
                </div>
                <div className="card-text card-types">{type}</div>
            </div>
        </div>
    )
}

export default Card;