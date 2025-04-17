import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
        <Route path="/" element={<Users/>}></Route>
        <Route path="/places/new" element={<NewPlace/>}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
