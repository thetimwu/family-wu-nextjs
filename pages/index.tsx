import { useState } from "react";
// import styles from "../styles/Home.module.css";
import Layout from "../components/layout/Layout";
import jwt from "jsonwebtoken";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [secret, setSecret] = useState("");

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMessage(`welcome ${json.username} and you are ${json.admin}`);

      const res = await fetch("/api/secret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      }).then((t) => t.json());

      if (res.secretAdminCode) {
        setSecret(res.secretAdminCode);
      } else {
        setSecret("nothing available");
      }
    }
  };

  return (
    <Layout color="white">
      <div className="min-h-screen flex items-center justify-center bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        {message}
        secret:{secret}
        <img
          style={{
            border: 20,
            margin: 50,
            float: "left",
            width: 500,
            height: 500,
          }}
          className="object-cover"
          src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1327&q=80"
        />
        <hr />
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              Or
              <a
                href="create.html"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create new account
              </a>
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-1">
              <div>
                <label htmlFor="username" className="sr-only">
                  username
                </label>
                <input
                  className="w-full rounded-md shadow-sm"
                  type="text"
                  name="username"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  password
                </label>
                <input
                  className="w-full rounded-md shadow-sm "
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="boxing.html"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                id="signin"
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-lightblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"
                aria-required="true"
                onClick={handleSubmit}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-blue-50 group-hover:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
