import React from "react";
import {
  SectionTitle,
  FlexBetween,
  StatBox,
  StyledCard,
} from "../components/SharedStyles";
import {
  Calendar as CalendarIcon,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tag } from "antd";
import { useMemo } from "react";

const statusColor = (status) => {
  if (status === "Completed") return "success";
  if (status === "Pending") return "warning";
  return "processing";
};

const Dashboard = () => {
  const appointments = useSelector((state) => state.appointments.list);
  const navigate = useNavigate();

  const { totalApps, completed, pending, upcomingAppointments } = useMemo(
    () => ({
      totalApps: appointments.length,
      completed: appointments.filter((a) => a.status === "Completed").length,
      pending: appointments.filter((a) => a.status === "Pending").length,
      upcomingAppointments: appointments
        .filter((a) => a.status === "Pending" || a.status === "Confirmed")
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3),
    }),
    [appointments],
  );

  return (
    <div>
      <FlexBetween>
        <SectionTitle>Dashboard Overview</SectionTitle>
      </FlexBetween>

      {/* Stat Boxes */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <StatBox color="#6366f1">
          <div className="stat-title">
            <CalendarIcon size={16} style={{ marginRight: 8 }} /> Total
            Appointments
          </div>
          <div className="stat-value">{totalApps}</div>
        </StatBox>
        <StatBox color="#f59e0b">
          <div className="stat-title">
            <Clock size={16} style={{ marginRight: 8 }} /> Pending
          </div>
          <div className="stat-value">{pending}</div>
        </StatBox>
        <StatBox color="#10b981">
          <div className="stat-title">
            <CheckCircle size={16} style={{ marginRight: 8 }} /> Completed
          </div>
          <div className="stat-value">{completed}</div>
        </StatBox>
      </div>

      {/* Upcoming Appointments Card */}
      <StyledCard>
        <FlexBetween style={{ marginBottom: "1rem" }}>
          <SectionTitle style={{ fontSize: "1.1rem", margin: 0 }}>
            Upcoming Appointments
          </SectionTitle>
          {/* View All button navigates to AppointmentsPage */}
          <button
            onClick={() => navigate("/appointments")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "none",
              border: "none",
              color: "#6366f1",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            View All <ArrowRight size={16} />
          </button>
        </FlexBetween>

        {upcomingAppointments.length === 0 ? (
          <p
            style={{ color: "#94a3b8", textAlign: "center", padding: "2rem 0" }}
          >
            No upcoming appointments.
          </p>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {upcomingAppointments.map((app) => (
              <div
                key={app.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  background: "#f8fafc",
                }}
              >
                <div>
                  <p style={{ margin: 0, fontWeight: 600, color: "#1e293b" }}>
                    {app.patientName}
                  </p>
                  <p
                    style={{ margin: 0, fontSize: "0.85rem", color: "#64748b" }}
                  >
                    {app.doctorName} — {app.date} at {app.time}
                  </p>
                </div>
                <Tag color={statusColor(app.status)}>{app.status}</Tag>
              </div>
            ))}
          </div>
        )}
      </StyledCard>
    </div>
  );
};

export default Dashboard;
