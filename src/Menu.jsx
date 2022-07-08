import React from "react";
import image from "./item-1.jpeg";

const Menu = () => {
	return (
		<>
			<div className="menu-item">
				<div className="item-img">
					<img src={image} alt="picOne" className="image" />
				</div>

				<div className="item-text">
					<h2 className="item-title">Buttermilk Pancakes</h2>
					<p className="item-para">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
						labore amet officia voluptatibus suscipit numquam quos fugiat
						aliquam quia non.
					</p>
				</div>
			</div>
		</>
	);
};

export default Menu;
