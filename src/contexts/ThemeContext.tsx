import { ConfigProvider } from "antd";
import React from "react";

import { ThemeConfig } from "antd/es/config-provider/context";

const theme: ThemeConfig = {
  token: {},
};

export default function ThemeContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}
