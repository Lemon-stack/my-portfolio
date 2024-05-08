import {Link} from 'react-router-dom'

export default function Nav(){
	
	const emailClick = () => {
    window.location.href = 'mailto:lemonconfidence@gmail.com';
  };
  
	return (
   <div class="px-3 flex flex-col justify-between items-center h-full py-7">
   <div class="w-10 h-10 relative border border-gray-50 font-extrabold text-xl rounded-3xl flex justify-center items-center">L <span class="w-3 h-3 bg-green-500 opacity-20 absolute -bottom-1 right-1 rounded-lg animate-pulse"></span>
   <span class="w-2 h-2 bg-green-500 absolute -bottom-0.5 right-1.5 rounded-lg"></span>
   </div>
   
   <div class="flex flex-col justify-between items-center">
   
     {/* X icon */}
   <Link to="https://x.com/lemonconfidence">
 <p class="hover:shadow-green-500 shadow-sm rounded-xl flex justify-center items-center p-2 mb-8">
   <svg class="w-6 h-6 text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
</svg>
</p>
   </Link>


     {/* Linkedin icon */}
  <Link to="https://www.linkedin.com/in/lemonconfidence">
 <p class="hover:shadow-green-500 shadow-sm rounded-xl flex justify-center items-center p-2 mb-8"> 
   <svg class="w-6 h-6 text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>
 </p>
  </Link>
 
     {/* Email icon */}
 <p 
 onClick={()=>emailClick()}
 class="hover:shadow-green-500 shadow-sm rounded-xl flex justify-center items-center p-2 mb-10">
<svg class="w-6 h-6 text-gray-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
</svg>
</p>

   </div>
   </div>
		)
}