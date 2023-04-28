// import { useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./Department.css"
function Department() {
    return (
        <>
            <AdminHeader />
            <div className="Department_main_container">
                <AdminSidebar />
                <div className="Department_split">
                    <div className="Department_create_batch">
                        <div className="Department_left">Create Batch</div>
                        <div className="Department_right">
                            <input type="text" className="Department_txt" placeholder="Enter Branch " />
                            <input type="text" className="Department_txt" placeholder="Enter Section " />
                            <input type="number" className="Department_txt" placeholder="Enter Year " />
                            <button className="Department_createBtn" > Create</button>
                        </div>
                    </div>
                    <div className="Department_createdDepartment">
                        <div className="Department_Branch">Branch</div>
                        <div className="Department_Section">Section</div>
                        <div className="Department_Year">Year</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Department;