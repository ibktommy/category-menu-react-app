import './App.css';
import Category from './Category';
import Menu from './Menu';
import data from "./data";
import { useState } from 'react';


function App() {
  // Setting State for Menu Data
  const [menudata, setMenuData] = useState(data)

  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className='title'>Menu Category</h1>
          <Category />
          <div className="menu-content">
            {
              data.map(({ id, ...props }) => (
                <Menu key={id} {...props} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
