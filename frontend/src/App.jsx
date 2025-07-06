import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState();

  // Получим сообщение с сервера
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));

  }, []);

  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact></Route>
          <Route path="/:userId/places" element={<UserPlaces />} exact></Route>
          <Route path="/places/new" element={<NewPlace />} exact></Route>
          <Route path="/places/:placeId" element={<UpdatePlace />} exact></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {/* {console.log(message)} */}
    </BrowserRouter>
  );
}

export default App;
