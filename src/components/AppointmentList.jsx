import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, Select, Tag, Popconfirm, Empty } from "antd";
import { deleteAppointment, updateStatus } from "../features/appointmentsSlice";
import { StyledCard, SectionTitle, FlexBetween } from "./SharedStyles";
import { DeleteOutlined } from "@ant-design/icons";

const AppointmentList = () => {
  // 1. READ: Look inside the Redux Vault and grab the list of appointments
  const appointments = useSelector((state) => state.appointments.list);

  // 2. DISPATCH: Get the "Messenger" ready to send updates back to the Vault
  const dispatch = useDispatch();

  // --- Ant Design Table Columns ---
  const columns = [
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
      // Combine date and time into one clean column
      render: (_, record) => `${record.date} at ${record.time}`,
    },
    {
      title: "Status",
      key: "status",
      // Render a dropdown menu directly inside the table!
      render: (_, record) => (
        <Select
          value={record.status}
          style={{ width: 130 }}
          // Add a dynamic class or style based on the value!
          className={
            record.status === "Completed"
              ? "text-success"
              : record.status === "Pending"
                ? "text-warning"
                : "text-primary"
          }
          onChange={(newStatus) =>
            // UPDATE: Dispatch the new status to Redux!
            dispatch(updateStatus({ id: record.id, newStatus }))
          }
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
          onConfirm={() => dispatch(deleteAppointment(record.id))}
          okText="Yes"
          cancelText="No"
        >
          <Button danger type="text" icon={<DeleteOutlined />}></Button>
        </Popconfirm>
      ),
    },
  ];

  // Ant Design Tables require a unique "key" for every row to render smoothly
  const tableData = appointments.map((app) => ({
    ...app,
    key: app.id,
  }));

  return (
    <StyledCard>
      <FlexBetween>
        <SectionTitle>Upcoming Appointments</SectionTitle>
        <Tag color="blue">{appointments.length} Total</Tag>
      </FlexBetween>

      {/* conditionally render Empty State OR the Table */}
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
          pagination={{
            pageSize: 5,
            hideOnSinglePage: false, 
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} appointments`,
          }}
        />
      )}
    </StyledCard>
  );
};

export default AppointmentList;
