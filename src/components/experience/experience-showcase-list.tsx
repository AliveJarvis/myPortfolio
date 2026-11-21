import Image from "next/image";
import ExperienceShowcaseListItem, {
  type ExperienceShowcaseListItemProps,
} from "./experience-showcase-list-item";
import Certificate from "@/public/images/Power Extract Certificate of Internship.png";
import digitalMarketing from "@/public/images/Fundamentals of digital marketing.jpg";

const certificates = new Map([
  ["Front End Engineer", Certificate],
  ["Fundamentals of Digital Marketing", digitalMarketing],
]);
export default function ExperienceShowcaseList({
  title,
  details,
}: {
  title: string;
  details: ExperienceShowcaseListItemProps[];
}) {
  return (
    <section id={title.toLowerCase()} className="shell section-block timeline">
      <h2 className="section-title">{title}</h2>
      <ol>
        {details.map((entry) => {
          const certificate = certificates.get(entry.title);
          return (
            <ExperienceShowcaseListItem key={entry.title} {...entry}>
              {certificate && (
                <Image
                  src={certificate}
                  alt={`${entry.title} certificate`}
                  sizes="(min-width: 700px) 420px, 80vw"
                />
              )}
            </ExperienceShowcaseListItem>
          );
        })}
      </ol>
    </section>
  );
}
