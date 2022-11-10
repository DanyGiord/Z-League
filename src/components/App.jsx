import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from './Detail';
import Signup from './Signup';
import Cart from "./Cart";
import Success from "./Success";

function App() {
  return (
    <div className="App">
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/games/:id`} element={<Detail />} />
          <Route path={`/signup`} element={<Signup />} />
          <Route path={`/success`} element={<Success />} />
          <Route path={`/cart`} element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

