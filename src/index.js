import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Header';
import Layout from './Layout';
import FacultyList from './FacultyList';
import Ritesh from './Slides';
import Demo from './hook';
import ApiList from './api';
import Cal from './Cal';
import './Cal.css';
import Name from './ControllComponents';
import Demo3 from './detailFac';
import GetDetails from './details';
import AddFac from './AddFac';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faculties" element={<FacultyList/>}/>
          <Route path="/Slides" element={<Ritesh/>}/>
          <Route path='/hook' element={<Demo/>}/>
          <Route path='/api' element={<ApiList/>}/>
          <Route path='/Cal' element={<Cal/>}/>
          <Route path='/ControllComponents' element={<Name/>}/>
          <Route path='/fac' element={<Demo3/>}/>
          <Route path='/fac/:id' element={<GetDetails/>}/>
          <Route path='/add' element={<AddFac/>}/> 
          <Route path='fac/edit/:id' element={<AddFac/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      {/* <App /> */}

    </div>
  </>
);
