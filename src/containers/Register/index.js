import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterUi from "../../layout/Register";
import useForm from "./useForm";

const RegisterContainer = () => {
  useEffect(() => {}, []);

  return <RegisterUi form={useForm()} />;
};

export default RegisterContainer;
