import React, { useEffect, useState } from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function Demo3()
{
  const [faculties, setFaculties] = useState([]);

  useEffect(()=>
  { 
    fetch('https://649e4249245f077f3e9c380a.mockapi.io/Ritesh_api_Project')
    .then((res) => { return res.json() })
    .then((res) => 
    {
      console.log(res);
      setFaculties(res)
    });
  },[]);

  const formattedFaculties = faculties.map((fac) => (
        <Link to={'/fac/'+fac.FacultyID} class="nav nav-Link">
          <h1>
            {fac.FacultyName}
          </h1>
        </Link>
  ));

  return (
    <>
      <div class="container">
        <Link to='/add' className ="btn btn-success btn-lg">Add Faculties</Link>
        <div className="row">{formattedFaculties}</div>
      </div>

    </>
  );
}

export default Demo3;