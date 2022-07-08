import React from "react";

const Category = ({ filterMenuItems, categories }) => {
	return (
		<>
			{categories.map((category, index) => {
				return (
					<button
						className="category-btn"
						key={index}
						onClick={() => filterMenuItems(category)}
					>
						{category}
					</button>
				);
			})}
		</>
	);
};

export default Category;
