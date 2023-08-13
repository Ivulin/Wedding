import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

const Menu = ({ tabList }) => {
	const handleOnClick=()=>{
		var x = document.getElementById("topTabs");
		if (x.className === "tabs") {
			x.className += " responsive";
		} else {
			x.className = "tabs";
		}
	};

	return (
		<div id="topTabs" className='tabs'>
			{tabList.map(({ tabName, id, link }) =>
				<NavLink key={"link_" + id} to={id === 0 ? "/" : '/' + link} className={id === 0 ? "tab fa fa-home" : "tab"} onClick={handleOnClick}>
					{tabName}
				</NavLink>
			)}
			<div className="icon" onClick={handleOnClick}>
				<i className="fa fa-bars"></i>
			</div>
		</div>
	);
}

export default Menu;