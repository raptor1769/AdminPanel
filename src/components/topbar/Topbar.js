import React from "react";
import "./Topbar.css";

import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" className="link">
          <div className="topLeft">
            <span className="logo">Business Admin</span>
          </div>
        </Link>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile-pic"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
