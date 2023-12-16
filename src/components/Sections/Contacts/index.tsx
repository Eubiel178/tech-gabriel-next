import { ListItems } from "./ListItems";

import { contacts } from "@/assets/data/contacts";

export const Contacts = () => {
  return (
    <section
      className="centered py-y-default bg-secondary"
      id="contact-forms__section"
    >
      <div className="content-width container-config">
        <h2 className="title-2">
          <span className="border-bottom">Con</span>tatos
        </h2>

        <ListItems data={contacts} />
      </div>
    </section>
  );
};
