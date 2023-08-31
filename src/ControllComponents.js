import {useState} from "react";

function Name()
{
    const [data,setData] = useState({});

    return(
      <>
        <input type="text" placeholder="First Name" onChange={(e)=>{
          setData({...data,FirstName:e.target.value})
        }}/>
        <br/>
        <input type="text" placeholder="Middle Name" onChange={(e)=>{
          setData({...data,MiddleName:e.target.value})
        }}/>
        <br/>
        <input type="text" placeholder="Last Name" onChange={(e)=>{
          setData({...data,LastName:e.target.value})
        }}/>
        <br/>
        <input type="text" placeholder="Hobby" onChange={(e)=>{
          setData({...data,Hobby:e.target.value})
        }}/>
        <br/>
        <p>FirstName:{data.FirstName}</p>
        <p>MiddleName:{data.MiddleName}</p>
        <p>LastName:{data.LastName}</p>
        <p>Hobby:{data.Hobby}</p>
      </>
    )
}

export default Name;