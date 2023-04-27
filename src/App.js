import { BrowserRouter,Routes,Route } from "react-router-dom";
import Admin from "./components/AdminPage/Admin.js";
import Home from "./components/Home/Home.js";
import Department from "./components/AdminPage/Department.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<Admin/>} />
        <Route path="/department" element={<Department/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
