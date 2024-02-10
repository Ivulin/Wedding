import React from 'react';
import './style.css';

const Parking = () => {

	return (
		<div className='inner-container center'>
			<div className='title'>
				<p>Parkování</p>
			</div>
			<div className='info'>
				<div className='my-row'>
					<p>U chaty je 4 až 6 parkovacích míst v závislosti na velikosti aut.</p>
				</div>
				<div className='my-row'>
					<p className='warning'>!!Parkovací místa jsou vyhrazena pro rodiny s dětmi a starší rodinné příslušníky!!</p>
				</div>
				<div className='my-row'>
					<p className='warning'>!!Nechte vždy jedno parkovací místo volné k neprodlenému vyložení a naložení!!</p>
				</div>
				<br/>
			</div>
		</div>
	);
}

export default Parking;