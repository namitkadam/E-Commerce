import { useState, useEffect } from "react";
import Logo from "../../Img/Logo.png";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

export default function Login() {
  const [login, setLoing] = useState();
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};
  //   const ragex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.username) {
  //     errors.username = "Username is required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   }
  //   if (!values.password) {
  //     errors.passwords = "Password is required";
  //   }
  //   return errors;
  // };
  // if (Object.keys(formErrors).length === 0 && isSubmit) {
  //   return (
  //     <>
  //       <div className="msg">Signed in successfully</div>
  //     </>
  //   );
  // }

  let classLabel = "block text-sm font-medium leading-6 text-gray-900";
  let classInput =
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-28 w-auto" src={Logo} alt="Your Company" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Input
            label="Email address"
            type="email"
            id="email"
            required
            name="email"
            calssInput={classInput}
            // calssLabel={classLabel}
            // onchange={onChangeval}
            // value={createAccount.name}
          />

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className={classLabel}>
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#4f4f4f] hover:text-[#3B3B3B]"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <Input
              type="password"
              id="password"
              required
              name="password"
              calssInput={classInput}
              calssLabel={classLabel}
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-[#4f4f4f] hover:bg-[#3B3B3B]"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/SignUp"
            className="font-semibold leading-6 text-[#4f4f4f] hover:text-[#3B3B3B]"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
