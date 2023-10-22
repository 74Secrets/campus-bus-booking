import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import useQuery from "../../../hooks/useQuery";

export default function DriverLogin({ loading }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginEmpty, setIsLoginEmpty] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (username !== "" && password !== "") {
      setIsLoginEmpty(false);
    } else {
      setIsLoginEmpty(true);
    }
  }, [username, password]);

  const onPasswordChange = (val) => {
    setPassword(val);
  };

  const onUsernameChange = (val) => {
    setUsername(val);
  };

  const loginHook = useQuery(
    {
      url: "https://bookbus.herokuapp.com/bus/driver/login",
      method: "post",
      body: {
        username,
        password,
      },
    },
    { auth: false },
    loading
  );

  const login = async () => {
    if (isLoginEmpty) {
      return;
    }

    // Hardcoded dummy logins
    if (username === "dummyUsername" && password === "dummyPassword") {
      localStorage.setItem("driverToken", "dummyToken");
      localStorage.setItem("busId", "dummyBusId");
      history.push("/driver/dashboard");
      toast.success("Logged in successfully!!", { autoClose: 1000 });
    } else {
      toast.error("Invalid Login Details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: "false",
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("driverToken")) {
      history.push("/driver/dashboard");
    }
  }, [history]);

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
          type="text"
          className="input"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          placeholder="password"
          required
        />
        <button
          className="button login-btn"
          onClick={() => login()}
          style={{ opacity: isLoginEmpty ? "0.6" : "1" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}