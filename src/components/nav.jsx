import React from "react";
import "../stylesheets/styles.css";
function Nav(){
    return(
        <div className="nav">
            <ul className="list">
                <li className="list-item"><a href="" className="hover-underline-animation">Kanto</a></li>
                <li className="list-item"><a href="" className="hover-underline-animation">Johto</a></li>
                <li className="list-item"><a href="" className="hover-underline-animation">Hoenn</a></li>
                <li className="list-item"><a href="" className="hover-underline-animation">Sinnoh</a></li>
                <li className="list-item"><a href="" className="hover-underline-animation">Unova</a></li>
                <li className="list-item"><a href="" className="hover-underline-animation">Kalos</a></li>
                <li className="list-item"><a href="" className="hover-underline-animation">Alola</a></li>
                <li className="list-item"><a href="" className="hover-underline-animation">Galar</a></li>
            </ul>
        </div>    
    )
}

export default Nav;