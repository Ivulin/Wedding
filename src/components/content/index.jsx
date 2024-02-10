import React from 'react';
import Invitation from './invitation';
import InvitationEng from './invitation-eng';
import Ceremony from './ceremony';
import CeremonyEng from './ceremony-eng';
import CeremonyLunch from './ceremonyLunch';
import CeremonyLunchEng from './ceremonyLunch-eng';
import Chalet from './chalet';
import Parking from './parking';
import Catering from './catering';
import Trips from './trips';
import './style.css';

const Content = ({ tabId, tabName, tabLink }) => {
	const renderContent = (param) => {
		switch (param) {
			case 1:
				return <InvitationEng />;			
			case 2:
				return <Ceremony />;
			case 3:
				return <CeremonyEng />;
			case 4:
				return <CeremonyLunch />;
			case 5:
				return <CeremonyLunchEng />;
			case 6:
				return <Chalet />;
			case 7:
				return <Parking />;
			case 8:
				return <Catering />;
			case 9:
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