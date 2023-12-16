import { ListItems } from "./ListItems";

import { hardSkills, softSkills } from "@/assets/data/skills";

export const Skills = () => {
  return (
    <section
      className="centered py-y-default bg-secondary"
      id="skills__section"
    >
      <div className="content-width flex gap-10 flex-col">
        <ListItems title="Habilidades Técnicas" data={hardSkills} />

        <ListItems title="Habilidades Comportamentais" data={softSkills} />
      </div>
    </section>
  );
};
