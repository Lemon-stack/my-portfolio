import ProjectCard from './ProjectCard.jsx' 
import DownloadCv from './DownloadCv.jsx'; 

  export default function Layout(){
  return(
 <>
  <div className="flex flex-col w-full h-full">
      <div className="flex flex-row justify-between items-center bg-zinc-800 min-h-screen">
        <span className="text-green-500 hidden lg:flex md:text-xl py-2 w-full ml-12 -mr-8 items-center justify-center border-t border-t-green-500">
          Frontend developer
        </span>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-gray-50 font-bold text-7xl md:text-8xl">
            Hell<span className="text-green-500">o</span>,
          </p>
          <p className="text-gray-50 font-bold text-4xl md:text-5xl mb-5 mt-3">
            I&apos;m Lemon
          </p>
          <span className="text-green-500 py-2 w-1/2 flex lg:hidden justify-center mb-3 border-t border-t-green-500">
            Frontend developer
          </span>
          <button className="flex justify-center hover:bg-green-700 items-center py-1 w-2/5 text-lg font-normal rounded-lg bg-green-500 text-gray-50">
            contact me
          </button>
        </div>
      </div>
      {/* About section */}
      <div className="bg-zinc-900 flex flex-col justify-items-start px-2.5 md:px-6 py-9">
        <h3 className="text-2xl text-green-500 font-bold mb-2.5">
          About <span className="text-gray-50">-</span>
        </h3>
       
      </div>
      {/*Featured project section*/}
      <div className="bg-zinc-800 flex flex-col justify-items-start p-2.5 md:px-6 md:pb-8">
        <p className="text-2xl font-bold my-5 text-green-500">
          Featured Projects <span className="text-gray-50">-</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2">
          <ProjectCard/>
        </div>
      </div>
      {/*CTA*/}
      <div className="flex flex-col justify-start bg-zinc-900 py-3 px-2.5 pb-9 md:px-6">
        <h3 className="mt-7 mb-2 text-2xl font-bold text-green-500">
          Lets make something amazing together.
        </h3>
        <p className="text-gray-50 text-lg font-thin">Start by saying hi</p>
      </div>
    <DownloadCv />
  </div>
</>
  )}
