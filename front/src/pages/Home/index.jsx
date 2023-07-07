import { Link } from "wouter";
import React, { useState } from 'react';

const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };


    return (<>
        <h1>Merchos Place</h1>
        <div>
            <button onClick={toggleMenu}>
                🐺Activos
            </button>
            {isExpanded && (
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            )}
        </div>
        <div>
            <button onClick={toggleMenu}>
                🐶Adoptados
            </button>
            {isExpanded && (
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            )}
        </div>
        <div>
            <button onClick={toggleMenu}>
                🐕Acogidas
            </button>
            {isExpanded && (
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            )}
        </div>
        <div>
            <button onClick={toggleMenu}>
                🌈Rainbow
            </button>
            {isExpanded && (
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            )}
        </div>
        <Link to="/map">Refugio no mapa</Link>
    </>)
}



export default Home;