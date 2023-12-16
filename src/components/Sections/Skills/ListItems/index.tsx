import { SkillsProps } from "@/assets/data/skills";

interface ListItemsProps {
  title: string;
  data: SkillsProps[];
}

export const ListItems: React.FC<ListItemsProps> = ({ title, data }) => {
  const renderListItem = (data: SkillsProps) => {
    return (
      <li
        className="flex flex-col gap-5 justify-center items-center text-center bg-tertiary p-8 w-40"
        key={data.key}
      >
        <p className="text-7xl">{data.icon}</p>

        <p>{data.text}</p>
      </li>
    );
  };

  return (
    <div className="container-config">
      <h2 className="title-2">{title} </h2>

      <ul className="flex flex-wrap	gap-8">
        {data.map((element: SkillsProps) => {
          return renderListItem(element);
        })}
      </ul>
    </div>
  );
};
