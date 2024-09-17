import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { axiosRequest, setAccessToken } from "../../services/axiosinstance";
import { AppContext } from "../../app/AppContext";
import './LogReg.css'

function LogoutPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);

  const onHandleLogout = async () => {
    try {
      const { data } = await axiosRequest.delete("/auth/logout");
      console.log(data);
      if (data.message === "success") {
        setAccessToken("");
        setUser(null);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="logoutContainer">
      <div>{user?.name}, are you sure you want to get out?</div>
      <button onClick={onHandleLogout} type="button" >
        Yes!
      </button>
      <button onClick={() => navigate(-1)} type="button" className="no-button">
        No, I want to stay
      </button>
    </div>
  );
}

export default LogoutPage;
