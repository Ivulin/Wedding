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
							srcset="https://www.orlojzatec.cz/wp-content/uploads/2022/05/restaurace-u-orloje-zatec10.jpg 900w, https://www.orlojzatec.cz/wp-content/uploads/2022/05/restaurace-u-orloje-zatec10-300x190.jpg 300w, https://www.orlojzatec.cz/wp-content/uploads/2022/05/restaurace-u-orloje-zatec10-768x486.jpg 768w, https://www.orlojzatec.cz/wp-content/uploads/2022/05/restaurace-u-orloje-zatec10-705x447.jpg 705w"
							alt="restaurace a minipivovar U Orloje Žatec"
						/>
					</Carousel.Item>
					<Carousel.Item key='image_2'>
						<img id='image_2'
							className="image-slide"
							src="https://www.orlojzatec.cz/wp-content/uploads/2022/05/minipivovar-u-orloje-zatec01.jpg"
							alt="restaurace a minipivovar U Orloje Žatec"
							srcset="https://www.orlojzatec.cz/wp-content/uploads/2022/05/minipivovar-u-orloje-zatec01.jpg 900w, https://www.orlojzatec.cz/wp-content/uploads/2022/05/minipivovar-u-orloje-zatec01-300x190.jpg 300w, https://www.orlojzatec.cz/wp-content/uploads/2022/05/minipivovar-u-orloje-zatec01-768x486.jpg 768w, https://www.orlojzatec.cz/wp-content/uploads/2022/05/minipivovar-u-orloje-zatec01-705x447.jpg 705w"
						/>
					</Carousel.Item>
					<Carousel.Item key='image_3'>
						<img id='image_3'
							className="image-slide"
							src="https://www.orlojzatec.cz/wp-content/uploads/2022/05/pivovarska-zahrada-u-orloje-zatec09.jpg"
							alt="restaurace a minipivovar U Orloje Žatec"
							srcset="https://www.orlojzatec.cz/wp-content/uploads/2022/05/pivovarska-zahrada-u-orloje-zatec09.jpg 900w, https://www.orlojzatec.cz/wp-content/uploads/2022/05/pivovarska-zahrada-u-orloje-zatec09-300x190.jpg 300w, https://www.orlojzatec.cz/wp-content/uploads/2022/05/pivovarska-zahrada-u-orloje-zatec09-768x486.jpg 768w, https://www.orlojzatec.cz/wp-content/uploads/2022/05/pivovarska-zahrada-u-orloje-zatec09-705x447.jpg 705w"
						/>
					</Carousel.Item>
					<Carousel.Item key='image_4'>
						<img id='image_4'
							className="image-slide"
							src="https://www.orlojzatec.cz/wp-content/uploads/2024/01/zatecky-pivovar-01.jpg"
							alt="restaurace a minipivovar U Orloje Žatec"
							srcset="https://www.orlojzatec.cz/wp-content/uploads/2024/01/zatecky-pivovar-01.jpg 900w, https://www.orlojzatec.cz/wp-content/uploads/2024/01/zatecky-pivovar-01-300x190.jpg 300w, https://www.orlojzatec.cz/wp-content/uploads/2024/01/zatecky-pivovar-01-768x486.jpg 768w, https://www.orlojzatec.cz/wp-content/uploads/2024/01/zatecky-pivovar-01-705x447.jpg 705w"
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
					<p>(The Newlyweds have the right to change the program.)</p>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'><b>11:00</b></div>
					<div className='my-column-ceremony right'><b>Wedding Ceremony</b></div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'><b>11:30</b></div>
					<div className='my-column-ceremony right'><b>Photoshooting</b></div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'><b>13:00</b></div>
					<div className='my-column-ceremony right'><b>Wedding lunch</b></div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'></div>
					<div className='my-column-ceremony right'>Beef broth with meat, noodles and liver dumplings</div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'></div>
					<div className='my-column-ceremony right'>Roast sirloin in sour cream sauce with dumpling</div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'><b>14:30</b></div>
					<div className='my-column-ceremony right'><b>Cutting the Wedding cake</b></div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'></div>
					<div className='my-column-ceremony right'>(served with coffee)</div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'><b>15:30</b></div>
					<div className='my-column-ceremony right'><b>Throwing a wedding bouquet</b></div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'><b>16:00</b></div>
					<div className='my-column-ceremony right'><b>"Škatulata batulata" - find your seat</b></div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'><b>16:15</b></div>
					<div className='my-column-ceremony right'><b>Free entertainment and photo shoot of the newlyweds</b></div>
				</div>
				<div className='my-row'>
					<div className='my-column-ceremony left'><b>18:00</b></div>
					<div className='my-column-ceremony right'><b>The Newlyweds' dancing</b></div>
				</div>
				<br />
			</div>
		</div>
	);
}

export default CeremonyLunch;