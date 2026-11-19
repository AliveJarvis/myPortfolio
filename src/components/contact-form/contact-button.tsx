import { useEffect, useRef, useState } from "react";

import { MailIcon } from "lucide-react";

import FloatingMailButton, {
  floatingMailButtonoptions,
} from "@/components/contact-form/floating-mail-button";
import ContactFormModal from "@/components/contact-form/contact-form-modal";

const mailEnabled = process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true";

export default function ContactButton() {
  const refSendBtn = useRef<HTMLButtonElement>(null);

  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsBtnVisible(!entry.isIntersecting);
  };

  useEffect(() => {
    if (!mailEnabled) return;
    const btn = refSendBtn.current;
    const observer = new IntersectionObserver(
      observerCallback,
      floatingMailButtonoptions,
    );
    if (btn) observer.observe(btn);
    return () => {
      if (btn) observer.unobserve(btn);
    };
  }, [refSendBtn]);

  return (
    <>
      {mailEnabled && isBtnVisible && !isOpenModal && (
        <FloatingMailButton openModal={setIsOpenModal} />
      )}

      <div className="contact-control">
        <button
          disabled={!mailEnabled}
          aria-describedby={mailEnabled ? undefined : "mail-status"}
          ref={refSendBtn}
          className="button primary contact-action"
          onClick={() => setIsOpenModal(true)}
        >
          <MailIcon size={18} />
          <span>Send Message</span>
        </button>
        {!mailEnabled && (
          <p id="mail-status">Email form temporarily unavailable.</p>
        )}
      </div>

      {mailEnabled && (
        <ContactFormModal
          showModal={isOpenModal}
          setShowModal={setIsOpenModal}
        />
      )}
    </>
  );
}
