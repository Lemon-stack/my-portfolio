import ProjectCard from "./ProjectCard";
export default function projects() {
  return (
    <>
      <div className=" my-12 px-4">
        <h3 className="text-lg mb-2">My projects <span className="text-green-500">:</span></h3>
        <section className="bg-zinc-900 grid lg:grid-cols-3 gap-2">
          <ProjectCard />
        </section>
      </div>
    </>
  );
}
