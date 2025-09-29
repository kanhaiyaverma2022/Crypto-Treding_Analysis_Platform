import React,{useEffect, useState} from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { crptoIcons } from "./images/icons";
import { use } from "react";

const menuItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    icon: <FundOutlined />,
    label: <Link to="/cryptocurrencies">Crypto Currency</Link>,
  },
  {
    key: "3",
    icon: <MoneyCollectOutlined />,
    label: <Link to="/exchanges">Exchanges</Link>,
  },
  {
    key: "4",
    icon: <BulbOutlined />,
    label: <Link to="/news">News</Link>,
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = ()=> setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    window.removeEventListener("resize", handleResize);
  },[])

  useEffect(() => {
    if(screenSize < 768)
    {
      setScreenSize(false);
    }else
    {
      setScreenSize(true);
    }
  },[screenSize])


  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={crptoIcons} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptography</Link>
        </Typography.Title>
        <Button className="menu-control-container" onClick={()=>setActiveMenu(!activeMenu)}>
          <MenuOutlined/>
        </Button>
      </div>
      {/* Updated Menu using `items` prop */}
      {activeMenu &&
   ( <Menu theme="dark" items={menuItems} /> )}
      
    </div>
  );
};

export default Navbar;

