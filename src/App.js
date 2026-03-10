import React from "react";
import { ConfigProvider } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import DoctorOverview from "./components/DoctorOverview";
import AddAppointmentForm from "./components/AddAppointmentForm";
import AppointmentList from "./components/AppointmentList";

function App() {
  return (
    // 1. Wrap the app to instantly restyle ALL Ant Design components
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6366f1",
          borderRadius: 8, 
          fontFamily: "'Inter', sans-serif",
          colorBgContainer: "#ffffff",
        },
      }}
    >
      <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
        <Navbar />
        <div className="container py-3 py-md-5 px-2 px-md-3">
          <div className="row mb-4">
            <div className="col-12">
              <DoctorOverview />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <AddAppointmentForm />
            </div>
            <div className="col-lg-8">
              <AppointmentList />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
