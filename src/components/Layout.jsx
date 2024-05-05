import {React} from 'react'
export default function Layout(){
	return(
		<>
     <div class="flex flex-col">
     <button class="absolute top-3 right-3 border-gray-50 rounded-lg text-gray-50 border w-1/3">Download CV</button>
     <div class="py-4 flex flex-col justify-center items-center bg-zinc-800 min-h-screen">
     <p class="text-gray-50 font-bold text-7xl">Hell<span class="text-green-500">o</span>,</p>
     <p class="text-gray-50 font-bold text-4xl mb-5 mt-3">I'm Lemon</p>
     <span class="text-green-500 py-2 w-1/2 flex justify-center mb-3 border-t border-t-green-500">Frontend developer</span>
     <button class="flex justify-center items-center py-1 w-2/5 text-lg font-normal rounded-lg bg-green-500 text-gray-50">contact me</button>
     </div>
     
     <div class="bg-zinc-900">
     <h3 class="text-2xl ">About</h3>
     </div>
     
     </div>
		</>
)}