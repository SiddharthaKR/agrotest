import { Layout, Left } from "../components/Login/Common";
import Carouselitem from "../components/Login/Carouselitem";
import LoginComp from "../components/Login/LoginComp";
import SignUpComp from "../components/Login/SignUpComp";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const dismissAll = () => {
    toast.dismiss();
  };

  const [num, setNum] = useState(0);
  return (
    <>
      <ToastContainer />
      <Layout>
        <Left>
          <Carouselitem />
        </Left>
        {num === 0 ? (
          <LoginComp setNum={setNum} notify={notify} />
        ) : (
          <SignUpComp setNum={setNum} notify={notify} dismiss={dismissAll} />
        )}
      </Layout>
    </>
  );
};

export default Login;
