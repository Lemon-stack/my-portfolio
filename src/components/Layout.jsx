import {React} from 'react'
import ProjectCard from './ProjectCard.jsx'
export default function Layout(){
	return(
		<>
     <div class="flex flex-col">
     <button class="absolute top-3 right-3 border-gray-50 rounded-lg text-gray-50 border w-1/3 ">Download CV</button>
     
     <div class="py-4 flex flex-col justify-center items-center bg-zinc-800 min-h-screen">
     <p class="text-gray-50 font-bold text-7xl">Hell<span class="text-green-500">o</span>,</p>
     <p class="text-gray-50 font-bold text-4xl mb-5 mt-3">I'm Lemon</p>
     <span class="text-green-500 py-2 w-1/2 flex justify-center mb-3 border-t border-t-green-500">Frontend developer</span>
     <button class="flex justify-center items-center py-1 w-2/5 text-lg font-normal rounded-lg bg-green-500 text-gray-50">contact me</button>
     </div>
     
     {/* About section*/}
     <div class="bg-zinc-900 flex flex-col justify-items-start px-3 py-9">
     <h3 class="text-2xl text-green-500 font-bold mb-4">About <span class="text-gray-50">-</span></h3>
     <p class="text-gray-200 font-thin">Commodo laboris magna consectetur minim deserunt ex minim nulla deserunt amet eiusmod. Qui culpa duis nostrud labore laboris. Nostrud adipisicing labore qui ad aute incididunt irure dolor nostrud eiusmod mollit excepteur et sit. Ex enim qui adipisicing fugiat anim eiusmod dolor qui reprehenderit pariatur duis deserunt.</p>
     </div>
     
     { /*Featured project section*/}
    <div class="bg-zinc-800 flex flex-col justify-items-start p-3">
     <p class="text-2xl font-bold my-5 text-green-500">Featured Projects</p>
     
     <ProjectCard/>
     </div>
     </div>
		</>
)}