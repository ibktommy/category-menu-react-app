import './App.css';
import Category from './Category';
import Menu from './Menu';
import data from './data'
import { useState } from 'react';

// Getting all categories from our data
const allCategories = ["all", ...new Set(data.map((dataItem) => dataItem.category))]
console.log(allCategories)


function App() {
  // Setting State for Menu Data
  const [menuData, setMenuData] = useState(data)
  const [categories] = useState(allCategories)

  // Function to Filter Categories
  const filterMenuItems = (category) => {
    if (category === 'all') {
      setMenuData(data)
      return
    }

    const newMenuItems = data.filter((dataItem) => dataItem.category === category)
    setMenuData(newMenuItems)
  }

  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className='title'>Menu Category</h1>

          <div className="category">
            <Category filterMenuItems={filterMenuItems} categories={categories} />
          </div>

          <div className="menu-content">
            <Menu menuData={menuData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
