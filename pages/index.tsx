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
    <Layout color="blue">
      <div className="h-screen lg:flex items-center justify-center bg-blue-100 px-4 sm:px-3 lg:px-8">
        {/* <img
          style={{
            border: 20,
            margin: 50,
            float: "left",
            width: 500,
            height: 500,
          }}
          className="object-cover"
          src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1327&q=80"
        /> */}
        {/* <hr /> */}
        <div className="mx-auto h-auto flex-1">
          <div>
            <svg
              id="Capa_1"
              enableBackground="new 0 0 500 500"
              height="400"
              viewBox="0 0 500 500"
              width="400"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <linearGradient
                id="SVGID_1_"
                gradientTransform="matrix(.994 .11 -.11 .994 -28.962 -29.776)"
                gradientUnits="userSpaceOnUse"
                x1="172.48"
                x2="497.848"
                y1="110.639"
                y2="436.007"
              >
                <stop offset="0" stopColor="#ffa936" />
                <stop offset=".4112" stopColor="#ff8548" />
                <stop offset=".7781" stopColor="#ff6c54" />
                <stop offset="1" stopColor="#ff6359" />
              </linearGradient>
              <linearGradient
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="490.487"
                x2="466.43"
                y1="159.015"
                y2="164.322"
              >
                <stop offset="0" stopColor="#f82814" stopOpacity="0" />
                <stop offset="1" stopColor="#c0272d" />
              </linearGradient>
              <linearGradient id="lg1">
                <stop offset="0" stopColor="#cdec7a" />
                <stop offset=".2157" stopColor="#b0e995" />
                <stop offset=".5613" stopColor="#87e4bb" />
                <stop offset=".8347" stopColor="#6ee1d2" />
                <stop offset="1" stopColor="#65e0db" />
              </linearGradient>
              <linearGradient
                id="SVGID_3_"
                gradientTransform="matrix(.983 -.185 .185 .983 55.608 42.369)"
                gradientUnits="userSpaceOnUse"
                x1="15.52"
                x2="340.888"
                xlinkHref="#lg1"
                y1="104.705"
                y2="430.073"
              />
              <linearGradient id="lg2">
                <stop offset="0" stopColor="#cdec7a" stopOpacity="0" />
                <stop offset=".2354" stopColor="#9ad57d" stopOpacity=".235" />
                <stop offset=".6035" stopColor="#51b482" stopOpacity=".604" />
                <stop offset=".8679" stopColor="#239f85" stopOpacity=".868" />
                <stop offset="1" stopColor="#119786" />
              </linearGradient>
              <linearGradient
                id="SVGID_4_"
                gradientUnits="userSpaceOnUse"
                x1="491.682"
                x2="450.637"
                xlinkHref="#lg2"
                y1="256.546"
                y2="256.546"
              />
              <linearGradient
                id="SVGID_5_"
                gradientUnits="userSpaceOnUse"
                x1="176.731"
                x2="176.731"
                xlinkHref="#lg2"
                y1="466.917"
                y2="442.601"
              />
              <linearGradient
                id="SVGID_6_"
                gradientUnits="userSpaceOnUse"
                x1="88.264"
                x2="413.632"
                y1="111.753"
                y2="437.121"
              >
                <stop offset="0" stopColor="#f8f6fb" />
                <stop offset="1" stopColor="#efdcfb" />
              </linearGradient>
              <linearGradient
                id="SVGID_7_"
                gradientUnits="userSpaceOnUse"
                x1="112.768"
                x2="430.112"
                y1="101.155"
                y2="514.021"
              >
                <stop offset="0" stopColor="#18cefb" />
                <stop offset=".2969" stopColor="#2bb9f9" />
                <stop offset=".7345" stopColor="#42a0f7" />
                <stop offset="1" stopColor="#4a97f6" />
              </linearGradient>
              <linearGradient
                id="SVGID_8_"
                gradientUnits="userSpaceOnUse"
                x1="75.588"
                x2="214.616"
                y1="316.53"
                y2="497.406"
              >
                <stop offset="0" stopColor="#cdec7a" />
                <stop offset=".2154" stopColor="#b0e995" stopOpacity=".784" />
                <stop offset=".5604" stopColor="#87e4bb" stopOpacity=".439" />
                <stop offset=".8334" stopColor="#6ee1d2" stopOpacity=".165" />
                <stop offset=".9985" stopColor="#65e0db" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="SVGID_9_"
                gradientUnits="userSpaceOnUse"
                x1="198.822"
                x2="366.499"
                xlinkHref="#lg1"
                y1="288.474"
                y2="506.622"
              />
              <linearGradient
                id="SVGID_10_"
                gradientUnits="userSpaceOnUse"
                x1="117.242"
                x2="171.618"
                y1="131.922"
                y2="202.666"
              >
                <stop offset="0" stopColor="#ffd945" />
                <stop offset=".3043" stopColor="#ffcd3e" />
                <stop offset=".8558" stopColor="#ffad2b" />
                <stop offset="1" stopColor="#ffa325" />
              </linearGradient>
              <g>
                <path
                  d="m426.926 470.539-386.877-42.878c-18.601-2.061-32.008-18.811-29.947-37.412l35.559-320.841c2.062-18.601 18.812-32.009 37.412-29.947l386.877 42.878c18.601 2.062 32.009 18.812 29.947 37.412l-35.559 320.841c-2.061 18.601-18.811 32.009-37.412 29.947z"
                  fill="url(#SVGID_1_)"
                />
                <path
                  d="m499.897 119.752-14.02 126.534-31.162-165.634 15.241 1.688c18.595 2.058 32 18.806 29.941 37.412z"
                  fill="url(#SVGID_2_)"
                />
                <path
                  d="m482.373 410.94-382.536 71.964c-18.392 3.46-36.107-8.645-39.567-27.037l-59.68-317.241c-3.46-18.392 8.645-36.107 27.037-39.567l382.536-71.964c18.392-3.46 36.107 8.645 39.567 27.037l59.68 317.241c3.46 18.393-8.645 36.108-27.037 39.567z"
                  fill="url(#SVGID_3_)"
                />
                <path
                  d="m457.896 97.546v317.999l24.476-4.605c18.392-3.46 30.497-21.175 27.037-39.567z"
                  fill="url(#SVGID_4_)"
                />
                <path
                  d="m58.45 446.187 1.821 9.68c3.46 18.392 21.175 30.497 39.567 27.037l195.175-36.717z"
                  fill="url(#SVGID_5_)"
                />
                <g>
                  <path
                    d="m424.01 448.166h-389.245c-18.715 0-33.886-15.171-33.886-33.886v-322.806c0-18.715 15.171-33.886 33.886-33.886h389.245c18.715 0 33.886 15.171 33.886 33.886v322.806c0 18.715-15.171 33.886-33.886 33.886z"
                    fill="url(#SVGID_6_)"
                  />
                  <path
                    d="m392.279 416.326h-325.782c-15.663 0-28.361-12.698-28.361-28.361v-270.175c0-15.663 12.698-28.361 28.361-28.361h325.782c15.663 0 28.361 12.698 28.361 28.361v270.175c0 15.663-12.698 28.361-28.361 28.361z"
                    fill="url(#SVGID_7_)"
                  />
                  <g>
                    <path
                      d="m252.069 416.326h-185.567c-15.666 0-28.37-12.694-28.37-28.359v-44.29l47.082-57.228c15.538-18.903 44.46-18.903 60.009 0l29.315 35.64z"
                      fill="url(#SVGID_8_)"
                    />
                    <path
                      d="m420.643 316.75v71.217c0 15.666-12.704 28.359-28.37 28.359h-295.268l77.532-94.237 95.246-115.783c15.538-18.892 44.471-18.892 60.009 0z"
                      fill="url(#SVGID_9_)"
                    />
                  </g>
                  <circle
                    cx="137.225"
                    cy="157.919"
                    fill="url(#SVGID_10_)"
                    r="40.219"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="max-w-md space-y-2 flex-1">
          <div className="flex justify-center">
            <i className="fab fa-fort-awesome fa-5x red"></i>
          </div>

          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              {/* Or
              <a
                href="create.html"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create new account
              </a> */}
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
