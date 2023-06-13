import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://api.github.com/users");
      const jsonResponse = await response.json();
      setUsers(jsonResponse);
    } catch (error) {
      console.error("Error loading users:", error);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1 className="heading">Second Task Fetching Data From API</h1>
      <p className="horizontal-line"></p>
      <button className="button" onClick={loadUsers}>Get Data</button>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="user-list">
          
          {users.map(({ id, login, avatar_url }) => (
            <div className="user-card" key={id}>
              <img src={avatar_url} alt={login} />
              <div className="user-details">
                <h3>{login}</h3>
                <p>ID: {id}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
