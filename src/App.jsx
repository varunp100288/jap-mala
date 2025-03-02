import "./App.css";
import Login from "./components/Login";

import JapMala from "./components/JapMala";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Jap Mala App</h1>
      <Login />
      <JapMala />
      
    </div>
  );
}
