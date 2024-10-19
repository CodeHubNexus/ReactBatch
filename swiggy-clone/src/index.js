import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./Loader";
// import Home from "./Home";
// import Help from "./Help";
// import Search from "./Search";
// import Cart from "./Cart";

const Home = lazy(() => import("./Home"));
const Help = lazy(() => import("./Help"));
const Search = lazy(() => import("./Search"));
const Cart = lazy(() => import("./Cart"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            {" "}
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<Loader />}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<Loader />}>
            {" "}
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loader />}>
            {" "}
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <div>
            <h1>Page not found</h1>
          </div>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
