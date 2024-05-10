import {React} from 'react'
import ProjectCard from './ProjectCard.jsx'
import DownloadCv from './DownloadCv.jsx';
export default function Layout(){
	return(
		<>
     <div class="flex flex-col">
          <DownloadCv />
     <div class="py-4 flex flex-row justify-between items-center bg-zinc-800 min-h-screen">
     <span class="text-green-500 hidden lg:flex md:text-xl py-2 w-full ml-12 -mr-8 items-center justify-center border-t border-t-green-500">Frontend developer</span>
    
     <div class="flex flex-col justify-center items-center w-full">
     <p class="text-gray-50 font-bold text-7xl md:text-8xl">Hell<span class="text-green-500">o</span>,</p>
     <p class="text-gray-50 font-bold text-4xl md:text-5xl mb-5 mt-3">I'm Lemon</p>
     <span class="text-green-500 py-2 w-1/2 flex lg:hidden justify-center mb-3 border-t border-t-green-500">Frontend developer</span>
     <button class="flex justify-center hover:bg-green-700 items-center py-1 w-2/5 text-lg font-normal rounded-lg bg-green-500 text-gray-50">contact me</button>
     </div>
     </div>
     
     {/* About section*/}
     <div class="bg-zinc-900 flex flex-col justify-items-start px-2.5 md:px-6 py-9">
     <h3 class="text-2xl text-green-500 font-bold mb-2.5">About <span class="text-gray-50">-</span></h3>
     <p class="text-gray-200 font-thin">I'm a passionate React developer wuth a strong foundation in modern technologies like Tailwind CSS, Supabase, Git and GitHub, I craft dynamic and user-friendly web apps.
<br/>
<br/>
While React is my primary focus, I leverage Tailwind CSS for stunning, responsive UIs,
Git & GitHub for version control and Supabase for robust backend solutions

I'm constantly in pursuit of growth and continuous learning.
<br/>
<br/>
If you're seeking a skilled React developer to code your vision to life, let's collaborate and create remarkable experiences together.</p>
     </div>
     
     { /*Featured project section*/}
    <div class="bg-zinc-800 flex flex-col justify-items-start p-2.5 md:px-6 md:pb-8">
     <p class="text-2xl font-bold my-5 text-green-500">Featured Projects <span class="text-gray-50">-</span></p>
     
     <div class="grid grid-cols-1 md:grid-cols-3 md:gap-2">
     <ProjectCard/>
     </div>
     </div>
     
     {/*CTA*/}
     <div class="flex flex-col justify-start bg-zinc-900 py-3 px-2.5 pb-9 md:px-6">
     <h3 class="mt-7 mb-2 text-2xl font-bold text-green-500">Lets make something amazing together.</h3>
     <p class="text-gray-50 text-lg font-thin">Start by saying hi</p>
     </div>
     
     </div>
		</>
)}