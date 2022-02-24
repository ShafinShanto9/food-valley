import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  const user = localStorage.getItem("token");
	return (
		<Routes>
			{user && <Route path="/" exact element={<Home />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
};

export default App;
