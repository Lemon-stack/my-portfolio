import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Container from './components/Container.jsx'
const router=createBrowserRouter(
	createRoutesFromElements(
     <Route path='/' element={<Container/>}>
     <Route path='' element={<Layout/>}/>
     
     </Route>
		)
	)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
