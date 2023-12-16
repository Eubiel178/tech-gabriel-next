import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleModal,
  };
}

export default useModal;
