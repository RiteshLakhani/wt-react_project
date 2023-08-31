import React, { useState,useEffect } from 'react';

function ApiList() {
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
    <div key={fac.FacultyID} className="card col-3">
      <img src={fac.Image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          FacultyId: {fac.FacultyID}
          <br/>
          FacultyName: {fac.FacultyName}
          <br />
          FacultyExperience: {fac.Exp}
        </p>
        <a herf="#" class="btn btn-danger" onClick={()=>{
          fetch('https://649e4249245f077f3e9c380a.mockapi.io/Ritesh_api_Project'+"/"+fac.FacultyID,{method:"Delete"});
          setFaculties([
            ...faculties.filter((e)=>{
              return e.FacultyID !== fac.FacultyID;
            })
          ]) 
        }}>Delete</a>
      </div>
    </div>
  ));

  return (
    <>
      <div class="container">
        <div className="row">{formattedFaculties}</div>
      </div>

    </>
  );
}

export default ApiList;