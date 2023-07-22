import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from "./Components/Add/Add";
import Edit from "./Components/Edit/Edit";

function App() {

  return (
    <div className="App">
      <>
        <Navbar />
      </>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
