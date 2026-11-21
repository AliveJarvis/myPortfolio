import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CallIcon from "@/public/icons/call-chat-svgrepo-com.svg";
import Mail from "@/public/icons/mail-plus-svgrepo-com.svg";
import Whatsapp from "@/public/icons/whatsapp-128-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer id="contact" tabIndex={-1} className="shell site-footer">
      <div className="contact-strip">
        <div>
          <h2 className="section-title">Contact</h2>
          <div className="contact-methods">
            <a
              href={`mailto:${siteMetadata.email}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Email ${siteMetadata.email}`}
            >
              <Mail aria-hidden="true" focusable="false" />
              <span>Email</span>
            </a>
            <a href="tel:+91-6395100366" aria-label="Call +91-6395100366">
              <CallIcon aria-hidden="true" focusable="false" />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/916395100366"
              aria-label="Contact on WhatsApp"
            >
              <Whatsapp aria-hidden="true" focusable="false" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <ContactButton />
      </div>
      <div className="footer-base">
        <span>©2025 Arjun Kumar</span>
        <div className="socials">
          {(
            [
              [siteMetadata.github, "Github", GithubIcon],
              [siteMetadata.twitter, "Twitter", TwitterIcon],
              [siteMetadata.linkedin, "Linkedin", LinkedinIcon],
            ] as const
          ).map(([href, label, Icon]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`link to ${label}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
