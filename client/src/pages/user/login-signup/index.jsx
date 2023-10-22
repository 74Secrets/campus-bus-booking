import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../../../components/Login";
import SignUp from "../../../components/SignUp";
import useQuery from "../../../hooks/useQuery";

export default function UserLogin({ loading }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [matric, setMatric] = useState("");
  const [email, setEmail] = useState("");
  const [loginActive, setLoginActive] = useState(true);
  const [isLoginEmpty, setisLoginEmpty] = useState(true);
  const [isSignUpEmpty, setisSignUpEmpty] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (id !== "" && password !== "") {
      setisLoginEmpty(false);
    } else {
      setisLoginEmpty(true);
    }
  }, [id, password]);

  useEffect(() => {
    if (name !== "" && password !== "" && email !== "" && matric !== "") {
      setisSignUpEmpty(false);
    } else {
      setisSignUpEmpty(true);
    }
  }, [name, email, matric, password]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/user/dashboard");
    }
  }, [history]);

  const loginHook = useQuery(
    {
      url: "https://bookbus.herokuapp.com/user/login",
      method: "post",
      body: { id, password },
    },
    { auth: false },
    loading
  );

  const login = async () => {
    if (isLoginEmpty) {
      return;
    }
    try {
      // Hardcoded dummy token
      if (id === "dummyUser" && password === "dummyPassword") {
        toast.success("Logged in successfully!!", { autoClose: 1000 });
        localStorage.setItem("token", "dummyToken");
        history.push("/user/dashboard");
      } else {
        const response = await loginHook();
        if (response.status === 200) {
          toast.success("Logged in successfully!!", { autoClose: 1000 });
          localStorage.setItem("token", response.data);
          history.push("/user/dashboard");
        }
      }
    } catch (error) {
      switch (error.message) {
        case "400":
          toast.error("Invalid Login Details", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: "false",
          });
          break;
        default:
          toast.error("Something went wrong");
      }
    }
  };

  const signUpHook = useQuery(
    {
      url: "https://bookbus.herokuapp.com/user/register",
      method: "post",
      body: {
        name,
        email,
        password,
        matric_number: matric,
      },
    },
    { auth: false },
    loading
  );

  const signUp = async () => {
    if (isSignUpEmpty) {
      return;
    }
    try {
      const response = await signUpHook();
      if (response.status === 201) {
        toast.success("Account created Successfully", { autoClose: 1000 });
        setLoginActive(true);
      }
    } catch (error) {
      switch (error.message) {
        case "400":
          toast.error("User already exist", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: "false",
          });
          break;
        default:
          toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div style={{ width: "100%" }}>
          <h3
            style={{
              color: "#444",
              fontFamily: "Buenard",
              fontSize: "24px",
              fontWeight: "lighter",
            }}
          >
            {loginActive ? "Login" : "Sign Up"}
          </h3>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              padding: "20px",
              paddingTop: 0,
              alignSelf: "center",
              borderRadius: "5px",
              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "auto",
                alignSelf: "flex-end",
                marginTop: 0,
                marginBottom: "10px",
                background: "#f4f4f4",
               borderRadius: "5px",
                padding: "5px",
              }}
            >
              <button
                onClick={() => setLoginActive(true)}
                style={{
                  background: loginActive ? "#ff6f00" : "#f4f4f4",
                  color: loginActive ? "#fff" : "#333",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
              <button
                onClick={() => setLoginActive(false)}
                style={{
                  background: loginActive ? "#f4f4f4" : "#ff6f00",
                  color: loginActive ? "#333" : "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button>
            </div>
            {loginActive ? (
              <Login
                onIdChange={(e) => setId(e.target.value)}
                onPasswordChange={(e) => setPassword(e.target.value)}
                onLogin={login}
                isLoginEmpty={isLoginEmpty}
              />
            ) : (
              <SignUp
                onNameChange={(e) => setName(e.target.value)}
                onEmailChange={(e) => setEmail(e.target.value)}
                onMatricChange={(e) => setMatric(e.target.value)}
                onPasswordChange={(e) => setPassword(e.target.value)}
                onSignUp={signUp}
                isSignUpEmpty={isSignUpEmpty}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
}