import { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import "./Department.css"
function Department() {
    const handle=() => {
        
    }
    return (
        <>
            <AdminHeader />
            <div className="main-container">
                <AdminSidebar />

                <div className="split">
                    <div className="create-batch">
                        <div className="left">Create Batch</div>
                        <div className="right">
                            <input type="text" className="txt" placeholder="Enter Branch " />
                            <input type="text" className="txt" placeholder="Enter Section " />
                            <input type="number" className="txt" placeholder="Enter Year " />
                            <button className="createBtn" onClick={handle}> Create</button>
                        </div>
                    </div>
                    <div className="createdBatch">
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Department;