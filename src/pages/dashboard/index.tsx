import { Col, List, Row } from "antd";
import Typography from "antd/es/typography/Typography";

export default function Dashboard() {
  return (
    <>
      <Row className="mt-8 w-full">
        <Col span={24}>
          <Typography className="text-center text-xl">
            React ⚛️ + TypeScript + AntDesign 🎨 + TailwindCss Boilerplate
          </Typography>
          <Typography className="text-center mt-2">
            Usefull to get you started Quicker for your Side/FullTime Projects
            so you don't have to spend much Hours just to setup the Framework!
            Feel free to use it! 😉
          </Typography>
          <Typography className=" text-center mt-4 text-2xl">
            Happy Codding 💜
          </Typography>
        </Col>
      </Row>
    </>
  );
}
