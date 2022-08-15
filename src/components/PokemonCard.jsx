import React from "react";
import '../stylesheets/styles.css';

const Pokemon=({id,name,image,type,type1})=>{



    const style=`card card-${type1}`
    return(
        <div className={style}>
            <img src={image} alt={name}/>
                    <p className="card-text">#0{id}</p>
                    <p className="card-text card-text-title">Name: {name}</p>
            <div className="card-text">{type}</div>
        </div>
    )
}

export default Pokemon;