import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div
      className="flex justify-center items-center w-full p-6"
      style={{
        color: "#9FA2B4",
        backgroundColor: "#363740",
        fontFamily: "Mulish",
        height: "100vh",
      }}
    >
      <div
        className="p-6"
        style={{
          width: "380px",
          height: "580px",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="flex flex-col gap-2 justify-center items-center text-center mx-4">
          <div>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div style={{ fontSize: "24px", fontWeight: "700" }}>Erthoo</div>
          <div style={{ fontSize: "24px", fontWeight: "700", color: "#000" }}>
            Log In to Erthoo Dashboard
          </div>
          <div>Enter your email and password below</div>
        </div>
        <div className="flex flex-col justify-center my-4">
          <div className="flex flex-col gap-2 justify-center items-start">
            <label
              className="text-start"
              style={{
                fontWeight: "700",
                color: "#9FA2B4",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full"
              style={{
                padding: "10px",
                backgroundColor: "#FCFDFE",
                border: "1px solid #F0F1F7",
                borderRadius: "8px",
              }}
            />
          </div>
          <div>
            <div className="flex my-2 justify-between ">
              <label
                style={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#9FA2B4",
                  textTransform: "uppercase",
                }}
              >
                Password
              </label>
              <Link
              to="/"
                style={{
                  textAlign: "right",
                  fontWeight: "400",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  color:"#9FA2B4",
                  textDecoration:"none"
                }}
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full"
              style={{
                padding: "10px",
                backgroundColor: "#FCFDFE",
                border: "1px solid #F0F1F7",
                borderRadius: "8px",
              }}
            />
          </div>
          <div>
            <button
              className="flex w-full mt-4 mb-3 justify-center"
              style={{
                color: "#fff",
                fontWeight: "600",
                backgroundColor: "#3751FF",
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
                border: "none",
                outline: "none",
                padding: "15px 20px",
              }}
            >
              Log In
            </button>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <span>Don’t have an account?</span>
          <b style={{ color: "#3751FF" }}>Sign up</b>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
