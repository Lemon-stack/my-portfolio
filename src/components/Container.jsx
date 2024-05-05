import {React} from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './Nav.jsx'
export default function Container(){
	return(<div className="flex h-screen w-full">
      {/* Left Navigation - fixed width (adjust width as needed) */}
      <div className="w-1/6 bg-zinc-900 text-white flex-none">
        <Nav />
      </div>
      
      {/* Outlet Content - flex grow to occupy remaining space */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
		


		)
}