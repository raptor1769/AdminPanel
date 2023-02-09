import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItems active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItems">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItems">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItems">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItems">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItems">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItems">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItems">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItems">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItems">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
