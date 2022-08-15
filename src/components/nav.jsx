import React from "react";
import "../stylesheets/styles.css";
function Nav(){
    return(
        <div className="nav">
            <ul className="list">
                <li className="list-item"><a href="" className="a">Kanto</a></li>
                <li className="list-item"><a href="" className="a">Johto</a></li>
                <li className="list-item"><a href="" className="a">Hoenn</a></li>
                <li className="list-item"><a href="" className="a">Sinnoh</a></li>
                <li className="list-item"><a href="" className="a">Unova</a></li>
                <li className="list-item"><a href="" className="a">Kalos</a></li>
                <li className="list-item"><a href="" className="a">Alola</a></li>
                <li className="list-item"><a href="" className="a">Galar</a></li>
            </ul>
        </div>    
    )
}

export default Nav;