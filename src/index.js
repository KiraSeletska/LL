import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Education } from './Pages/Education';
import { AddToDictionaryForm } from './Pages/AddToDictionary';
import { All } from './Pages/All';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  //  errorElement: <ErrorPage />,
    children: [
      {
        path: '/Education/:id',
        element: <Education/>,

      },
      {
        path: '/All/:id',
        element: <All/>

      },
      {
        path: '/AddToDictionary',
        element: <AddToDictionaryForm />

      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router}>
        <App />
        </RouterProvider>
        </Provider>

  </React.StrictMode>
);

