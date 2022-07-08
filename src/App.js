import Category from './Category';
import './App.css';
import Menu from './Menu';

function App() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className='title'>Menu Category</h1>
          <Category />
          <Menu />
        </div>
      </div>
    </>
  );
}

export default App;
