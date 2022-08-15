import React from "react";
import  "../stylesheets/styles.css";

function Header({title,image,imagef}){
    return(
        <div className="header">
            <div className="container-title">
                <div className="content-title">
                    <img src={image} alt="" className="img-title"/>
                    <p className="text-title">{title}</p>
                </div>
            </div>
            <div>
                <div className="form">
                    <input type="text" className="form-input" placeholder="Pokemon..."/>
                    <button className="form-button"><img src={imagef} alt="" className="img-form"/></button>
                </div>
            </div>
        </div>
    )
}

export default Header;