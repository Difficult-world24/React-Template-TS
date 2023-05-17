import { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ApplicationUrls } from "../../components/Navigation/ApplicationURLS";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setLoading(true);
    // Simulating registration request
    setTimeout(() => {
      console.log("Registration successful", values);
      setLoading(false);
    }, 2000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Registration failed:", errorInfo);
  };

  return (
    <div style={{ width: "300px", margin: "auto", marginTop: "100px" }}>
      <Form
        name="registerForm"
        onFinish={onFinish}
        layout="vertical"
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter a password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Register
          </Button>
        </Form.Item>
        <Typography className="flex items-center   flex-col justify-center">
          <Typography>Already got Account?</Typography>
          <Button onClick={() => navigate(ApplicationUrls.login)} type="link">
            Login Instead
          </Button>
        </Typography>
      </Form>
    </div>
  );
}
