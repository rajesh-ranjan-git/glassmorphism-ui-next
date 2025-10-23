import Input from "@/components/form/input";
import Submit from "@/components/form/submit";

const Login = () => {
  return (
    <div className="relative p-10 w-full h-full">
      <h2 className="before:-bottom-2.5 before:left-0 before:absolute relative before:bg-white before:w-20 before:h-1 font-semibold text-white text-2xl before:content-[''] tracking-wider">
        Login Form
      </h2>
      <form>
        <div className="mt-5 w-full">
          <Input type="text" placeholder="Username" />
        </div>
        <div className="mt-5 w-full">
          <Input type="password" placeholder="Password" />
        </div>
        <div className="mt-5 w-full">
          <Submit value="Login" />
        </div>
        <p className="mt-1.5 text-white">
          Forgot password?{" "}
          <a href="#" className="font-semibold text-white">
            Click Here
          </a>
        </p>
        <p className="mt-1.5 text-white">
          Don't have an account?{" "}
          <a href="#" className="font-semibold text-white">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
