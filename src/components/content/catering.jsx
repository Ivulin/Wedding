import React from 'react';
import './style.css';

const Catering = () => {

	return (
		<div className='inner-container center scroll-y'>
			<div className='info'>
				<div className='catering-title'>
					<p>29.4.2023 - Večeře</p>
				</div>
				<div className='catering-item'>Vepřový řízek s pečenými bramborami</div>
			</div>
			<div className='info'>
				<div className='catering-title'>
					<p>30.4.2023 - Grilování</p>
				</div>
				<div className='catering-item'>Vepřové nakládané maso</div>
				<div className='catering-item'>Špekáčky a klobásy na gril</div>
				<div className='catering-item'>Grilovaný sýr</div>
				<div className='catering-item'>Grilovaná zelenina</div>
			</div>
			<div className='info'>
				<div className='catering-title'>
					<p>ostatní</p>
				</div>
				<div className='my-column-event'>Kuchyň, která je součástí vybavení chaty, je volně k dispozici.</div>
				<br/>
				<div className='catering-item'>Lze se občerstvit i v místních restauracích</div>
				<br/>
				<div className='my-column-time'>Obchody ve městě Neukirchen am Großvenediger:</div>
				<div className='my-column-description'><a href="https://maps.app.goo.gl/PUZikaK7gFnmKwrf7"><img alt="BILLA" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Billa-Logo.svg/107px-Billa-Logo.svg.png"/></a></div>
				<br/>
				<div className='my-column-description'><a href="https://maps.app.goo.gl/pNpWcJDbKFF2hCL2A"><img alt="BILLA" src="https://icon2.cleanpng.com/20180712/rq/kisspng-spar-sterreichische-warenhandels-ag-logo-busines-spar-5b4821d81093e3.7047990115314539120679.jpg"/></a></div>
			</div>
		</div>
	);
}

export default Catering;