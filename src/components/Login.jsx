import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function Login() {

  const numbers = [2,3,4,5,6];
  const doubleNumber = numbers.map((number) => {
    return number*2;
  });
  console.log(doubleNumber);
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {user ? (
        <h1 className="text-2xl font-bold text-green-600">
          Welcome, {user.displayName}! 👋
        </h1>
      ) : (
        <h1 className="text-2xl font-bold text-blue-600">
          Please login to continue
        </h1>
      )}

      
    </div>
  );

}
