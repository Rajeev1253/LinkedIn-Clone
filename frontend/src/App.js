import './App.css';
import Signup from './pages/Signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signUp' element={<Signup/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
