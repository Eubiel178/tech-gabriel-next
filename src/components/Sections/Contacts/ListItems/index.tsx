import { ContactProps } from "@/assets/data/contacts";

import Link from "next/link";

interface ListItemsProps {
  data: ContactProps[];
}

export const ListItems: React.FC<ListItemsProps> = ({ data }) => {
  const renderListItem = (element: ContactProps) => {
    return (
      <li
        key={element.key}
        className="flex justify-center items-center bg-tertiary small:w-full "
      >
        <Link
          className="flex flex-col gap-5 justify-center items-center text-center p-8 w-40 "
          href={element.link}
          target="_blank"
        >
          <p className="text-7xl">{element.icon}</p>

          <p>{element.text}</p>
        </Link>
      </li>
    );
  };
  //
  return (
    <ul className="flex flex-wrap	gap-8">
      {data.map((element: ContactProps) => {
        return renderListItem(element);
      })}
    </ul>
  );
};
