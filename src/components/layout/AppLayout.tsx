import { Button, Col, Layout, Row } from "antd";
import Navigation from "../Navigation";
import { Content, Header } from "antd/es/layout/layout";
import Typography from "antd/es/typography/Typography";
import { useNavigate } from "react-router-dom";
import { ApplicationUrls } from "../Navigation/ApplicationURLS";
import { useAuthContext } from "../../contexts/AuthContext";

export default function AppLayout() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <>
      <Layout className="min-h-screen">
        <Header className="flex justify-between align-middle text-white">
          <Row className="w-full" justify={"space-between"} align={"middle"}>
            <Typography className="text-white">Dashboard 👻</Typography>
            <Col>
              {!user ? (
                <Button onClick={() => navigate(ApplicationUrls.login)}>
                  Login
                </Button>
              ) : (
                <Typography className="text-white">{user.name}</Typography>
              )}
            </Col>
          </Row>
        </Header>
        <Content className="h-full">
          <Navigation />
        </Content>
      </Layout>
    </>
  );
}
