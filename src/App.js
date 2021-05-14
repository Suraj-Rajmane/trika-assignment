
import './App.css';
import Home from './components/Home/Home'
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

function App() {

  return (
    <div className="app">
      <Home/>
      <Categories/>
      <Products/>
    </div>
  );
}

export default App;
