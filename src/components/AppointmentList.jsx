import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Select, Tag, Popconfirm, Empty } from "antd";
import { deleteAppointment, updateStatus } from "../features/appointmentsSlice";
import { StyledCard, SectionTitle, FlexBetween } from "./SharedStyles";
import { DeleteOutlined } from "@ant-design/icons";

const tableConfig = {
  pageSize: 5,
  hideOnSinglePage: false,
  showTotal: (total, range) =>
    `${range[0]}-${range[1]} of ${total} appointments`,
};

const AppointmentList = () => {
  const appointments = useSelector((state) => state.appointments.list);
  const dispatch = useDispatch();

  // Stable dispatch handlers — don't recreate on every render
  const handleStatusChange = useCallback(
    (id, newStatus) => dispatch(updateStatus({ id, newStatus })),
    [dispatch],
  );

  const handleDelete = useCallback(
    (id) => dispatch(deleteAppointment(id)),
    [dispatch],
  );

  // columns only rebuilds when handlers change (which is never)
  const columns = useMemo(
    () => [
      {
        title: "Patient Name",
        dataIndex: "patientName",
        key: "patientName",
      },
      {
        title: "Doctor",
        dataIndex: "doctorName",
        key: "doctorName",
      },
      {
        title: "Date & Time",
        key: "datetime",
        render: (_, record) => `${record.date} at ${record.time}`,
      },
      {
        title: "Status",
        key: "status",
        render: (_, record) => (
          <Select
            value={record.status}
            style={{ width: 130 }}
            onChange={(newStatus) => handleStatusChange(record.id, newStatus)}
            options={[
              { value: "Pending", label: "Pending" },
              { value: "Confirmed", label: "Confirmed" },
              { value: "Completed", label: "Completed" },
            ]}
          />
        ),
      },
      {
        title: "Actions",
        key: "actions",
        render: (_, record) => (
          <Popconfirm
            title="Delete appointment?"
            description="Are you sure you want to cancel this?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="text" icon={<DeleteOutlined />} />
          </Popconfirm>
        ),
      },
    ],
    [handleStatusChange, handleDelete],
  );

  // tableData only rebuilds when appointments changes
  const tableData = useMemo(
    () => appointments.map((app) => ({ ...app, key: app.id })),
    [appointments],
  );

  return (
    <StyledCard>
      <FlexBetween>
        <SectionTitle>Upcoming Appointments</SectionTitle>
        <Tag color="blue">{appointments.length} Total</Tag>
      </FlexBetween>

      {appointments.length === 0 ? (
        <div style={{ padding: "3rem 0" }}>
          <Empty
            description="No appointments scheduled yet. Book one on the left!"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </div>
      ) : (
        <Table
          columns={columns}
          dataSource={tableData}
          scroll={{ x: "max-content" }}
          pagination={tableConfig}
        />
      )}
    </StyledCard>
  );
};

export default AppointmentList;
