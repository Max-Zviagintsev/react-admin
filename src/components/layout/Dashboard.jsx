import React from 'react';
import Clients from "../clients/Clients";
import styled from 'styled-components';

//CSS Starts
const DashboardWrapper = styled.div`
  margin: 55px 15px 15px 110px;
`;
//CSS Ends

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <Clients />
        </DashboardWrapper>
    );
};

export default Dashboard;
