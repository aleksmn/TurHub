import { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  // Получим сообщение с сервера
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));

  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" element={<Users />} exact></Route>
        <Route path="/:userId/places" element={<UserPlaces />} exact></Route>
        <Route path="/places/new" element={<NewPlace />} exact></Route>
        <Route path="/places/:placeId" element={<UpdatePlace />} exact></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Users />} exact></Route>
        <Route path="/:userId/places" element={<UserPlaces />} exact></Route>
        <Route path="/auth" element={<Auth />} exact></Route>
        <Route path="*" element={<Navigate to="/auth" />} />
      </>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Routes>
            {routes}
          </Routes>
        </main>
        {/* {console.log(message)} */}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
