import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebaseConfig";
import Login from "./components/Login";
import JapMala from "./components/JapMala";
import Navbar from "./components/NavBar";
import TestCount from "./components/TestCount";
import HelloHook from "./components/HelloHook";
import MyUserEff from "./components/MyUserEff";
import TestFun from "./components/TestFun";

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
      <MyUserEff />
      <TestFun />
      <HelloHook />
      {/* <TestCount /> */}
      <Routes>
        <Route path="/" element={user ? <JapMala /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/japmala" element={user ? <JapMala /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
