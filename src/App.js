import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={ <Home />} />
    </Routes>
    <div><Toaster/></div>

    </>
  );
}

export default App;
