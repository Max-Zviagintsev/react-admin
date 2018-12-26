import React from 'react';
import Clients from "../clients/Clients";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div>
            <Clients />
            <Sidebar />
        </div>
    );
};

export default Dashboard;
