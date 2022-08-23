import { Route, Routes } from "react-router-dom";
import Dashboard from "./page";
import Login from "./page/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
