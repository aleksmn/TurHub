import { useEffect, useState } from "react";

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
    <div className="App">
      {console.log(message)}
      <h1>Добро пожаловать на TurHub!</h1>
    </div>
  );
}

export default App;
