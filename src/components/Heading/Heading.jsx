import React from "react"
import { useNavigate } from "react-router-dom";


function Heading(){

    const navigate = useNavigate();
    return(
        <>
        <div class='container'>
            <div class='row'>
                <div className="col-md-2">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-bars">&nbsp; Menu</i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button class="dropdown-item" type="button" onClick={()=>{
                                localStorage.removeItem('user');
                                navigate('/register')
                            }}>Register User</button>
                            <button class="dropdown-item" type="button" onClick={()=>{
                                localStorage.removeItem('user');
                                navigate('/login')
                            }}>Log Out</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <h1 >Gold Calculator</h1>
                </div>
            </div>
        </div>
        </>
    )
}
export default Heading 