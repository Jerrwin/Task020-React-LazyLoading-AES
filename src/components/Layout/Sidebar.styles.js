import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    z-index: 99;
  }
`;

export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 0.5rem;
    cursor: pointer;
    color: #1e293b;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    transition: all 0.2s;

    &:hover {
      background: #f1f5f9;
    }
  }
`;

export const SidebarContainer = styled.aside`
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  flex-shrink: 0;
  z-index: 100;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    transform: ${(props) =>
      props.$isOpen ? "translateX(0)" : "translateX(-100%)"};
    box-shadow: ${(props) =>
      props.$isOpen ? "4px 0 20px rgba(0,0,0,0.15)" : "none"};
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #4f46e5;
  margin-bottom: 2rem;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// ✅ Moved from inline style in Sidebar.jsx
export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #64748b;
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: #f1f5f9;
    color: #0f172a;
  }

  &.active {
    background-color: #e0e7ff;
    color: #4f46e5;
    font-weight: 600;
  }
`;