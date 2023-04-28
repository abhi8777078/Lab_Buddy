import "./AdminSidebar.css";
import { Link } from "react-router-dom";
function AdminSidebar()
{
    return (
        <>
            <div className="adminSideBar">
                <label className="adminSideMenu" href="#"><b>Admin</b></label>
                <Link className="adminSideMenu" to="/department">Department</Link>
                <Link className="adminSideMenu" to="/subject">Subject</Link>
                <Link className="adminSideMenu" to="/faculty">Faculty</Link>
                <Link className="adminSideMenu" to="/allocate">Faculty Allocate</Link>
                <Link className="adminSideMenu" to="/student">Student</Link>
                <Link className="adminSideMenu" to="/compiler">Compiler</Link>
            </div>
        </>
    );
}
export default AdminSidebar;