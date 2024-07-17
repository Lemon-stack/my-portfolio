import data from '/data/db.json'
export default function ProductCard(){
	const {projects,images}=data
	return(
     <>
     {projects?.map((project) => (
     <a href={project.previewLink} key={project.id}>
          <div className="bg-zinc-900 hover:opacity-70 w-full min-h-full rounded-md px-3 pt-3 mb-4 overflow-y-hidden">
          <h3 className="text-lg text-gray-50 border-b border-b-green-500 mb-1 pb-1">{project.name}</h3>
          <p className="font-light text-gray-400 mb-3">{project.body}</p>
          
          {/*contaimer for langusges and link to repo*/}
          <div className="flex flex-row justify-between items-center mb-3">
          {/*languages Icon*/}
          <div className="flex flex-row">
            {project.languages && project.languages.map((language) => (
                <div key={language}>
                  <img className="size-[1.4rem] mr-1.5" src={images[language]} alt={language}/>
                </div>
              ))}
          </div>
          
          {/*link to repo*/}
          <a href={project.repoLink}>
          <button className="flex flex-row justify-center items-center text-md text-gray-50 hover:bg-zinc-800 border -py-1 px-2 rounded-md">Repo <img className="size-[16px] ml-2" src="/gitHub.svg" alt="link to repository"/></button>
          </a>
          
          </div>
          
          {/*product preview image*/}
           <img className="w-full -mb-10 md:-mb-20 rounded-t-md" src={project.image} alt="project-image"/>
          </div>
     </a>
        )
         )}
     </>
		)
}