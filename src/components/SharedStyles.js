import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageContainer = styled.div`
  background-color: #f8fafc;
  min-height: 100vh;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
  color: #1e293b;
`;

export const MainLayout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const ContentArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #f1f5f9;
`;

export const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  color: #0f172a;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.025em;
`;

export const StatBox = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  border-top: 4px solid ${(props) => props.color || "#6366f1"};

  .stat-title {
    color: #64748b;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .stat-value {
    color: #0f172a;
    font-size: 2.25rem;
    font-weight: 800;
    margin-top: 0.5rem;
  }
`;

export const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.2);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(99, 102, 241, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;
