import React from 'react';
import Invitation from './invitation';
import Ceremony from './ceremony';
import CeremonyLunch from './ceremonyLunch';
import Program from './program';
import Chalet from './chalet';
import Parking from './parking';
import TravelService from './travelService';
import Catering from './catering';
import Trips from './trips';
import './style.css';

const Content = ({ tabId, tabName, tabLink }) => {
	const renderContent = (param) => {
		switch (param) {
			case 1:
				return <Ceremony />;
			case 2:
				return <CeremonyLunch />;
			case 3:
				return <Program />;
			case 4:
				return <Chalet />;
			case 5:
				return <Parking />;
			case 6:
				return <TravelService />;
			case 7:
				return <Catering />;
			case 8:
				return <Trips />;
			default:
				return <Invitation />;
		}
	};

	return (
		<div className='main'>
			{renderContent(tabId)}
		</div>
	);
}

export default Content;