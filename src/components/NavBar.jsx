import { auth, signInWithGoogle, logout } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-blue-600 text-white py-3 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Jap Mala</h1>
      
      {user ? (
        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-700"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-700"
        >
          Sign in 
        </button>
      )}
    </nav>
  );
}
