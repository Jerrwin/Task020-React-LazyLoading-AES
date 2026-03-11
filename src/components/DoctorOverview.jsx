import React, { memo } from "react";
import { SectionTitle, FlexBetween } from "./SharedStyles";
import { Spin, Alert } from "antd";
import { DoctorGrid, DoctorCard } from "./DoctorOverview.styles";

const loadingStyle = { textAlign: "center", padding: "3rem" };
const loadingTextStyle = { marginTop: "1rem", color: "#64748b" };

// memo — doctorsList is static, never changes
const DoctorOverview = memo(({ doctorsList = [], status = "idle", error = null }) => {
  return (
    <div>
      <FlexBetween>
        <SectionTitle>Our Specialists</SectionTitle>
      </FlexBetween>

      {status === "loading" && (
        <div style={loadingStyle}>
          <Spin size="large" />
          <p style={loadingTextStyle}>Loading doctors...</p>
        </div>
      )}

      {status === "failed" && (
        <Alert
          message="Error fetching doctors"
          description={error}
          type="error"
          showIcon
        />
      )}

      {status === "succeeded" && (
        <DoctorGrid>
          {doctorsList.map((doc) => (
            <DoctorCard key={doc.id}>
              <img
                src={doc.image}
                alt={doc.name}
                className="avatar"
                width={80}
                height={80}
                loading="lazy"
              />
              <div className="name">{doc.name}</div>
              <div className="specialty">{doc.specialty}</div>
            </DoctorCard>
          ))}
        </DoctorGrid>
      )}
    </div>
  );
});

export default DoctorOverview;