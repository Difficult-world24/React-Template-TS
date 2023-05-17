import { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ApplicationUrls } from "../Navigation/ApplicationURLS";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    // Simulating login request
    setTimeout(() => {
      console.log("Login successful", values);
      setLoading(false);
    }, 2000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Login failed:", errorInfo);
  };

  return (
    <div style={{ width: "300px", margin: "auto", marginTop: "200px" }}>
      <Form
        layout="vertical"
        name="loginForm"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Login
          </Button>
        </Form.Item>
        <Typography className="flex items-center   flex-col justify-center">
          <Typography>Don't have account?</Typography>
          <Button
            onClick={() => navigate(ApplicationUrls.register)}
            type="link"
          >
            Create Account now
          </Button>
        </Typography>
      </Form>
    </div>
  );
}
