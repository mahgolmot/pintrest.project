import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import img1 from "../../assets/images/undraw_fingerprint-login_19qv.svg";
export default function Login() {
  const { login, session } = useContext(UserContext);

  function handleLogin(e) {
    console.log("jnkjnkjndsvv");
    e.preventDefault();
    const { username, password } = e.target.elements;

    login(username.value, password.value);
  }
  return (
    <div>
      {/*

      <div className="flex flex-col justify-center items-center text-black">
        <p>{session}</p>
        <form action="" onSubmit={handleLogin} className="flex flex-col gap-8">
          <input placeholder="user" type="text" name="username" />
          <input placeholder="pass" type="password" name="password" />

          <input type="submit" value="login" className="text-white" />
        </form>
      </div> */}
      <div className="loginPage flex flex-row rounded-3xl bg-pink-100 border-blue-900 w-8/12 justify-center m-auto mt-24  md:flex max-sm:w-full">
        <div className="section1 rounded-3xl p-4  bg-gradient-to-br from-pink-700 to-pink-300 max-lg:hidden max-md:hidden ">
          <img src={img1} alt="" className="m-3 " />
        </div>
        <div className="section2 flex flex-col w-3/5 mx-auto">
          <p className="flex flex-col mx-auto mt-5 text-3xl text-black font-light max-md:text-xl">
            WELCOME BACK{" "}
            <span className="mx-auto font-black text-pink-950">LOGIN PAGE</span>
          </p>
          <form
            action=""
            onSubmit={handleLogin}
            className="flex flex-col gap-8"
          >
            <div className="inputUser mx-12 my-10    max-xl:flex  max-xl:justify-center">
              <input
                type="text"
                name="username"
                placeholder="Email Address"
                className="bg-gray-300 px-7 py-3 w-96 rounded-xl placeholder-custom text-black"
              />
            </div>

            <div className="inputPass mx-12   max-xl:flex  max-xl:justify-center">
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="bg-gray-300 px-7 py-3 w-96 rounded-xl placeholder-custom text-black"
              />
            </div>
            <p className="text-gray-400 text-xs text-right mr-14 mt-4">
              Forget password?
            </p>
            <input
              type="submit"
              value="login"
              className="bg-pink-800 w-96 mx-auto rounded-xl py-2 mt-4 text-sm hover:bg-gradient-to-br from-pink-700 to-pink-300 hover:shadow-md hover:text-black hover:font-bold transition-all duration-300  max-lg:bg-pink-500 max-xl:justify-center  max-xl:w-72 max-md:w-64 max-sm:w-52"
            />
          </form>

          <p className="text-center text-gray-600 text-xs mt-10 mb-20">
            DON'T HAVE AN ACCOUNT?
            <span className="text-pink-950 hover:cursor-pointer hover:underline hover:text-blue-900 ">
              {" "}
              CREATE AN ACCOUNT
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
