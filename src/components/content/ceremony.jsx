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
					<h6>(Dostavte se prosím alespoň 15 min před začátkem obřadu.)</h6>
				</div>
			</div>
			<div className="galery">
				<img className="villa" src='https://www.atlasceska.cz/storage/galleries/2007/12/31/018926/krizova-vila-regionalni-muzeum-zatec-226478.jpg' alt='Křížova vila' />
				<div className="my-row">
					<a target="_blank" href="https://goo.gl/maps/WHEtVNA7TrQK1cvP8" rel="noreferrer noopener">
						<h5>
							Zeyerova 344, 438 01 Žatec
							<i className="link_icon fa fa-external-link"></i>
						</h5>
						
					</a>
				</div>
			</div>
			<div className='info'>
				<div className='my-row'>Po obřadu bude následovat focení v zahradách/interiérech Křížovy vily (záleží na počasí).</div>
				<div className='my-row'>Doporučený dresscode: <b>SEMI FORMAL</b></div>
			</div>
		</div>
	);
}

export default Ceremony;