import data from '/data/db.json'
import {Link} from 'react-router-dom'
export default function ProductCard(){
	const {projects,images}=data
	return(
     <>
     {projects.map((project) => (
     <Link to={project.previewLink}>
          <div key={project.id} class="bg-zinc-900 hover:bg-zinc-800 rounded-md px-3 pt-3 mb-4 overflow-y-hidden">
          <h3 class="text-lg text-gray-50 border-b border-b-green-500 mb-1 pb-1">{project.name}</h3>
          <p class="font-thin text-gray-400 mb-3">{project.body}</p>
          
          {/*contaimer for langusges and link to repo*/}
          <div class="flex flex-row justify-between items-center mb-3">
          {/*languages Icon*/}
          <div class="flex flex-row">
            {project.languages && project.languages.map((language) => (
                <div key={language}>
                  <img class="size-[1.4rem] mr-2" src={images[language]} alt={language}/>
                </div>
              ))}
          </div>
          
          {/*link to repo*/}
          <Link to={project.repoLink}>
          <button class="flex flex-row justify-center items-center text-md text-gray-50 hover:bg-zinc-800 border -py-1 px-2 rounded-md">Repo <img class="size-[16px] ml-2" src="/gitHub.svg" alt="link to repository"/></button>
          </Link>
          
          </div>
          
          {/*product preview image*/}
           <img class="w-full -mb-10 md:-mb-20 rounded-t-md" src={project.image} alt="project-image"/>
          </div>
     </Link>
        )
         )}
     </>
		)
}