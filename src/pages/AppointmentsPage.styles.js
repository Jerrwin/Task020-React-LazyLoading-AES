import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageHeader = styled.div`
  margin-bottom: 2rem;
  animation: ${slideUp} 0.5s ease-out forwards;

  h1 {
    font-size: 2.25rem;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.025em;
  }

  p {
    color: #64748b;
    margin-top: 0.5rem;
    font-size: 1.125rem;
  }
`;

export const AppointmentsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormSection = styled.div`
  animation: ${slideUp} 0.5s ease-out 0.1s forwards;
  opacity: 0;
`;

export const ListSection = styled.div`
  animation: ${slideUp} 0.5s ease-out 0.2s forwards;
  opacity: 0;

  // Customizing Ant Design Tabs to look ultra-premium
  .ant-tabs-nav {
    margin-bottom: 1.5rem;
    &::before {
      border-bottom: 2px solid #f1f5f9;
    }
  }

  .ant-tabs-tab {
    padding: 12px 16px;
    font-size: 1.05rem;
    color: #64748b;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: #6366f1;
    }

    &.ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: #4f46e5;
        font-weight: 700;
      }
    }
  }

  .ant-tabs-ink-bar {
    background: linear-gradient(90deg, #6366f1, #a855f7);
    height: 3px;
    border-radius: 3px 3px 0 0;
  }
`;

export const CalendarWrapper = styled.div`
  overflow-x: auto;
  min-width: 0;

  .ant-picker-calendar {
    background: transparent;
    min-width: 800px;
  }

  .ant-picker-calendar-date {
    border-radius: 12px;
    transition: all 0.2s ease;
    margin: 0 4px;

    &:hover {
      background: rgba(99, 102, 241, 0.05);
    }
  }

  .ant-picker-calendar-date-value {
    font-weight: 600;
  }

  .ant-picker-calendar-date-today {
    border-color: #6366f1 !important;
  }
`;

export const BadgeItem = styled.li`
  font-size: 11px;
  list-style: none;
  margin-bottom: 4px;
  padding: 2px 6px;
  border-radius: 4px;
  background: ${(props) =>
    props.$status === "Completed"
      ? "rgba(16, 185, 129, 0.1)"
      : props.$status === "Pending"
        ? "rgba(245, 158, 11, 0.1)"
        : "rgba(56, 189, 248, 0.1)"};

  .ant-badge-status-text {
    font-size: 11px;
    color: ${(props) =>
      props.$status === "Completed"
        ? "#059669"
        : props.$status === "Pending"
          ? "#d97706"
          : "#0369a1"};
    font-weight: 500;
  }
`;
