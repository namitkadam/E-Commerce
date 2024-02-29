import { useContext, useState, useEffect } from "react";
import Logo from "../../Img/Logo.png";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { ECommerceContext } from "../../Context/context";

const initCreateAccount = {
  name: "",
  mobileNumber: "",
  email: "",
  password: "",
  id: new Date().getTime(),
};

export default function SignUp() {
  const [createAccount, setCreateAccount] = useState({ ...initCreateAccount });
  const { addAccount } = useContext(ECommerceContext);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let classLabel = "block text-sm font-medium leading-6 text-gray-900";
  let classInput =
    "block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.passwords = "Password is required";
    }
    return errors;
  };

  if (Object.keys(formErrors).length === 0 && isSubmit) {
    return (
      <>
        <div className="msg">Signed in successfully</div>
        {(window.location = "/E-Commerce/Login")}
      </>
    );
  }

  const SumbmitAccount = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (!isSubmit) return addAccount(createAccount);

    setFormErrors(validate(createAccount));
    setCreateAccount({ ...initCreateAccount });
  };

  function onChangeval(e) {
    const val = (res) => ({
      ...res,
      [e.target.name]: e.target.value,
    });
    setCreateAccount(val);
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-28 w-auto" src={Logo} alt="Your Company" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-1.5" onSubmit={SumbmitAccount}>
          <Input
            label="Your name"
            type="text"
            id="name"
            // required
            placeholder="First and last name"
            name="name"
            calssInput={classInput}
            calssLabel={classLabel}
            onchange={onChangeval}
            value={createAccount.name}
          />
          <p className="text-red-600">{formErrors.name}</p>

          <Input
            label="Mobile number"
            type="text"
            id="mobile-number"
            // required
            placeholder="1234 5678 90"
            name="mobileNumber"
            calssInput={classInput}
            calssLabel={classLabel}
            onchange={onChangeval}
            value={createAccount.mobileNumber}
          />

          <Input
            label="Email"
            type="email"
            id="email"
            // required
            name="email"
            placeholder=""
            calssInput={classInput}
            calssLabel={classLabel}
            onchange={onChangeval}
            value={createAccount.email}
          />

          <Input
            label="Password"
            type="password"
            id="password"
            // required
            name="password"
            placeholder="At least 6 characters"
            calssInput={classInput}
            calssLabel={classLabel}
            onchange={onChangeval}
            value={createAccount.password}
          />

          <div>
            <button className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-[#4f4f4f] hover:bg-[#3B3B3B]">
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/E-Commerce/Login"
            className="font-semibold leading-6 text-[#4f4f4f] hover:text-[#3B3B3B]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
