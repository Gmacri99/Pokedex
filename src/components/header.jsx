import React from "react";
import  "../stylesheets/styles.css";

function Header({title,image,imagef,poke,name,id}){
    return(
        <div className="header">
            <div className="container-title">
                <div className="content-title">
                    <img src={image} alt="" className="img-title"/>
                    <p className="text-title">{title}</p>
                </div>
            </div>
            <div>
                <form className="form" onSubmit={poke}>
                    <input type="text" className="form-input" placeholder="Pokemon..." onChange={name} id={id}/>
                    <button className="form-button"><img src={imagef} alt="" className="img-form"/></button>
                </form>
            </div>
        </div>
    )
}

export default Header;