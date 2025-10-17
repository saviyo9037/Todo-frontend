import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "../services/userServices";
import { useDispatch } from "react-redux";
import { addData } from "../features/userSlice";

const SignUpForm = () => {

 const {mutateAsync} = useMutation({
  mutationFn:registerAPI,
  mutationKey:['register']
 })
 const dispatch = useDispatch()
 const navigate = useNavigate()

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name should be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutateAsync(values).then((data)=>{
        localStorage.setItem("token",data.token)
        localStorage.setItem("user",JSON.stringify(data.createUser))
        dispatch(addData(data.createUser))
        navigate("/profile")
        
      })
    },
  });

  return (
    <div className="bg-white h-screen w-5/5 border-red-600 border-spacing-2 flex flex-col justify-center items-center">
        <h1 className=" text-blue-950 text-3xl mb-4">Sign Up form</h1>
      <div className="border-4 border-black rounded-lg mt-4 p-10 bg-green-400 w-2/5">
      
      <form onSubmit={formik.handleSubmit} className="p-10">
        <div>
          <label className="text-white">Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="border-2 ml-24 rounded-xl"
            placeholder="enter name"
          />
          {formik.errors.name && formik.touched.name && (
            <div style={{ color: "blue", backgroundColor : "white" ,margin: "10px", fontWeight: "bold", display:"flex", justifyContent : "center", borderRadius : "50px"}}>{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label className="text-white">Email</label>
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
            <div style={{color: "blue", backgroundColor : "white" ,margin: "10px", fontWeight: "bold", display:"flex", justifyContent : "center", borderRadius : "50px"}}>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label className="text-white">Password</label>
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
            <div style={{color: "blue", backgroundColor : "white" ,margin: "10px", fontWeight: "bold", display:"flex", justifyContent : "center", borderRadius : "50px"}}>{formik.errors.password}</div>
          )}
        </div>

        <div>
          <label className="text-white">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="border-2 mt-3 ml-3 border-red-600 rounded-xl"
            placeholder="enter confirmPassword"
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div style={{color: "blue", backgroundColor : "white" ,margin: "10px", fontWeight: "bold", display:"flex", justifyContent : "center", borderRadius : "50px"}}>{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" className="p-2 border-2 bg-blue-500 mt-6 ml-32 rounded-xl pl-6 pr-6 hover:bg-blue-600 hover:border-blue-700">Submit</button>
        <div>
          <p className="text-white font-semibold ml-20 mt-6">
            Already a User {""}{" "}
            <span className="text-blue-400 hover:text-red-600 ">
              <Link to="/login">Login</Link>
              <Link to="/profile">Profile</Link>
            </span>
          </p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default SignUpForm;
