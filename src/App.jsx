import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebaseConfig";
import Login from "./components/Login";
import JapMala from "./components/JapMala";
import Navbar from "./components/Navbar";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <JapMala /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/japmala" element={user ? <JapMala /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
