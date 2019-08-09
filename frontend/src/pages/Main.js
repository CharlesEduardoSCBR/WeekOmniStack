import React from 'react';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) {
    return (
    	<div className="main-container">
    		<img src={logo} alt="Tindev" />

    		<ul>
    			<li>
    				<img src="https://avatars2.githubusercontent.com/u/" alt="NomeDev" />
    				<footer>
    					<strong>Nome</strong>
    					<p>Lorum Ipsum Description</p>
    				</footer>

    				<div className="buttons">
    					<button type="buton">
    						<img src={like} alt="Like" />
    					</button>

    					<button type="buton">
    						<img src={dislike} alt="Dislike" />
    					</button>
    				</div>

    			</li>
    		</ul>
    	</div>
    )
}