import React from 'react';
import './style.css';

const Catering = () => {

	return (
		<div className='inner-container center scroll-y'>
			<div className='info'>
				<div className='title'>
					<p>29.4.2023 - Společná večeře</p>
				</div>
				<div className='line'>Meny bude uveřejněno v před konáním akce.</div>
			</div>
			<div className='info'>
				<div className='title'>
					<p>30.4.2023 - večerní Grillování </p>
				</div>
				<div className='line'>Meny bude uveřejněno v před konáním akce.</div>
			</div>
			<div className='info'>
				<div className='title'>
					<p>ostatní</p>
				</div>
				<div className='line'>Kuchyň, která je součástí vybavení chaty, je volně k dispozici.</div>
				<div className='line'>Lze se občerstvit i v místních restauracích.</div>
			</div>
		</div>
	);
}

export default Catering;