import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = React.useState(initialState);
const {  isLoading } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        if (data?.payload?.user?.role === "admin") {
          navigate("/admin/dashboard");
        } else if (data?.payload?.user?.role === "user") {
          navigate("/shop");
        }
      } else {
        toast.error(data?.payload?.message);
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 ">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Login to your account
        </h1>
        <p className="mt-2 mb-8">
          Don't have an account?{" "}
          <Link
            className=" hover:underline font-medium text-primary "
            to="/auth/signup"
          >
            Signup
          </Link>{" "}
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Log In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Login;
