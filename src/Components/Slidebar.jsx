import React from "react";
import styled from "styled-components";
import { FaHome, FaTachometerAlt, FaHistory, FaSave, FaBell } from "react-icons/fa";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ccc;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;

  & > svg {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <ProfileImage src="/images/Person1.webp" alt="Profile" />
      <div>Username</div>
      <div>email@gmail.com</div>
      <SidebarMenu>
        <MenuItem>
          <FaHome /> Home
        </MenuItem>
        <MenuItem>
          <FaTachometerAlt /> Dashboard
        </MenuItem>
        <MenuItem>
          <FaHistory /> History
        </MenuItem>
        <MenuItem>
          <FaSave /> Saved
        </MenuItem>
        <MenuItem>
          <FaBell /> Notifications
        </MenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
}

export default Sidebar;
