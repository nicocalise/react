import './App.scss';
import Home from './components/Home';
import { Link, Route, Routes } from "react-router-dom";
import Languages from './components/Languages';
import Categories from './components/Categories';

function App() {
  return (
    <div>
    <Link to="/">
      <button>Home</button>
    </Link>
    <Link to="/language">
      <button>Listado por lenguaje</button>
    </Link>
    <Link to="/categories">
      <button>Listado por categorias</button>
    </Link>

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/language" element={<Languages />} />
      <Route path="/categories" element={<Categories/>} />
    </Routes> 
      
    </div>
  );
}

export default App;
