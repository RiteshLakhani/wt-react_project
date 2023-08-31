import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddFac()
{
    const[data , setData] = useState({});
    const navigate = useNavigate();
    const param = useParams();
    useEffect(()=>{
        if(param.id>0){
            fetch('https://649e4249245f077f3e9c380a.mockapi.io/Ritesh_api_Project' + '/' + param.id)
            .then((res) => { return res.json() })
            .then((res) => {setData(res);});
        }
    },[])
    return (
        <table className="table container">
            <tr>
                <td  className="row m-3">
                    <input type="text" className="form-control" placeholder="FacultyName" value={data.FacultyName} onChange={(e) => {
                        setData({ ...data, FacultyName: e.target.value })
                    }} />
                </td>
                <td  className="row m-3">
                    <input type="text" className="form-control" placeholder="FacultyID" value={data.FacultyID} onChange={(e) => {
                        setData({ ...data, FacultyID: e.target.value })
                    }} />
                </td>
                <td  className="row m-3">
                    <input type="text" className="form-control" placeholder="Exp" value={data.Exp} onChange={(e) => {
                        setData({ ...data, Exp: e.target.value })
                    }} />
                </td>
                <td  className="row m-3">
                    <input type="text" className="form-control" placeholder="Image" value={data.Image} onChange={(e) => {
                        setData({ ...data, Image: e.target.value })
                    }} />
                </td>
            </tr>
            <br/>
            <tr>
                <td>
                    <button className="btn btn-warning btn-lg" onClick={()=>{
                        if(param.id>0)
                        {
                            fetch('https://649e4249245f077f3e9c380a.mockapi.io/Ritesh_api_Project/'+param.id,{
                                method:"PUT",
                                body:JSON.stringify(data),
                                headers:{
                                    "content-type":"application/json"
                                }
                            }).then((res)=>{
                                navigate("/fac/"+param.id);
                            });
                        }
                        else
                        {
                            fetch('https://649e4249245f077f3e9c380a.mockapi.io/Ritesh_api_Project',{
                                method:"Post",
                                body:JSON.stringify(data),
                                headers:{
                                    "content-type":"application/json"
                                }
                            }).then((res)=>{
                                navigate("/");
                            });
                        }
                    }}>Submit</button>
                </td>
            </tr>
        </table>
    );
}

export default AddFac; 