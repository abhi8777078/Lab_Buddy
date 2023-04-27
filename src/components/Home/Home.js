import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <div className="mainHome">
                <div className="header">
                    <div className="logo">
                        <img className="logoImage" src="../Image/logo.png" />
                    </div>
                    <div className="abesName"><h2>ABES ENGINEERING COLLEGE GHAZIABAD</h2></div>
                    <div className="dropdown">
                        <button class="dropbtn">Log in</button>
                        <div class="dropdown-content">
                            
                            <Link to="/adminlogin">Admin</Link>
                            <Link to="/Facultylogin">Faculty</Link>
                            <Link to="/studentlogin">Student</Link>
                            
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="labText">
                        <h1 className="labText-h1">Lab Buddy</h1><br />
                        <p className="labText-p">The purpose of Lab Buddy is to automate <br />the existing manual system by the help of <br />computerized equipments and full-fledged<br /> computer software, fulfilling their requirements.
                        </p>
                    </div>
                    <div className="labImage"><img className="lab-img" src="../Image/labImage.jpg" alt="" /></div>
                </div>
            </div>
        </>
    );
}
export default Home;
