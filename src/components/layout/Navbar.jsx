import React, {Component} from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//CSS Starts
const MenuWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  width: 256px;
  z-index: 99999999;
`;
//CSS Ends

const SubMenu = Menu.SubMenu;

class Navbar extends Component {
    state = {
        collapsed: true,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <MenuWrapper>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>Client panel</span>
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Dashboard</span>
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </MenuWrapper>
        );
    }
}

export default Navbar;
