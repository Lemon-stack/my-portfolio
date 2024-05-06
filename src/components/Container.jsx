import React from 'react'
import {Outlet} from 'react-router-dom'
import Nav from './Nav.jsx'
export default function Container(){
	return(
		<div class="flex h-screen w-full">
      {/* Left Navigation */}
      <div class="w-1/6 bg-zinc-900 text-white flex-none">
        <Nav />
      </div>
      
      {/* Outlet Content - flex grow to occupy remaining space */}
      <div class="flex-1 overflow-y-auto">
        <Outlet/>
      </div>
    </div>
		


		)
}