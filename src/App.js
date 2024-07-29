import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
    </Routes>
    <div><Toaster/></div>

    </>
  );
}

export default App;
