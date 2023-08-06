import React from 'react';
import './style.css';

const Ceremony = () => {

	return (
		<div className='inner-container center scroll-y'>
			<div className='title'>
				<p>Křížova vila v Žatci</p>
			</div>
			<div className='info'>
				<div className='my-row'>
					<h5><b>Začátek obřadu v 11:00</b></h5>
				</div>
			</div>
			<div className='galery'>
				<img className="villa" src='https://www.atlasceska.cz/storage/galleries/2007/12/31/018926/krizova-vila-regionalni-muzeum-zatec-226478.jpg' alt='Křížova vila' />
				<div className='my-row'><h5><a href="https://goo.gl/maps/WHEtVNA7TrQK1cvP8">Zeyerova 344, 438 01 Žatec</a></h5></div>
			</div>
			<div className='info'>
				<div className='my-row'>Po obřadu bude následovat focení v zahradách Křížovy vily.</div>
				<div className='my-row'>Doporučený dresscode bude oznámen v průběhu roku.</div>
			</div>
		</div>
	);
}

export default Ceremony;