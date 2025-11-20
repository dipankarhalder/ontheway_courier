import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { paths } from "../../../Constant";
import { Button } from "../../../Shared/Button";
import { Logo } from "../../../Components/Common/Logo";
import { EmailInput } from "../../../Components/Shared/FormElements/EmailInput";
import { PasswordInput } from "../../../Components/Shared/FormElements/PasswordInput";
import { ToastContext } from "../../../Shared/Toast/context/ToastContext";

import {
  AppSignin,
  AppInsideSignin,
  AppHeadingSignin,
  AppFormSignin,
  AppBtnField,
} from "../style";

const MESSAGES = {
  email: {
    required: "Please provide a valid email address.",
    invalid: "Hmm, that doesn't look like a valid email.",
  },
  password: {
    required: "Please provide a valid password.",
  },
  success: {
    title: "Successfully logged-in",
    description: "You are a authorized user.",
  },
  error: {
    title: "Something has gone wrong.",
    description: "You have entered the wrong email or password",
  },
};

const signinSchema = yup.object({
  email: yup
    .string()
    .trim("No leading or trailing spaces allowed.")
    .strict(true)
    .email(MESSAGES.email.invalid)
    .required(MESSAGES.email.required),
  password: yup.string().required(MESSAGES.password.required),
});

export const SigninPage = () => {
  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const inputs = [
    {
      name: "email",
      label: "Email Address",
      component: EmailInput,
      props: { register, errors, placeholder: "" },
    },
    {
      name: "password",
      label: "Password",
      component: PasswordInput,
      props: { register, errors, placeholder: "" },
    },
  ];

  const onSubmit = (data) => {
    if (data.email !== "admin@gmail.com" && data.password !== "admin#123") {
      addToast({
        type: "error",
        title: MESSAGES.error.title,
        description: MESSAGES.error.description,
      });
      return;
    }

    addToast({
      type: "success",
      title: MESSAGES.success.title,
      description: MESSAGES.success.description,
    });
    navigate(paths.APPS);
  };

  return (
    <AppSignin>
      <AppInsideSignin>
        <Logo />
        <AppHeadingSignin>
          <h1>Welcome Back</h1>
          <p>Always a pleasure to see you again.</p>
        </AppHeadingSignin>
        <AppFormSignin onSubmit={handleSubmit(onSubmit)} noValidate>
          {inputs.map((input) => {
            const Component = input.component;
            return (
              <Component
                key={input.name}
                name={input.name}
                label={input.label}
                {...input.props}
              />
            );
          })}
          <AppBtnField>
            <Button>Continue</Button>
          </AppBtnField>
        </AppFormSignin>
      </AppInsideSignin>
    </AppSignin>
  );
};
