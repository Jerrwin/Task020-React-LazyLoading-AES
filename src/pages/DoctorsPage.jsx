import React from "react";
import { useSelector } from "react-redux";
import DoctorOverview from "../components/DoctorOverview";

const DoctorsPage = () => {
  const { doctorsList } = useSelector((state) => state.doctor);

  return (
    <div>
      <DoctorOverview doctorsList={doctorsList} status="succeeded" />
    </div>
  );
};

export default DoctorsPage;
