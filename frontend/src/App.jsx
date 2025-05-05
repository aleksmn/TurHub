import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  // const [message, setMessage] = useState();

  // // Получим сообщение с сервера
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));

  // }, []);

  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
      <Routes>
        <Route path="/" element={<Users/>} exact></Route>
        <Route path="/places/new" element={<NewPlace/>} exact></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;
