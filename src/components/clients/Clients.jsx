import React, {Component} from 'react';
import {Table, Icon} from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//CSS Starts
const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

//CSS Ends

class Clients extends Component {

    render() {
        const clients = [{
            id: '354534343',
            firstName: 'Kevin',
            lastName: 'Johnson',
            email: 'kevin@gmail.com',
            phone: '555-555-5555',
            balance: '30'
        },
            {
                id: '144578666',
                firstName: 'Bob',
                lastName: 'Jackson',
                email: 'bob@gmail.com',
                phone: '555-555-3444',
                balance: '1000'
            }];

        const columns = [{
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        }, {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: 'Balance',
            dataIndex: 'balance',
            key: 'balance',
            render: (clients) => <Link to={'/client/' + clients.id}>Details</Link>
        }];

        if (clients) {
            return (
                <div>
                    <TitleWrapper>
                        <Icon type="team" style={{fontSize: '22px', color: '#08c'}}/>
                        &nbsp;
                        <h1>Clients</h1>
                    </TitleWrapper>

                    <Table dataSource={clients} columns={columns} />
                </div>
            );
        } else {
            return <h1>Loading...</h1>
        }
    }
}

export default Clients;
