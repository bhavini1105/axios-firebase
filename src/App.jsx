import React, { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import { Route, Router, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState({});
  const [editId, setEditId] = useState(null);

  const updateUser = (user) => {
    setUser(user);      
    setEditId(user.id); 
  }

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={<Form user={user} setUser={setUser} editId={editId} setEditId={setEditId} updateUser={updateUser} />}
        />
        <Route
          path="/table"
          element={<Table updateUser={updateUser} />}
        />
      </Routes>


    </>
  )
}

export default App