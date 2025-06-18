import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import List from './Pages/List.jsx';
import Navbar from './components/Navbar.jsx';
import Details from './Pages/Details.jsx';
import Add from './Pages/Add.jsx'
import Edit from './Pages/Edit.jsx';

function App() {
  return(
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Navigate to="/homepage" />} />
    <Route path = "/homepage" element = {<Home />} />
    <Route path = "/item/list" element= {<List/>}/>
    <Route path = "/item/:id/details" element = {<Details />} />
    <Route path = "/item/add" element={<Add />} />
    <Route path = "/item/:id/edit" element={<Edit />} />

    </Routes>
    </>

  );
  
}

export default App;
