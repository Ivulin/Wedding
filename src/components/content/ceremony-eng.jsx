import React from 'react';
import './style.css';

const Ceremony = () => {

	return (
		<div className='inner-container center scroll-y'>
			<div className='title'>
				<p>Křížova vila in Žatec</p>
			</div>
			<div className='info'>
				<div className='my-row'>
					<h5><b>The Wedding ceremony starts at 11:00</b></h5>
					<h6>(Please be on the place 15 min before start itself.)</h6>
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
				<div className='my-row'>Photoshooting will be in the garden of Křížova vila or inside (It depends in the weather).</div>
				<div className='my-row'>Dresscode: <b>SEMI FORMAL</b></div>
			</div>
		</div>
	);
}

export default Ceremony;