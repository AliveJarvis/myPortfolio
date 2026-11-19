import { Dispatch, Fragment, SetStateAction, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { MailIcon, XIcon } from "lucide-react";

import ContactForm, {
  type ContactFormValues,
} from "@/components/contact-form/contact-form";
import ContactMailToast, {
  type MailSentToastState,
} from "@/components/contact-form/contact-mail-toast";

export interface ContactFormModelProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function ContactFormModal({
  showModal,
  setShowModal,
}: ContactFormModelProps) {
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [toastState, setToastState] = useState<MailSentToastState>({
    type: null,
    value: false,
    message: "",
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setIsSendingMail(true);
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setToastState({
          type: "success",
          value: true,
          message: "Successfully sent email",
        });
        setShowModal(false);
      } else {
        setToastState({
          type: response.status === 429 ? "warning" : "failure",
          value: true,
          message:
            response.status === 429
              ? "Rate Limiter: Only 5 email per hour"
              : "Oop! Unable to send email",
        });
        console.log(response);
      }
    } catch {
      setToastState({
        type: "failure",
        value: true,
        message: "Oop! Unable to send email",
      });
    }
    setIsSendingMail(false);
  };
  return (
    <>
      <Transition show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[100]"
          onClose={() => setShowModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-md" />
          </Transition.Child>
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-2"
            >
              <Dialog.Panel className="contact-panel">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="form-title">
                    <MailIcon size={22} />
                    <span>Send Message</span>
                  </Dialog.Title>
                  <button
                    aria-label="Close contact form"
                    className="icon-button"
                    onClick={() => setShowModal(false)}
                  >
                    <XIcon size={20} />
                  </button>
                </div>
                <ContactForm
                  isSubmitting={isSendingMail}
                  handleSubmit={handleSubmit}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <ContactMailToast toastState={toastState} showToast={setToastState} />
    </>
  );
}
