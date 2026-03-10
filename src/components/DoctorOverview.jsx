import React from "react";
import { useSelector } from "react-redux";
import { StyledCard, SectionTitle } from "./SharedStyles";
import { MedicineBoxTwoTone } from "@ant-design/icons";

const DoctorOverview = () => {
  const appointments = useSelector((state) => state.appointments.list);

  const upcomingAppointments = appointments.filter(
    (app) => app.status !== "Completed",
  );

  const doctorCounts = upcomingAppointments.reduce((acc, appointment) => {
    const docName = appointment.doctorName;
    acc[docName] = (acc[docName] || 0) + 1;
    return acc;
  }, {});

  const activeDoctors = Object.keys(doctorCounts);

  return (
    <StyledCard style={{ background: "#f0f2f5", border: "none" }}>
      <SectionTitle style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
        Doctor's Appointment Overview
      </SectionTitle>

      {activeDoctors.length === 0 ? (
        <p className="text-muted">No upcoming appointments for any doctors.</p>
      ) : (
        // Bootstrap Row with a gap of 3 (g-3)
        <div className="row g-3">
          {activeDoctors.map((doctor) => (
            // Bootstrap Responsive Columns
            <div className="col-12 col-sm-6 col-md-4" key={doctor}>
              {/* Bootstrap Card */}
              <div
                className="card border-0 shadow-sm"
                style={{ borderRadius: "8px" }}
              >
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted d-flex align-items-center gap-2">
                    <MedicineBoxTwoTone
                      twoToneColor="#6366f1"
                      style={{ fontSize: "1.2rem" }}
                    />
                    {doctor}'s Upcoming
                  </h6>

                  <h3
                    className="card-title mb-0"
                    style={{ color: "#0056b3", fontWeight: "bold" }}
                  >
                    {doctorCounts[doctor]}{" "}
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "#6c757d",
                        fontWeight: "normal",
                      }}
                    >
                      Appointments
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </StyledCard>
  );
};

export default DoctorOverview;
