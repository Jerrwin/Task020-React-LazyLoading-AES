// src/components/SharedStyles.js
import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #f4f7fe;
  min-height: 100vh;
  font-family: 'Inter', -apple-system, sans-serif;
`;

export const StyledCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;
  /* A very soft, diffuse shadow that looks expensive */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); 
  /* A subtle top border to ground the card visually */
  border-top: 4px solid #6366f1; 
  /* Smooth animation for the hover effect */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-5px); /* Makes the card "float" when hovered */
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.08);
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  color: #2c3e50;
  font-weight: 700;
  margin: 0;
`;
