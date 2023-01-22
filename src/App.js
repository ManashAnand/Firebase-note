
import './App.css';
import Navbar from './Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AUTH from './Authentication'
import Firestore from './Firestore';
import Storage from './Storage'

function App() {
  
  return (
  <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<AUTH/>}/>
      <Route path="/firestore" element={<Firestore/>}/>
      <Route path="/storage" element={<Storage/>}/>

    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
