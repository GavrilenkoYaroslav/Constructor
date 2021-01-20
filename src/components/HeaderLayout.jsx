import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import styles from '../assets/css/HeaderLayout.module.css';
import logo from '../assets/images/decenter-logo.svg';
import user from '../assets/images/user.jpg';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export const HeaderLayout = ({children}) => {
    const history = useHistory();

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <NavLink to='/start'>Settings</NavLink>
            </Menu.Item>
            <Menu.Item key="1">
                <NavLink to='/'>Logout</NavLink>
            </Menu.Item>
        </Menu>
    );


    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <NavLink to='/'>
                        <img src={logo} alt={''}/>
                    </NavLink>
                </div>
                <div className={styles.menuContainer}>
                    <ul>
                        <li>Помощь</li>
                        <li>Новости</li>
                        <li onClick={() => history.push('/posts')}>Посты</li>
                    </ul>
                </div>
                <div className={styles.currentUser}>
                    <img src={user} alt={''}/>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a onClick={e => e.preventDefault()}>
                            Yaroslav <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div>
                { children }
            </div>
        </>
    );
};