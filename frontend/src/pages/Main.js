import React, { useEffect, useState } from 'react';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) {

	const [users, setUsers] = useState([]);

	useEffect(() => 
		{
			async function loadUsers(){
				const response = await api.get(
									'/devs', 
									{
										headers: {
											user: match.params.id,
										}
									}
								 )

				setUsers(response.data);
			}

			loadUsers();
		}, [match.params.id]
	);

    return (
    	<div className="main-container">
    		<img src={logo} alt="Tindev" />

    		<ul>

    			{users.map(user => (
	   				<li key={user._id}>
    					<img src={user.avatar} alt={user.name} />
    					<footer>
    						<strong>{user.name}</strong>
    						<p>{user.bio}</p>
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
    				))}
    		</ul>
    	</div>
    )
}