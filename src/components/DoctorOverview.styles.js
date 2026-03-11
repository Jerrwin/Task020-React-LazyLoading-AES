import styled from "styled-components";
import { StyledCard } from "./SharedStyles";

export const DoctorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const DoctorCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  border-top: 4px solid #a855f7;

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    background-color: #f1f5f9;
    border: 3px solid #e0e7ff;
  }

  .name {
    font-size: 1.125rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 0.25rem;
  }

  .specialty {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
  }
`;
