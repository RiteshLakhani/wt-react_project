import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function GetDetails() {
    const param = useParams();
    const [fac, setFac] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://649e4249245f077f3e9c380a.mockapi.io/Ritesh_api_Project' + '/' + param.id)
            .then((res) => { return res.json() })
            .then((res) => {
                setFac(res);
            });
    }, [])

    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="card col-3 text-align-center ">
                    <img src={fac.Image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            FacultyId: {fac.FacultyID}
                            <br />
                            FacultyName: {fac.FacultyName}
                            <br />
                            FacultyExperience: {fac.Exp}
                        </p>
                        <Link to="/fac" class="btn btn-primary">Back</Link>
                        <Link to={"/fac/edit/"+param.id} className = "btn btn-dark">Edit</Link>
                        <button class="btn btn-danger" onClick={()=>{
                             fetch('https://649e4249245f077f3e9c380a.mockapi.io/Ritesh_api_Project'+"/"+fac.FacultyID,{method:"Delete"}).then((res)=>{navigate("/fac")});
                        }}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetDetails;
