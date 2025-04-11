import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CallIcon from "@/public/icons/call-chat-svgrepo-com.svg";
import Mail from "@/public/icons/mail-plus-svgrepo-com.svg";
import Whatsapp from "@/public/icons/whatsapp-128-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-8 text-background sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
            Contact
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:space-x-8 sm:space-y-6 lg:justify-between lg:space-x-12 lg:space-y-0">
          <a
            href={`mailto:${siteMetadata.email}`}
            target="_blank"
            className=" cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl"
          >
            <Mail className="sm:w-100 sm:h-100 m-10 h-20 w-20" />
          </a>
          <a
            href={`tel:+91-6395100366`}
            className=" cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl"
          >
            <CallIcon className="sm:w-100 sm:h-100 m-10 h-20 w-20" />
          </a>
          <a
            href={"https://wa.me/916395100366"}
            className=" cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl"
          >
            <Whatsapp className="sm:w-100 sm:h-100 m-10 h-20 w-20" />
          </a>
        </div>

        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2025 Arjun Kumar</span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.github}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.twitter}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Twitter"
          >
            <TwitterIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
