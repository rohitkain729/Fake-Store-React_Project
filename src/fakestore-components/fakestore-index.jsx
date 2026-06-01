import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function FakeStoreIndex() {
  const [password, setPassword] = useState("");
  
  let navigate = useNavigate(); 

  function handleLoginClick() {
    if(password ==='admin'){
         navigate("/categories");
    }else{
     navigate("/invalid");
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="container-fluid">
      <section>
        <main className="text-center">
          <h1>Fakestore - Online Shopping</h1>
        </main>
        <dl>
          <dt>User Id</dt>
          <dd>
            {" "}
            <input type="text" name="" id="" />{" "}
          </dd>
          <dt>Password</dt>
          <dd>
            {" "}
            <input
              type="password"
              name=""
              id=""
              onChange={handlePasswordChange}
            />{" "}
          </dd>
        </dl>
        <button className="btn btn-info text-white" onClick={handleLoginClick}>
          Login
        </button>
      </section>
    </div>
  );
}
