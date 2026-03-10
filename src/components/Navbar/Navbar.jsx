import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FlexBetween } from "../SharedStyles"; 
import { NavWrapper, LogoTitle, UserProfile } from "./Navbar.Styles"; 

const Navbar = () => {
  return (
    <NavWrapper>
      <FlexBetween style={{ marginBottom: 0 }}>
        <LogoTitle>MediCare</LogoTitle>
        <UserProfile>
          <span>Receptionist Desk</span>
          <Avatar size="large" icon={<UserOutlined />} style={{ backgroundColor: "#87d068" }} />
        </UserProfile>
      </FlexBetween>
    </NavWrapper>
  );
};

export default Navbar;