import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fakeLogin } from "../../store/reducers/loginSlice";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, errorMessage, isSuccess } = useSelector(
    (state) => state.login
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fakeLogin({ email, password }));
  };

  useEffect(() => {
    if (isSuccess) {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  }, [isSuccess]);
  return (
    <>
        <Link to={'/users-list'} >UsersList on Table</Link>
      <form onSubmit={handleSubmit}>
        {isLoading ? (
          <p>Now Login....</p>
        ) : (
          <>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </>
        )}

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </>
  );
}

export default LoginForm;
