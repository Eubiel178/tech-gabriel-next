import { ProjectProps } from "@/assets/data/projects";

import Image from "next/image";
import Link from "next/link";

interface ProjectListProps {
  data: ProjectProps[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ data }) => {
  const renderListItem = (element: ProjectProps) => {
    return (
      <li key={element.key} className="">
        <Link
          className="flex flex-col gap-5 justify-center w-full max-w-sm"
          href={element.link}
          target="_blank"
        >
          <Image
            className="duration-100	hover:scale-105"
            src={element.img}
            alt={`Imagem do projeto: ${element.text}`}
          />

          <p>{element.text}</p>
        </Link>
      </li>
    );
  };

  return (
    <ul className="flex flex-wrap	gap-8">
      {data.map((element: ProjectProps) => {
        return renderListItem(element);
      })}
    </ul>
  );
};
