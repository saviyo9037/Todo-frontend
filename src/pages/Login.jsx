import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useMutation } from "@tanstack/react-query";

const Login = () => {

  const {mutateAsync} = useMutation({
    mutationFn:"",
    mutationKey:['login']
  })


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      mutateAsync(values)
    },
  });
  return (
    <>
      <div className="bg-red-600 h-screen w-screen flex flex-col justify-center items-center">
        <div className="border-white border-4 w-3/65"></div>
        <h1>Login form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            className="border-2 mt-3 ml-24 border-red-600 rounded-xl"
            placeholder="enter email"
            />
            {formik.errors.email && formik.touched.email && (
              <div style={{ color: "green" }}>{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="border-2 mt-3 ml-20 border-red-600 rounded-xl"
            placeholder="enter password"
            />
            {formik.errors.password && formik.touched.password && (
              <div style={{ color: "blue" }}>{formik.errors.password}</div>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default Login;
