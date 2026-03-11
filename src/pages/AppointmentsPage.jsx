import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Tabs, Calendar, Badge } from "antd";
import dayjs from "dayjs";
import AppointmentList from "../components/AppointmentList";
import AddAppointmentForm from "../components/AddAppointmentForm";
import { SectionTitle, StyledCard } from "../components/SharedStyles";
import {
  PageHeader,
  AppointmentsGrid,
  FormSection,
  ListSection,
  CalendarWrapper,
  BadgeItem,
} from "./AppointmentsPage.styles";

const AppointmentsPage = () => {
  const appointments = useSelector((state) => state.appointments.list);

  const { dateMap, monthMap } = useMemo(() => {
    const dateMap = {}; // { "2025-03-11": [appointment, ...] }
    const monthMap = {}; // { "2025-03": count }

    appointments.forEach((app) => {
      const dateKey = dayjs(app.date).format("YYYY-MM-DD");
      const monthKey = dayjs(app.date).format("YYYY-MM");

      if (!dateMap[dateKey]) dateMap[dateKey] = [];
      dateMap[dateKey].push(app);

      monthMap[monthKey] = (monthMap[monthKey] || 0) + 1;
    });

    return { dateMap, monthMap };
  }, [appointments]);

  const dateCellRender = useCallback(
    (value) => {
      const key = value.format("YYYY-MM-DD");
      const listData = dateMap[key] || [];

      if (listData.length === 0) return null;

      return (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {listData.map((item) => (
            <BadgeItem key={item.id} $status={item.status}>
              <Badge
                status={
                  item.status === "Completed"
                    ? "success"
                    : item.status === "Pending"
                      ? "warning"
                      : "processing"
                }
                text={`${item.time} - ${item.doctorName}`}
              />
            </BadgeItem>
          ))}
        </ul>
      );
    },
    [dateMap],
  );

  const monthCellRender = useCallback(
    (value) => {
      const key = value.format("YYYY-MM");
      const num = monthMap[key];
      return num ? (
        <div
          style={{ textAlign: "center", fontSize: "14px", fontWeight: "bold" }}
        >
          {num} Appointments
        </div>
      ) : null;
    },
    [monthMap],
  );

  const cellRender = useCallback(
    (current, info) => {
      if (info.type === "date") return dateCellRender(current);
      if (info.type === "month") return monthCellRender(current);
      return info.originNode;
    },
    [dateCellRender, monthCellRender],
  );

  // items only rebuilds when cellRender changes
  const items = useMemo(
    () => [
      {
        key: "1",
        label: "List View",
        children: <AppointmentList />,
      },
      {
        key: "2",
        label: "Calendar View",
        destroyOnHide: true,
        children: (
          <StyledCard>
            <SectionTitle style={{ marginBottom: "1.5rem" }}>
              Appointment Calendar
            </SectionTitle>
            <CalendarWrapper>
              <Calendar cellRender={cellRender} />
            </CalendarWrapper>
          </StyledCard>
        ),
      },
    ],
    [cellRender],
  );

  return (
    <div>
      <PageHeader>
        <h1>Appointments Overview</h1>
        <p>Manage your schedules, bookings, and patient interactions.</p>
      </PageHeader>

      <AppointmentsGrid>
        <FormSection>
          <AddAppointmentForm />
        </FormSection>
        <ListSection>
          <Tabs defaultActiveKey="1" items={items} animated />
        </ListSection>
      </AppointmentsGrid>
    </div>
  );
};

export default AppointmentsPage;
