import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Select,
  DatePicker,
  TimePicker,
  Button,
  message,
} from "antd";
import dayjs from "dayjs";
import { addAppointment } from "../features/appointmentsSlice";
import { StyledCard, SectionTitle } from "./SharedStyles";

const AddAppointmentForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  //Grab the list of doctors from the Redux Vault
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
        <Form.Item
          label="Patient Name"
          name="patientName"
          rules={[{ required: true, message: "Please enter patient name!" }]}
        >
          <Input placeholder="e.g. Jane Doe" />
        </Form.Item>

        <Form.Item
          label="Select Doctor"
          name="doctorName"
          rules={[{ required: true, message: "Please select a doctor!" }]}
        >
          {/* DYNAMIC DROPDOWN: Map over the Redux data instead of hardcoding */}
          <Select placeholder="Choose a doctor">
            {doctorsList.map((doc) => (
              <Select.Option key={doc.id} value={doc.name}>
                {doc.name} ({doc.specialty})
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Appointment Date"
          name="date"
          rules={[{ required: true, message: "Please select a date!" }]}
        >
          <DatePicker
            style={{ width: "100%" }}
            disabledDate={(current) => {
              // Disable any date that is before today!
              return current && current < dayjs().startOf("day");
            }}
          />
        </Form.Item>

        <Form.Item
          label="Appointment Time"
          name="time"
          rules={[{ required: true, message: "Please select a time!" }]}
        >
          <TimePicker style={{ width: "100%" }} use12Hours format="h:mm a" />
        </Form.Item>

        <Form.Item style={{ marginTop: "2rem", marginBottom: 0 }}>
          <Button type="primary" htmlType="submit" block size="large">
            Book Appointment
          </Button>
        </Form.Item>
      </Form>
    </StyledCard>
  );
};

export default AddAppointmentForm;
