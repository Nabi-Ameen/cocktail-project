
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import pages
import Navbar from './cocktailsproject/components/Navbar';
import Home from './cocktailsproject/pages/Home'
import About from './cocktailsproject/pages/About'
import SingleCocktail from './cocktailsproject/pages/SingleCocktail'
import Error from './cocktailsproject/pages/Error'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
