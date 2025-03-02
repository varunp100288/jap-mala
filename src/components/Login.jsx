import { useState, useEffect  } from "react";
import { auth, signInWithGoogle, logout } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleLogin = async () => {
    const userData = await signInWithGoogle();
    setUser(userData);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {user ? (
        <div>
          <p>Welcome, {user.displayName} 👋</p>
          <button onClick={logout} className="bg-red-500 text-white px-4 py-2 mt-2">Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Sign in with Google</button>
      )}
    </div>
  );
}
