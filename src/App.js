import { BrowserRouter,Routes,Route } from "react-router-dom";
import Admin from "./components/AdminPage/Admin/Admin";
import Home from "./components/Home/Home.js";
import Department from "./components/AdminPage/Department/Department";
import Subject from "./components/AdminPage/Subject/Subject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<Admin/>} />
        <Route path="/department" element={<Department/>} />
        <Route path="/subject" element={<Subject/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
