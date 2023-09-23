import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import images from '../../asset/resource/imageList';
import './style.css';

const Chalet = () => {

	return (
		<div className='chalet'>
			<div className='title'>
				<p><a href='https://www.belvilla.co.uk/AT-5741-92?utm_medium=referral-l&utm_source=copylink&utm_campaign=sitebutton' target="_blank" rel="noreferrer" >Neukirchen am Großvenediger Salzburg</a></p>
			</div>
			<div className='title'>
				<b>29.4. - 3.5.</b>
			</div>
			<div className='galery'>
				<Carousel variant='dark'>
					{images.map(({ id, src, alt }) =>
						<Carousel.Item key={'carousel_' + id}>
							<img id={'image_' + id}
								className="image-slide"
								src={"/images/chalet/" + src}
								alt={alt}
							/>
						</Carousel.Item>)}
				</Carousel>
			</div>
			<div className='info'>
				<div className='my-row'>
					<div className='my-column left'><b>Check-in:</b></div>
					<div className='my-column right'>??:??</div>
				</div>
				<div className='my-row'>
					<div className='my-column left'><b>Check-out</b></div>
					<div className='my-column right'>??:??</div>
				</div>
			</div>
			<div className='facilities'>
				<div className='item-list'>
					<div className='item'>
						<span className="fa fa-bed"></span>
						<span className="icon-title">24x</span>
					</div>
					<div className='item'>
						<span className="fa fa-bath"></span>
						<span className="icon-title">8x</span>
					</div>
					<div className='item'>
						<span className="fa fa-wifi"></span>
						<span className="icon-title">WiFi</span>
					</div>
					<div className='item'>
						<span className="fa-my-grill"></span>
					</div>
					<div className='item'>
						<span className="fa-my-dish-washer"></span>
					</div>
					<div className='item'>
						<span className="fa-my-parking"></span>
					</div>
					<div className='item'>
						<span className="fa-my-microwave"></span>
					</div>
					<div className='item'>
						<span className="fa-my-oven"></span>
					</div>
					<div className='item'>
						<span className="fa-my-sauna"></span>
					</div>
				</div>
				<div className='warning-towel'>
					<div className='warning-towel-ico'>
						<span className="fa-my-towel"></span>
					</div>
					<span className="warning-towel-label">!!Prosím vezměte si vlastní ručníky!!</span>
				</div>
			</div>
			<div className='location'>
				<iframe title="chalet_map" className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.2903055420184!2d12.2751387!3d47.250026299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4777ba8851ba89c1%3A0xc4e49d0283fd8ea1!2sNeudaugasse%20232%2C%205741%20Neukirchen%20am%20Gro%C3%9Fvenediger%2C%20Rakousko!5e0!3m2!1scs!2scz!4v1682801720675!5m2!1scs!2scz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	);
}

export default Chalet;