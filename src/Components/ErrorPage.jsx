import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div
      className="h-screen grid items-center text-red-700"
      id="error_page"
    >
      <div className="grid justify-items-center">
        <p>An unexpected error occured.</p>
        <p>{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
