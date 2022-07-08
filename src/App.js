import './App.css';
import Category from './Category';
import Menu from './Menu';
import data from "./data";


function App() {
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
