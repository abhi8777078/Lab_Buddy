import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./Subject.css"
function Subject() {
    return (
        <>
            <AdminHeader />
            <div className="Subject_main_container">
                <AdminSidebar />

                <div className="Subject_split">
                    <div className="Subject_add_subject">
                        <div className="Subject_left">ADD SUBJECT</div>
                        <div className="Subject_right">
                            <input type="text" className="Subject_txt" placeholder="Enter Lab Name " />
                            <input type="text" className="Subject_txt" placeholder="Enter Lab Code " />
                            <input type="number" className="Subject_txt" placeholder="Enter Year " />
                            <button className="Subject_create_Btn" > add subject</button>
                        </div>
                    </div>
                    <div className="Subject_created_Department">
                    <div className="Subject_lab_name">Lab Name</div>
                        <div className="Subject_lab_code">Lab Code</div>
                        <div className="Subject_year">Year</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Subject;