import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginUi from "../../layout/Login";
import useForm from "./useForm";

const LoginContainer = () => {
  return <LoginUi form={useForm()} />;
};

export default LoginContainer;
