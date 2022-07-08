import React from "react";
// import "./App.css";

const Menu = ({ title, category, price, img, desc }) => {
	return (
		<>
			<div className="menu-item">
				<div className="item-img">
					<img src={img} alt={title} className="image" />
				</div>

				<div className="item-text">
					<div className="top">
						<h2 className="item-title">{title}</h2>
						<p className="price">{price}</p>
					</div>
					<p className="item-para">{desc}</p>
				</div>
			</div>
		</>
	);
};

export default Menu;
