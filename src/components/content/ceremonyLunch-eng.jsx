import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './style.css';

const CeremonyLunch = () => {

	return (
		<div className='inner-container center scroll-y'>
			<div className='title'>
				<p>Restaurant Orloj in Žatec</p>
			</div>
			<div className="galery">
				<Carousel variant='dark'>
					<Carousel.Item key='image_1'>
						<img id='image_1'
							className="image-slide"
							src="https://www.orlojzatec.cz/wp-content/uploads/2022/05/restaurace-u-orloje-zatec10.jpg"
							alt="restaurace a minipivovar U Orloje Žatec"
						/>
					</Carousel.Item>
					<Carousel.Item key='image_2'>
						<img id='image_2'
							className="image-slide"
							src="https://www.orlojzatec.cz/wp-content/uploads/2022/05/minipivovar-u-orloje-zatec01.jpg"
							alt="restaurace a minipivovar U Orloje Žatec"
						/>
					</Carousel.Item>
					<Carousel.Item key='image_3'>
						<img id='image_3'
							className="image-slide"
							src="https://www.orlojzatec.cz/wp-content/uploads/2022/05/pivovarska-zahrada-u-orloje-zatec09.jpg"
							alt="restaurace a minipivovar U Orloje Žatec"
						/>
					</Carousel.Item>
					<Carousel.Item key='image_4'>
						<img id='image_4'
							className="image-slide"
							src="https://www.orlojzatec.cz/wp-content/uploads/2024/01/zatecky-pivovar-01.jpg"
							alt="restaurace a minipivovar U Orloje Žatec"
						/>
					</Carousel.Item>
				</Carousel>
			</div>
			<div className="my-row link-text">
				<a target="_blank" href="https://maps.app.goo.gl/3mbncxEpBqviejnd7" rel="noreferrer noopener">
					nám. Prokopa Velkého 1951, 438 01 Žatec 1
					<i className="link_icon fa fa-external-link"></i>

				</a>
			</div>
			<div className='title'>
				<p>Wedding program</p>
			</div>
			<div className='info center'>				
				<div className='my-row'>
					<div className='my-column-time'><b>11:00</b></div>
					<div className='my-column-event'>Wedding Ceremony</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>11:30</b></div>
					<div className='my-column-event'>Photo shoot</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>13:00</b></div>
					<div className='my-column-event'>Wedding lunch</div>
					<div className='my-column-description'></div>
					<div className='my-column-description'>Beef broth with meat, noodles and liver dumplings</div>
					<div className='my-column-description'></div>
					<div className='my-column-description'>Roast sirloin in sour cream sauce with dumpling</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>14:30</b></div>
					<div className='my-column-event'>Cutting the Wedding cake</div>
					<div className='my-column-description'></div>
					<div className='my-column-description'>(served with coffee)</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>15:30</b></div>
					<div className='my-column-event'>Throwing a wedding bouquet</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>16:00</b></div>
					<div className='my-column-event'>Find your seat game</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>16:15</b></div>
					<div className='my-column-event'>Free entertainment and photo shoot of the newlyweds</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>18:00</b></div>
					<div className='my-column-event'>The Newlyweds' dancing</div>
				</div>
				<br />
				<div className='my-row'>
					<div className='my-column-description'>The Newlyweds have the rights to change the program.</div>
				</div>
			</div>
		</div>
	);
}

export default CeremonyLunch;