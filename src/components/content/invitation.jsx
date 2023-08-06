import React from 'react';
import './style.css';

const Invitation = () => {

	return (
		<div className='inner-container'>
			<div className='invitation-header'>
				<p className='name famele-name'>Iva Kreslová</p>
				<p className='preposition'>a</p>
				<p className='name male-name'>Milan Řezáč</p>
			</div>
			<div className='invitation-body'>
				<p>oznamují všemu světu, jednu prostou krásnou větu:</p>
				<h2>„Budeme se brát"</h2>
				<p>Zatím na oddavky nespěcháme, až v dubnu naši svatbu přichystáme.</p>
				<p>Za místo činnu, vybrali jsme <b>Křížovu vilu</b>.</p>
				<p>Datum, které se blíží, je <b>27. dubna 2024</b></p>
			</div>
			<div className='invitation-footer'>
				Nemusíme, chceme!
			</div>
		</div>
	);
}

export default Invitation;