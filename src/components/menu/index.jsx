import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

const Menu = ({ tabList }) => {
	const handleOnClick = (event) => {
		var x = document.getElementById("topTabs");
		if (x.className === "tabs" && event.target.id !== "0") {
			x.className += " responsive";
		} else {
			x.className = "tabs";
		}
	};

	return (
		<div id="topTabs" className='tabs'>
			{tabList.map(({ tabName, id, link }) =>
				<NavLink id={id} key={"link_" + id} to={(id === 0 || id === 1) ? "/" : '/' + link} className={(id === 0 || id === 1) ? "tab fa fa-home" : "tab"} onClick={handleOnClick}>
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