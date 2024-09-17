import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosRequest, setAccessToken } from "../../services/axiosinstance";
import { AppContext } from "../../app/AppContext";
import './LogReg.css'

function RegistrationPage() {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [shown, setShown] = useState(false);

  function validation(name, email, password, confirm) {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      setError("Fill in the field");
      return false;
    }
    if (password.trim() !== confirm.trim()) {
      setError("Passwords don't match");
      return false;
    }
    return true;
  }

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    if (!validation(name, email, password, confirm)) {
      return;
    }

    try {
      const { data } = await axiosRequest.post("/auth/registration/", {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
        isSeller,
      });
      if (data.message === "success") {
        setAccessToken(data.accessToken);
        setUser(data.user);
        navigate("/");
        return;
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit} className="regLogForm">
        <h1>Registration</h1>
        <p>
          Please enter your name, email, password and select role: seller or
          buyer.
        </p>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          minLength={5}
        />
        <label>
          <input
            type={shown ? "text" : "password"}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="password"
          />
          <button
            className="eye-button"
            type="button"
            onClick={() => setShown((prev) => !prev)}
          >
            <div className="eye">
            👁️‍🗨️
            </div>
          </button>
        </label>
        <label>
          <input
            type={shown ? "text" : "password"}
            placeholder="retry password"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
            className="password-input"
          />
        </label>
        <label for="cars">select your role:</label>
        <select
          for="isSeller"
          id="role"
          onChange={({ target }) => setIsSeller(target.value)}
        >
          <option value={false}>buyer</option>
          <option value={true}>seller</option>
        </select>
        <div>{error && <p>{error}</p>}</div>
        <button className="register-button" type="submit">register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
