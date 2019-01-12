import React, {Component} from 'react';
import {Table, Icon, Button} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

//CSS Starts
const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TotalOwed = styled.div`
  font-weight: bold;
`;
const AddNewButton = styled(Button)`
  margin-left: 20px;
`;
//CSS Ends

class Clients extends Component {

    state = {
        totalOwed: null
    };

    static getDerivedStateFromProps(props, state) {

        const {clients} = props;

        if (clients) {
            // Add balances
            const total = clients.reduce((total, client) => {
                return total + parseFloat(client.balance.toString());
            }, 0);

            return {totalOwed: total}
        }
        return null;
    }

    render() {
        const { clients } = this.props;
        const { totalOwed } = this.state;

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
            title: 'Balance, $',
            dataIndex: 'balance',
            key: 'balance'
        },
            {
                title: 'More',
                key: 'details',
                render: (clients) => <Link to={'/client/' + clients.id}>Details</Link>
            }
        ];

        if (clients) {
            return (
                <div>
                    <HeaderWrapper>
                    <TitleWrapper>
                        <Icon type="team" style={{fontSize: '22px', color: '#08c'}}/>
                        &nbsp;
                        <h1>Clients</h1>
                        <AddNewButton icon="plus" href="/client/add">Add New</AddNewButton>
                    </TitleWrapper>
                        <TotalOwed>
                            Total Owed{' '}${parseFloat(totalOwed).toFixed(2)}
                        </TotalOwed>
                    </HeaderWrapper>

                    <Table dataSource={clients} columns={columns}/>
                </div>
            );
        } else {
            return <Loader
                type="Rings"
                color="#00BFFF"
                height="100"
                width="100"
            />
        }
    }
}

Clients.propTypes = {
    firestore: PropTypes.object.isRequired,
    clients: PropTypes.array
};

export default compose(
    firestoreConnect([{collection: 'clients'}]),
    connect((state, props) => ({
        clients: state.firestore.ordered.clients
    })))(Clients);