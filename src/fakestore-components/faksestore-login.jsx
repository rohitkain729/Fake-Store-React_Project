import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function  FakeStoreLogin(){

    const[cookie,setCookie,removeCookie] = useCookies('admin_id');
    const[userid,setUserId] = useState('');
    const navigate = useNavigate();


    function handleIdChange(e){
         setUserId(e.target.value);
    }

    function handleLoginClick(){
        setCookie('admin_id',userid);
        navigate('/admin');
    }


    return (
        <div className="container">

            <h3>Admin Login</h3>
            <dl>
                <dt>UserId</dt>
                <dd><input type="text" onChange={handleIdChange} /></dd>
                <dt>Password</dt>
                <dd> <input type="password" /> </dd>
            </dl>
            <button onClick={handleLoginClick} className="btn btn-primary">Login</button>

        </div>
    );
}