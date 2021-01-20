import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Preloader = () => {
    return (
        <div style={{
            position: 'absolute',
            display: 'inline-block',
            textAlign: 'center',
            top: 'calc(50% - 20px)',
            left: 'calc(50% - 20px)'}}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
        </div>
    );
};