import React, { useState, lazy, Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ConfigProvider, App as AntApp, Spin } from "antd";
import { Menu, X } from "lucide-react";

// Layout Imports
import Sidebar from "./components/Layout/Sidebar";
import { MainLayout, ContentArea } from "./components/SharedStyles";
import { HamburgerButton } from "./components/Layout/Sidebar.styles";
import Dashboard from "./pages/Dashboard";

// Lazy-loaded pages
const AppointmentsPage = lazy(() => import("./pages/AppointmentsPage"));
const DoctorsPage = lazy(() => import("./pages/DoctorsPage"));

const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "60vh",
    }}
  >
    <Spin size="large" />
  </div>
);

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <MainLayout>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <ContentArea>
        <div
          style={{
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <HamburgerButton onClick={() => setSidebarOpen((o) => !o)}>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </HamburgerButton>
        </div>
        <div style={{ padding: "0 2rem 2rem", flex: 1, overflowY: "auto" }}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </ContentArea>
    </MainLayout>
  );
};

function App() {
  return (
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
      <AntApp>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="appointments" element={<AppointmentsPage />} />
            <Route path="doctors" element={<DoctorsPage />} />
          </Route>
        </Routes>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
