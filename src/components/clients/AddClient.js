import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {Form, Input, Select, Button} from 'antd';

class AddClient extends Component {

    handleSubmit = e => {
        e.preventDefault();

        /*const {firestore, history} = this.props;

        // If no balance, make 0
        if (newClient.balance === '') {
            newClient.balance = 0;
        }

        firestore
            .add({collection: 'clients'}, newClient)
            .then(() => history.push('/'));*/

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

    };

    render() {

        const {getFieldDecorator} = this.props.form;
        const { Option } = Select;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 70}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <div>
                <Link to="/">Back to Dashboard</Link>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item
                        {...formItemLayout}
                        label="First Name"
                    >
                        {getFieldDecorator('firstName', {
                            rules: [{
                                type: 'firstName', message: 'You must enter your first mame',
                            }, {
                                required: true, message: 'Enter first name',
                            }],
                        })(
                            <Input/>
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="Last Name"
                    >
                        {getFieldDecorator('lastName', {
                            rules: [{
                                type: 'lastName', message: 'You must enter your last mame',
                            }, {
                                required: true, message: 'Enter last name',
                            }],
                        })(
                            <Input/>
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="E-mail"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input/>
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="Phone Number"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: 'Enter your phone number!'}],
                        })(
                            <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="Balance"
                    >
                        {getFieldDecorator('balance', {
                            rules: [{
                                type: 'balance', message: 'Enter your balance',
                            }, {
                                required: true, message: 'Enter your balance',
                            }],
                        })(
                            <Input/>
                        )}
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>

                </Form>
            </div>
        );
    }
}

const WrappedAddClient = Form.create({ name: 'register' })(AddClient);

WrappedAddClient.propTypes = {
    firestore: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
};

export default compose(
    firestoreConnect(),
    connect((state, props) => ({
        settings: state.settings
    }))
)(WrappedAddClient);