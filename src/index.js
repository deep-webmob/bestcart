import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import SignUp from './Components/SignUp'
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Components/ErrorPage';
import Login from './Components/Home/Login';
import Electronics from './Components/Products/Electronics';
import ProductDetail from './Components/Products/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "electronics",
    element: <Electronics />,
  },
  {
    path: "electronics/details/:id",
    element: <ProductDetail />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
