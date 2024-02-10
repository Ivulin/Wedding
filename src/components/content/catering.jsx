import React from 'react';
import './style.css';

const Catering = () => {

	return (
		<div className='inner-container center scroll-y'>
			<div className='info'>
				<div className='catering-title'>
					<p>29.4.2023 - Večeře</p>
				</div>
				<div className='line'>Menu bude uveřejněno před konáním akce.</div>
			</div>
			<div className='info'>
				<div className='catering-title'>
					<p>30.4.2023 - Grilování</p>
				</div>
				<div className='line'>Menu bude uveřejněno před konáním akce.</div>
			</div>
			<div className='info'>
				<div className='catering-title'>
					<p>ostatní</p>
				</div>
				<div className='line'>Kuchyň, která je součástí vybavení chaty, je volně k dispozici.</div>
				<div className='line'>Lze se občerstvit i v místních restauracích.</div>
				<div className='line'>Ve městě Neukirchen am Großvenediger se nachází BILLA a SPAR.</div>
			</div>
		</div>
	);
}

export default Catering;