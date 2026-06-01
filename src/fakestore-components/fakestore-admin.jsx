import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function FakeStoreAdminHome(){

    const [cookies,setCookie,removeCookie] = useCookies('admin_id');
    const navigate = useNavigate();
 

    useEffect(()=>{
       if(cookies['admin_id']==null){
        navigate('/login');
       }
    },[]);

    function handleSignOut(){
        removeCookie('admin_id');
        navigate("/login");
    }


    return (
        <div>
            <h2>Admin Dashboard - {cookies['admin_id']}  </h2>
            <button onClick={handleSignOut} className="btn-sm btn-info">signout</button>
        </div>
    );

}