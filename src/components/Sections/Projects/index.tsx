import { projects } from "@/assets/data/projects";
import { ProjectList } from "./ProjectList";

export const Projects = () => {
  return (
    <section className="centered py-y-default" id="projects__section">
      <div className="content-width container-config">
        <h2 className="title-2">
          <span className="border-bottom">Meus</span> projetos
        </h2>

        <ProjectList data={projects} />
      </div>
    </section>
  );
};
