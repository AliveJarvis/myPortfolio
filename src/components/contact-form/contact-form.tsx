import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Loader2Icon } from "lucide-react";

import CustomInput from "@/components/utility/custom-input";
import CustomTextarea from "@/components/utility/custom-textarea";
import { type FormiKInputFieldProps } from "@/utility/types";

export const mailValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email required"),
  name: Yup.string().required("Name required"),
  subject: Yup.string().required("Subject required"),
  message: Yup.string().required("Message required"),
});

export type ContactFormValues = Yup.InferType<typeof mailValidationSchema>;

export type FormFields = {
  name: keyof ContactFormValues;
  label: string;
  type: "text" | "email";
  fieldType: "text" | "textarea";
  placeholder: string;
};

const FormFieldsData: FormFields[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    fieldType: "text",
    placeholder: "Email",
  },
  {
    name: "name",
    label: "Name",
    type: "text",
    fieldType: "text",
    placeholder: "Name",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    fieldType: "text",
    placeholder: "Subject",
  },
  {
    name: "message",
    label: "Message",
    type: "text",
    fieldType: "textarea",
    placeholder: "Message",
  },
];

const initialFormValues: ContactFormValues = {
  email: "",
  name: "",
  message: "",
  subject: "",
};

export interface ContactFormProps {
  isSubmitting: boolean;
  // eslint-disable-next-line
  handleSubmit: (values: ContactFormValues) => Promise<void>;
}

export default function ContactForm({
  isSubmitting,
  handleSubmit,
}: ContactFormProps) {
  return (
    <>
      <Formik
        initialValues={initialFormValues}
        validationSchema={mailValidationSchema}
        onSubmit={handleSubmit}
        validateOnChange
      >
        <Form className="mt-6 flex flex-col gap-3">
          {FormFieldsData.map((form) => (
            <div key={form.name} className="flex flex-col gap-1">
              <div>
                <label
                  htmlFor={form.name}
                  className="inline font-medium text-foreground"
                >
                  {form.label}
                </label>
              </div>
              <div className="relative">
                <Field name={form.name}>
                  {({ field, meta }: FormiKInputFieldProps<string>) =>
                    form.fieldType === "text" ? (
                      <>
                        <CustomInput
                          id={form.name}
                          {...field}
                          aria-invalid={Boolean(meta.touched && meta.error)}
                          aria-describedby={
                            meta.touched && meta.error
                              ? form.name + "-error"
                              : undefined
                          }
                          type={form.type}
                          placeholder={form.placeholder}
                          autoComplete={
                            form.name === "email" || form.name === "name"
                              ? form.name
                              : "off"
                          }
                        />
                        {Boolean(meta.touched && meta.error) && (
                          <span
                            id={form.name + "-error"}
                            className="field-error"
                          >
                            {meta.error}
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <CustomTextarea
                          id={form.name}
                          {...field}
                          aria-invalid={Boolean(meta.touched && meta.error)}
                          aria-describedby={
                            meta.touched && meta.error
                              ? form.name + "-error"
                              : undefined
                          }
                          placeholder={form.placeholder}
                        />
                        {Boolean(meta.touched && meta.error) && (
                          <span
                            id={form.name + "-error"}
                            className="field-error"
                          >
                            {meta.error}
                          </span>
                        )}
                      </>
                    )
                  }
                </Field>
              </div>
            </div>
          ))}
          <button
            type="submit"
            className="button primary mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="inline-flex items-center space-x-2">
                <Loader2Icon className="animate-spin" size={16} />
                <span>Sending</span>
              </div>
            ) : (
              <span>Submit</span>
            )}
          </button>
        </Form>
      </Formik>
    </>
  );
}
