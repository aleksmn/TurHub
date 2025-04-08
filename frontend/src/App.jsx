import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState("");

  // Получим сообщение с сервера
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));

  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>} exact></Route>
        <Route path="/places/new" element={<NewPlace/>} exact></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
