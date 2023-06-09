import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil'
import Login from './Pages/Login/Login';
import Dashbord from './Pages/Dashbord/Dashbord'
import CasesPage from './Pages/Cases/CasesPage';
import Archive from './Pages/Archive/Archive';
import Calendrier from './Pages/Calendrier/Calendrier';
import Register from './Pages/Register/Register';
import OneCase from './Pages/Cases/OneCase';
import Error from './Pages/Errors/Error';
import ListCase from './Pages/Cases/ListCase';
import ListUser from './Pages/Register/ListUser';
import EditUser from './Pages/Register/EditUser';



function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/*' element={<Error/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/dashbord' element={<Dashbord/>}/>
        <Route path='/cases' element={<CasesPage/>}/>
        <Route path='/archive'   element={<Archive/>}/>
        <Route path='/calendar'   element={<Calendrier/>}/>
        <Route path='/register'   element={<Register/>}/>
        <Route path='/case/:_id'   element={<OneCase/>}/>
        <Route path='/listcase/:_id' element={<ListCase/>}/>
        <Route path='/listuser/:_id' element={<ListUser/>}/>
        <Route path='/edituser/:_id' element={<EditUser/>}/>
      

      </Routes>
    </div>
  );
}

export default App;
