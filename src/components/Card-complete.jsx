import React from "react";
import '../stylesheets/styles.css';

const Card=({id,name,imageF,type,type1,stat1,stat2,stat3,stat4,exp,weight})=>{
    const style=`card-complete card-${type1}`
    return(
        <div className={style}>
             <img src={imageF} alt={name}/>
            <div>
                <p className="card-text">#0{id}</p>
                <p className="card-text card-text-title">Name: {name}</p>
                <div>
                    <p className="stats">HP: {stat1}</p>
                    <p className="stats">Attack: {stat2}</p>
                    <p className="stats">Defense: {stat3}</p>
                    <p className="stats">Speed: {stat4}</p>
                    <p className="stats">Base Experience: {exp}</p>
                </div>
            </div>
            <div>Weight: {weight}</div>
            <div className="card-text">{type}</div>
        </div>
    )
}

export default Card;