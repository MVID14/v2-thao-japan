import { Breadcrumb, Button, Layout, Menu, Space } from "antd";
import React from "react";
import { GiHamburgerMenu } from "react-icons/all";
import Search from "antd/es/input/Search";
import { menuTN, menuKNM } from "@mockdata/menu-lo-trinh";
const { Header, Content, Sider } = Layout;
import { Link } from "react-router-dom";

const items1 = [
  { label: "TRANG CHỦ", key: "item-1" }, // remember to pass the key prop
  { label: "GIỚI THIỆU", key: "item-2" },
  { label: "LIÊN HỆ", key: "item-3" },
];
interface IMasterLayoutProps {
  children: React.ReactNode;
}

const MasterLayout: React.FC<IMasterLayoutProps> = ({ children }) => (
  <Layout className="mx-5">
    <Header className="header justify-between z-10 bg-[#DF7676] ">
      <Space>
        <Link to="/">
          <img
            src={"./src/assets/images/logo.png"}
            className="logo w-[86px] h-[23px] "
          />
        </Link>
        <Button
          type="default"
          className={
            "bg-[#CB2727] text-white flex items-center space-x-2 rounded-md"
          }
        >
          Menu <GiHamburgerMenu />
        </Button>
      </Space>
      <div className="search">
        <Search placeholder="Enter to search" style={{ width: 200 }} />
      </div>

      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
    <Layout>
      <Sider width={336} className="site-layout-background px-2 custom-sider">
        <h2 className={"text-[21px] font-bold text-[#505D68]"}>Tiếng Nhật</h2>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={menuTN}
        />
        <h2 className={"text-[21px] font-bold text-[#505D68]"}>Kỹ năng mềm</h2>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={menuKNM}
        />
      </Sider>
      <Layout style={{ padding: "0 0 24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default MasterLayout;
