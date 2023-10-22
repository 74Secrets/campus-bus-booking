import React, { useState } from "react";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import useQuery from "../../../hooks/useQuery";

export default function AdminLogin({ loading }) {
  const [pin, setPin] = useState("");
  const history = useHistory();

  const loginHook = useQuery(
    {
      url: "https://bookbus.herokuapp.com/bus/admin/login",
      method: "post",
      body: {
        pin,
      },
    },
    { auth: false },
    loading
  );

  const login = async () => {
    // Hardcoded dummy pin
    if (pin === "123456789") {
      localStorage.setItem("adminToken", "dummyToken");
      history.push("/admin/dashboard");
      toast.success("Logged in successfully!!", { autoClose: 1000 });
    } else {
      toast.error("Invalid Pin", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: "false",
      });
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          padding: "20px",
          alignSelf: "center",
          borderRadius: "5px",
          margin: "auto",
        }}
      >
        <div
          style={{
            fontSize: "25px",
            color: "#444",
            fontFamily: "Arapey",
            marginBottom: "5px",
          }}
        >
          Login
        </div>
        <input
          type="password"
          className="input"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Secret Pin"
          required
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={pin === "" || loading}
          onClick={() => login()}
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}