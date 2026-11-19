import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export type ProjectShowcaseListItem = {
  index: number;
  title: string;
  href: string;
  tags: string[];
  image: { LIGHT: string; DARK?: string };
};
interface ProjectShowcaseListProps {
  data: ProjectShowcaseListItem;
  activeProject: number;
  toggleList: (index: number) => void; // eslint-disable-line no-unused-vars
}
export default function ProjectShowcaseList({
  data,
  activeProject,
  toggleList,
}: ProjectShowcaseListProps) {
  return (
    <Link
      href={data.href}
      className={`work-row ${activeProject === data.index ? "selected" : ""}`}
      onMouseEnter={() => toggleList(data.index)}
      onFocus={() => toggleList(data.index)}
    >
      <span className="work-index">{data.index + 1}.</span>
      <div className="mobile-work-image">
        <Image
          src={data.image.LIGHT}
          width={480}
          height={240}
          alt=""
          sizes="(max-width:700px) 91vw, 1px"
        />
      </div>
      <div className="work-description">
        <h3>{data.title}</h3>
        <p>
          {data.tags.map((tag) => (
            <span key={tag}>#{tag} </span>
          ))}
        </p>
      </div>
      <ExternalLink size={17} aria-hidden="true" />
    </Link>
  );
}
