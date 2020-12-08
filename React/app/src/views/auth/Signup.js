import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const URL = 'https://cs5500-healthcare.herokuapp.com/v1/'

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function Signup({...props}) {

    const navigate = useNavigate();

    const onFinish = values => {
        console.log('Success:', values);
            axios.post(URL + 'user/signup', values).then(res => {
            console.log(res.data);
            navigate('/app/dashboard');
        })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    
    return (
        <div className='signup'>
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Full name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="re_password"
                    rules={[{ required: true, message: 'Please reenter your password again!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button  type="primary" htmlType="submit" >
                    Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Signup;