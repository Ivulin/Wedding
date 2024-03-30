import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './style.css';

const CeremonyLunch = () => {

	return (
		<div className='inner-container center scroll-y'>
			<div className='title'>
				<p>Restaurace Orloj v Žatci</p>
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
				<p>Svatební program</p>
			</div>
			<div className='info center'>				
				<div className='my-row'>
					<div className='my-column-time'><b>11:00</b></div>
					<div className='my-column-event'>Obřad</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>11:30</b></div>
					<div className='my-column-event'>Společné focení</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>13:00</b></div>
					<div className='my-column-event'>Svatební oběd</div>
					<div className='my-column-description'></div>
					<div className='my-column-description'>Hovězí vývar s masem, nudlemi a játrovými knedlíčky</div>
					<div className='my-column-description'></div>
					<div className='my-column-description'>Svíčková na smetaně s domácím karlovarským knedlíkem</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>14:30</b></div>
					<div className='my-column-event'>Krájení svatebního dortu</div>
					<div className='my-column-description'></div>
					<div className='my-column-description'>(podáváno s kávou)</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>15:30</b></div>
					<div className='my-column-event'>Házení svatební kytice</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>16:00</b></div>
					<div className='my-column-event'>Škatulata batulata</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>16:15</b></div>
					<div className='my-column-eventy'>Volná zábava a focení novomanželů</div>
				</div>
				<div className='my-row'>
					<div className='my-column-time'><b>18:00</b></div>
					<div className='my-column-event'>Tanec novomanželů</div>
				</div>
				<br/>
				<div className='my-row'>
					<div className='my-column-description'>Novomanželé si vyhrazují právo na změnu programu.</div>
				</div>
			</div>
		</div>
	);
}

export default CeremonyLunch;