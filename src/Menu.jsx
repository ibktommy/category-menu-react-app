import React from "react";
// import "./App.css";

const Menu = ({ menuData }) => {
	return (
		<>
			{menuData.map(({ id, ...props }) => {
				return (
					<div className="menu-item" key={id}>
						<div className="item-img">
							<img src={props.img} alt={props.title} className="image" />
						</div>

						<div className="item-text">
							<div className="top">
								<h2 className="item-title">{props.title}</h2>
								<p className="price">${props.price}</p>
							</div>
							<p className="item-para">{props.desc}</p>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Menu;
