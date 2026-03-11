import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Button,
  Row,
  Col,
  App
} from "antd";
import dayjs from "dayjs";
import { addAppointment } from "../features/appointmentsSlice";
import { StyledCard, SectionTitle } from "./SharedStyles";

const AddAppointmentForm = () => {
  const { message } = App.useApp();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  // Grab the list of doctors from the Redux store
  const doctorsList = useSelector((state) => state.doctor.doctorsList);

  const onFinish = (values) => {
    const newAppointment = {
      id: Date.now(),
      patientName: values.patientName,
      doctorName: values.doctorName,
      date: values.date.format("YYYY-MM-DD"),
      time: values.time.format("hh:mm A"),
      status: "Pending",
    };

    dispatch(addAppointment(newAppointment));
    message.success("Appointment booked successfully!");
    form.resetFields();
  };

  return (
    <StyledCard>
      <SectionTitle style={{ marginBottom: "1.5rem" }}>
        Book Appointment
      </SectionTitle>

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={24}>
          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label="Patient Name"
              name="patientName"
              rules={[
                { required: true, message: "Please enter patient name!" },
              ]}
            >
              <Input placeholder="e.g. Jane Doe" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label="Select Doctor"
              name="doctorName"
              rules={[{ required: true, message: "Please select a doctor!" }]}
            >
              <Select placeholder="Choose a doctor">
                {doctorsList.map((doc) => (
                  <Select.Option key={doc.id} value={doc.name}>
                    {doc.name} ({doc.specialty})
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label="Appointment Date"
              name="date"
              rules={[{ required: true, message: "Please select a date!" }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                disabledDate={(current) =>
                  current && current < dayjs().startOf("day")
                }
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12} lg={6}>
            <Form.Item
              label="Appointment Time"
              name="time"
              rules={[{ required: true, message: "Please select a time!" }]}
            >
              <TimePicker
                style={{ width: "100%" }}
                use12Hours
                format="h:mm a"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          style={{ marginTop: "1rem", marginBottom: 0, textAlign: "right" }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              padding: "0 2.5rem",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
              border: "none",
              boxShadow: "0 4px 6px rgba(99, 102, 241, 0.2)",
            }}
          >
            Book Appointment
          </Button>
        </Form.Item>
      </Form>
    </StyledCard>
  );
};

export default AddAppointmentForm;
