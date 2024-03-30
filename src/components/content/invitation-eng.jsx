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
			<div className='invitation-body-eng'>
				<p>With joy and love, our news we share.</p>
				<p>A single sentence, sweet and fair:</p>
				<h3>„We're getting married!"</h3>
				<p>But for now, we'll wait and take our time.</p>
				<p>In April, our weddding plans will climb.</p>
				<p><b>Křížova vila</b> our chosen place.</p>
				<p><b>In April 27th</b> we'll embrace.</p>
			</div>
		</div>
	);
}

export default Invitation;