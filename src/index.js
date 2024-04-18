import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Education } from './Pages/Education';
import { AddToDictionaryForm } from './Pages/AddToDictionary';
import { Know } from './Pages/Know';
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
        path: '/Recent',
        element: <Education/>

      },
      {
        path: '/AddToDictionary',
        element: <AddToDictionaryForm />

      },
      {
        path: '/All',
        element: <All/>

      },
      {
        path: '/Know',
        element: <Know/>

      }


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

