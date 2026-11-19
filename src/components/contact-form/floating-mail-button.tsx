import { Dispatch, SetStateAction } from "react";

import { MailIcon } from "@/components/icons";

export interface FloatingMailButtonProps {
  openModal: Dispatch<SetStateAction<boolean>>;
}

export const floatingMailButtonoptions = {
  root: null,
  rootMargin: "100px",
  threshold: 0.1,
};

export default function FloatingMailButton({
  openModal,
}: FloatingMailButtonProps) {
  return (
    <button
      aria-label="open send mail modal"
      type="button"
      className="floating-mail"
      onClick={() => openModal(true)}
    >
      <MailIcon />
    </button>
  );
}
