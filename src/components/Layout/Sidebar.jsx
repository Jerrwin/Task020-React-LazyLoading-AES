import React, { memo } from "react";
import { LayoutDashboard, Calendar, Users, Activity } from "lucide-react";
import {
  SidebarContainer,
  Logo,
  LogoIcon,
  NavList,
  NavItem,
  Overlay,
} from "./Sidebar.styles";

const prefetchAppointments = () => import("../../pages/AppointmentsPage");
const prefetchDoctors = () => import("../../pages/DoctorsPage");

const Sidebar = memo(({ isOpen, onClose }) => {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <SidebarContainer $isOpen={isOpen}>
        <Logo>
          <LogoIcon>
            <Activity size={20} />
          </LogoIcon>
          MedPortal
        </Logo>
        <NavList>
          <NavItem to="/dashboard" onClick={onClose}>
            <LayoutDashboard size={20} /> Dashboard
          </NavItem>
          <NavItem
            to="/appointments"
            onClick={onClose}
            onMouseEnter={prefetchAppointments}
          >
            <Calendar size={20} /> Appointments
          </NavItem>
          <NavItem
            to="/doctors"
            onClick={onClose}
            onMouseEnter={prefetchDoctors}
          >
            <Users size={20} /> Doctors
          </NavItem>
        </NavList>
      </SidebarContainer>
    </>
  );
});

export default Sidebar;