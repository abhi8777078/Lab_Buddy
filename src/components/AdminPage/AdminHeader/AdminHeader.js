import "./AdminHeader.css";
function AdminHeader() {
    return (
        <>
        <div className="header">
                    <div className="logo">
                        <img className="logoImage" src="../Image/logo.png" />
                    </div>
                    <div className="abesName"><h2>ABES ENGINEERING COLLEGE GHAZIABAD</h2></div>
                    <div className="Right">
                        <button className="logoutBtn">Log out</button>
                    </div>
                </div>
        </>
    );
}
export default AdminHeader;