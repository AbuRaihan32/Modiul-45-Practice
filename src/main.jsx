import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Users from './components/Users/Users.jsx';
import UserD from './components/UserD/UserD.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostD from './components/PostD/PostD.jsx';
import ErrorMassege from './components/ErrorMassege/ErrorMassege.jsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorMassege></ErrorMassege>,
    children: [
      {
        path: '/about',
        element: <div>Hello From About Page</div>
      },
    
      {
        path: '/contact',
        element: <div>Please Contact With me</div>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/users/:id',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserD></UserD>
      },
      {
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostD></PostD>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
