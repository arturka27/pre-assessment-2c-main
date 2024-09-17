import { Route, Routes } from "react-router-dom";
import HeaderPage from "../widgets/navbar/HeaderPage";
import AuthorizationPage from "../pages/auth/AuthorizationPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import LogoutPage from "../pages/auth/LogoutPage";
import { AppContext } from "./AppContext";
import { useEffect, useState } from "react";
import { axiosRequest, setAccessToken } from "../services/axiosinstance";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";

function App() {
  const [user, setUser] = useState(undefined);
  const [items, setItems] = useState([]);

  const getAllItems = async () => {
    try {
      const response = await axiosRequest.get("/items");
      if (response.status === 200) {
        setItems(response.data.items);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  const checkUser = async () => {
    try {
      const response = await axiosRequest.get("/tokens/refresh");
      if (response.status === 200) {
        setAccessToken(response.data.accessToken);
        setUser(response.data.user);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    getAllItems();
    checkUser();
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          user,
          setUser,
          items,
          setItems,
        }}
      >
        <HeaderPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
